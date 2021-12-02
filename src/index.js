import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import './index.html';
import './css/style.css';
// import './sass/style.sass';

const swiper = new Swiper('.swiper', {
  loop: true,
  slidesPerView: 3,

  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 0,
    },
    1050: {
      slidesPerView: 3,
      spaceBetween: 30,
      centeredSlides: true,
      slideToClickedSlide: true,
    }
  },
});

