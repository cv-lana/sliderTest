import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import './index.html';
import './css/style.css';
// import './sass/style.sass';

window.addEventListener('load', () => {
  const preloader = document.getElementById('preloader');
  preloader.classList.add('preloader-hide');
  setInterval(() => {
    preloader.classList.add('preloader-hidden');
  }, 900);
});

const sliderCarousel = new Swiper('.slider-carousel', {
  loop: true,
  slidesPerView: 3,
  centeredSlides: true,
  slideToClickedSlide: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  on: {
    imagesReady: function () {
      this.el.classList.remove('loading');
    },
  }
});

const sliderFade = new Swiper('.slider-fade', {
  loop: true,
  watchSlidesProgress: true,
  lazy: {
    loadPrevNext: true,
  },
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
});
