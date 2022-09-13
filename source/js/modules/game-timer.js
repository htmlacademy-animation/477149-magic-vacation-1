const MAX_TIMER = 300;
const FPS_INTERVAL = 1000;

export default class GameTimer {
  constructor(element) {
    this.element = document.querySelector(element);
    this.minutesEl = this.element.querySelector(`span:nth-of-type(1)`);
    this.secondsEl = this.element.querySelector(`span:nth-of-type(2)`);
    this.currentRequest = null;
  }

  init() {
    this.run();
  }

  destroy() {
    cancelAnimationFrame(this.currentRequest);
    this.draw(MAX_TIMER * 1000);
  }

  run() {
    let now;
    let diff;
    let then = Date.now();
    let start = Date.now();
    let elapsed;

    const tick = () => {
      this.currentRequest = requestAnimationFrame(tick);

      now = Date.now();
      elapsed = now - then;
      diff = now - start;

      if (elapsed > FPS_INTERVAL) {
        then = now - (elapsed % FPS_INTERVAL);
        this.draw((MAX_TIMER * 1000 - diff) + 1000);
      }

      if (diff / 1000 > MAX_TIMER) {
        cancelAnimationFrame(this.currentRequest);
        this.draw(0);
      }
    };

    this.currentRequest = requestAnimationFrame(tick);
  }


  draw(time) {
    const minutes = Math.floor(time / 60000);
    const seconds = Math.floor((time % 60000) / 1000);

    this.minutesEl.textContent = minutes < 10 ? `0${minutes}` : minutes;
    this.secondsEl.textContent = seconds < 10 ? `0${seconds}` : seconds;
  }

}
