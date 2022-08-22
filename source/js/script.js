// modules
import firstLoad from './modules/first-load.js';
import mobileHeight from './modules/mobile-height-adjust.js';
import slider from './modules/slider.js';
import menu from './modules/menu.js';
import footer from './modules/footer.js';
import chat from './modules/chat.js';
import result from './modules/result.js';
import form from './modules/form.js';
import social from './modules/social.js';
import FullPageScroll from './modules/full-page-scroll';
import TextAnimation from './modules/text-animation';

// init modules
firstLoad();
mobileHeight();
slider();
menu();
footer();
chat();
result();
form();
social();


const fullPageScroll = new FullPageScroll();
fullPageScroll.init();

const animateIntroTitle = new TextAnimation({
  element: `.intro__title`,
  multiline: true,
  delay: 500,
});

const animateDate = new TextAnimation({
  element: `.intro__date`,
  delay: 1000
});

const animateSliderTitle = new TextAnimation({
  element: `.slider__item-title`,
  delay: 500
});

const animatePrizesTitle = new TextAnimation({
  element: `.prizes__title`,
  delay: 500
});
