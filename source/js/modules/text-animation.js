const DEFAULT_DURATION = 500;
const MIN_DELAY = 50;

const getRandomNumber = (min, max) => {
  const random = Math.floor(Math.random() * (max - min) + min);

  return Math.floor(random / min) * min;
};

export default class TextAnimation {
  constructor({element, multiline = false, delay = 0}) {
    this.element = document.querySelector(element);
    this.multiline = multiline;
    this.delay = delay;
    this.duration = DEFAULT_DURATION;

    this.convertText();
  }

  createWrap(letter, wordLength, wordNumber) {
    const span = document.createElement(`span`);
    const delay = getRandomNumber(MIN_DELAY, wordLength * MIN_DELAY);

    span.textContent = letter;

    if (letter === ` `) {
      span.classList.add(`space`);
      return span;
    }

    span.style.animationDuration = `${this.duration}ms`;
    span.style.animationDelay = `${wordNumber * (wordLength * MIN_DELAY) + delay + this.delay}ms`;

    return span;
  }

  convertText() {
    if (!this.element) {
      return;
    }

    let text = this.element.textContent;

    if (this.multiline) {
      text = text.trim().split(` `).map((letter) => letter);
    } else {
      text = [text];
    }

    const content = text.reduce((fragmentParent, word, wordNumber) => {
      const wordElement = Array.from(word).reduce((fragment, letter, index, arr) => {
        fragment.appendChild(this.createWrap(letter, arr.length, wordNumber));
        return fragment;
      }, document.createDocumentFragment());

      const wordContainer = document.createElement(`span`);
      wordContainer.classList.add(`title-animation`);
      wordContainer.appendChild(wordElement);
      fragmentParent.appendChild(wordContainer);

      return fragmentParent;
    }, document.createDocumentFragment());

    this.element.innerHTML = ``;
    this.element.appendChild(content);
  }
}
