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
    duration: 700,
    showMultiple: false,
    openOnInit: [0],
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const container = document.querySelector('#accordion-about');

  container.addEventListener('click', function (event) {
    const trigger = event.target.closest('.ac-trigger');
    if (!trigger) return;

    const item = trigger.closest('.ac');
    if (!item) return;

    const prevTop = item.getBoundingClientRect().top + window.scrollY;

    setTimeout(() => {
      const newTop = item.getBoundingClientRect().top + window.scrollY;
      const scrollDiff = newTop - prevTop;

      if (scrollDiff !== 0) {
        window.scrollBy({
          top: scrollDiff,
          behavior: 'smooth',
        });
      }
    }, 750);
  });

  const swiper = new Swiper('#swiper-about', {
    modules: [Navigation, Autoplay, Keyboard, EffectCoverflow, EffectCreative],
    // Default parameters
    slidesPerView: 2,
    spaceBetween: 0,
    slideToClickedSlide: true,
    effect: 'creative',
    // Responsive breakpoints
    breakpoints: {
      320: {
        slidesPerView: 2,
        effect: 'creative',
        creativeEffect: {
          limitProgress: 2,
          prev: {
            translate: ['-100%', 0, 0],
            rotate: [0, 0, -360],
          },
          next: {
            translate: ['100%', 0, 0],
            rotate: [0, 0, 360],
          },
        },
      },
      768: {
        slidesPerView: 3,
        effect: 'creative',
        creativeEffect: {
          limitProgress: 3,
          prev: {
            translate: ['-100%', 0, 0],
            rotate: [0, 0, -360],
          },
          next: {
            translate: ['100%', 0, 0],
            rotate: [0, 0, 360],
          },
        },
      },
      1440: {
        slidesPerView: 6,
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
      },
    },
    loop: true,
    navigation: {
      nextEl: '.about-button-next',
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
      pageUpDown: true,
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
