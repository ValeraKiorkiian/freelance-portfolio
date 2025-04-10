import { enableBodyScroll, disableBodyScroll } from 'body-scroll-lock';
// const bodyScrollLock = require('body-scroll-lock');
// const disableBodyScroll = bodyScrollLock.disableBodyScroll;
// const enableBodyScroll = bodyScrollLock.enableBodyScroll;
(() => {
  const mobileMenu = document.querySelector('.js-menu-container');
  const openMenuBtn = document.querySelector('.js-open-menu');
  const closeMenuBtn = document.querySelector('.js-close-menu');

  const menuLinks = document.querySelectorAll('.mobile-modal-link');
  const toggleMenu = () => {
    const isMenuOpen =
      openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('is-open');

    if (!isMenuOpen) {
      disableBodyScroll(document.body);
    } else {
      enableBodyScroll(document.body);
    }
  };
  menuLinks.forEach(menuLink => {
    menuLink.addEventListener('click', toggleMenu);
  });
  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);
  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;
    mobileMenu.classList.remove('is-open');
    openMenuBtn.setAttribute('aria-expanded', false);
    enableBodyScroll(document.body);
  });
})();
