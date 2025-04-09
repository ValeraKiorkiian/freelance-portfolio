import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';
import Swiper from 'swiper';
import {
  Navigation,
  Autoplay,
  Keyboard,
  EffectCreative,
  EffectCoverflow,
} from 'swiper/modules';
import 'swiper/css';
//import 'swiper/css/navigation';
import 'swiper/css/effect-creative';
import 'swiper/css/effect-coverflow';

document.addEventListener('DOMContentLoaded', () => {
  new Accordion('#accordion-about', {
    duration: 300,
    showMultiple: false,
    openOnInit: [0],
  });

  const swiper = new Swiper('#swiper-about', {
    modules: [Navigation, Autoplay, Keyboard, EffectCreative],
    // Default parameters
    slidesPerView: 2,
    spaceBetween: 0,
    slideToClickedSlide: true,
    // Responsive breakpoints
    breakpoints: {
      768: {
        slidesPerView: 3,
      },
      1440: {
        slidesPerView: 6,
      },
    },
    loop: true,
    navigation: {
      nextEl: '.about-button-next',
      prevEl: '.about-button-prev',
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
      pageUpDown: true,
    },
    effect: 'creative',
    creativeEffect: {
      limitProgress: 6,
      prev: {
        translate: ['-100%', 0, 0],
        rotate: [0, 0, -360],
      },
      next: {
        translate: ['100%', 0, 0],
        rotate: [0, 0, 360],
      },
    },
    speed: 1400,
    autoplay: {
      delay: 2500,
    },
    grabCursor: true,
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const swiperMini = document.getElementById('swiper-mini');
  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          setTimeout(() => {
            swiperMini.classList.add('visible');
            if (!swiperMini.classList.contains('initialized')) {
              swiperMini.classList.add('initialized');
              const swiper = new Swiper('#swiper-mini', {
                modules: [Autoplay, EffectCoverflow],
                slidesPerView: 1,
                spaceBetween: 5,
                slideToClickedSlide: true,
                breakpoints: {
                  768: {
                    slidesPerView: 2,
                  },
                },
                effect: 'coverflow',
                grabCursor: true,
                centeredSlides: true,
                slidesPerView: 'auto',
                coverflowEffect: {
                  rotate: 60,
                  stretch: 70,
                  depth: 120,
                  modifier: 1,
                  slideShadows: true,
                },
                loop: true,
                autoplay: {
                  delay: 2500,
                },
              });
            }
          }, 1500);
          observer.unobserve(swiperMini);
        }
      });
    },
    { threshold: 0.3 }
  );

  observer.observe(swiperMini);
});
