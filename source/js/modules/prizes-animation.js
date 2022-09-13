import {NumbersAnimation} from "./numbers-animation";
const TIME_BETWEEN_ONE_AND_TWO = 500;

class PrizesAnimation {
  constructor() {
    this.firstItem = document.querySelector(`.prizes__item--journeys`);
    this.secondItem = document.querySelector(`.prizes__item--cases`);
    this.thirdItem = document.querySelector(`.prizes__item--codes`);

    this.firstNum = this.firstItem.querySelector(`.real`);
    this.secondNum = this.secondItem.querySelector(`.real`);
    this.thirdNum = this.thirdItem.querySelector(`.real`);

    console.log(this.firstItem, this.secondItem, this.thirdItem);
    console.log(this.firstNum, this.secondNum, this.thirdNum);
  }

  init() {
    // this.thirdNum.textContent = 11;

    setTimeout(() => {
      this.firstItem.classList.add(`active`);
    }, 1000);

    setTimeout(() => {
      this.secondItem.classList.add(`active`);

      setTimeout(() => {
        new NumbersAnimation(this.secondNum, 1, 7);
      }, 1400);
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
