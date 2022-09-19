import {NumbersAnimation} from "./numbers-animation";

class PrizesAnimation {
  constructor() {
    this.firstItem = document.querySelector(`.prizes__item--journeys`);
    this.secondItem = document.querySelector(`.prizes__item--cases`);
    this.thirdItem = document.querySelector(`.prizes__item--codes`);

    this.firstNum = this.firstItem.querySelector(`.real`);
    this.secondNum = this.secondItem.querySelector(`.real`);
    this.thirdNum = this.thirdItem.querySelector(`.real`);
  }

  init() {
    setTimeout(() => {
      this.firstItem.classList.add(`active`);
    }, 1000);

    setTimeout(() => {
      this.secondItem.classList.add(`active`);

      setTimeout(() => {
        new NumbersAnimation(this.secondNum, 1, 7);
      }, 1500);
    }, 1500);

    setTimeout(() => {
      this.thirdItem.classList.add(`active`);

      setTimeout(() => {
        new NumbersAnimation(this.thirdNum, 11, 900);
      }, 1500);
    }, 2000);
  }

  destroy() {

  }
}

export const prizesAnimation = new PrizesAnimation();
