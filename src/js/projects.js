import 'swiper/css';
// import 'swiper/css/navigation';
// Swiper.use([Keyboard]);
import Swiper from 'swiper';
import { Navigation, Keyboard,Parallax } from 'swiper/modules';

const projectsSwiper = new Swiper('#projects-swiper', {
  modules: [Navigation, Keyboard,Parallax],
  slidesPerView: 1,
  navigation: {
    nextEl: '.projects-button-next',
    prevEl: '.projects-button-prev',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  parallax: {
    enabled: true,
    speed:2000,
  },
  a11y: {
    enabled: true,
  },
  on: {
    slideChange: function () {
      // Перевірка на початок і кінець списку
      const prevButton = document.querySelector('.projects-button-prev');
      const nextButton = document.querySelector('.projects-button-next');

      if (this.isBeginning) {
        prevButton.classList.add('swiper-button-disabled');
      } else {
        prevButton.classList.remove('swiper-button-disabled');
      }

      if (this.isEnd) {
        nextButton.classList.add('swiper-button-disabled');
      } else {
        nextButton.classList.remove('swiper-button-disabled');
      }
    },
  },
});



const buttons = document.querySelectorAll('.projects-btn'); 

const url = 'https://github.com/ValeraKiorkiian/freelance-portfolio/tree/main';

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        window.open(url, '_blank'); 
    });
});
  

