import GameTimer from "./game-timer";

class Game {
  constructor() {
    this.timerRef = document.querySelector(".game__counter");
    this.timer = null;
    this.onTimerTimeEnd = this.onTimerTimeEnd.bind(this);
  }

  start() {
    if (this.timer) {
      return;
    }

    this.timer = new GameTimer(this.timerRef);
    this.timer.init();
  }

  end() {
    if (this.timer) {
      this.timer.destroy();
      this.timer = null;
    }
  }

  onTimerTimeEnd() {
    this.timer = null;
    const results = document.querySelectorAll(`.screen--result`);
    const targetEl = results.find((el) => el.getAttribute(`id`) === "result3");
    targetEl.classList.add(`screen--show`);
    targetEl.classList.remove(`screen--hidden`);
  }
}

export const game = new Game();
