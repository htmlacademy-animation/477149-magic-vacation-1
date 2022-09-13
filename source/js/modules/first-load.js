export default () => {
  // const header = document.querySelector(`.header`);
  const socialBlock = document.querySelector(`.social-block`);

  window.addEventListener(`load`, () => {
    document.body.classList.add(`page-loaded`);
    socialBlock.classList.add(`loaded`);
    // header.classList.add(`loaded`);

    setTimeout(()=> {
      socialBlock.classList.remove(`loaded`);
      // header.classList.remove(`loaded`);
    }, 500);

    document.querySelectorAll('.number-animation').forEach((el, index) => {
      console.log(el);
    });
  });
};
