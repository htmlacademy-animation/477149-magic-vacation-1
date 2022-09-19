export class NumbersAnimation {
  constructor(element, min = 1, max, duration = 800, fps = 12) {
    this.el = element;
    this.min = parseInt(min);
    this.max = parseInt(max);
    this.duration = duration;
    this.fpsInterval = 1000 / fps;
    this.startTime = Date.now();
    this.prevTick = this.startTime;

    this.tick = this.tick.bind(this);
    this.run();
  }

  run() {
    requestAnimationFrame(this.tick);
  }

  tick() {
    const now = Date.now();

    if (now - this.prevTick < this.fpsInterval) {
      return requestAnimationFrame(this.tick);
    }

    let newValue = 1 + Math.floor((this.max - this.min) * (now - this.startTime) / this.duration);

    if (newValue > this.max) {
      newValue = this.max;
      cancelAnimationFrame(this.tick);
    } else {
      requestAnimationFrame(this.tick);
    }

    this.prevTick = now;
    this.el.textContent = newValue;
  }
}
