const openMenu = document.querySelector('.js-nav-list-open');
const navList = document.querySelector('.nav-list');
const headerSection = document.querySelector('.header');
openMenu.addEventListener(`click`, event => {
  event.stopPropagation();
  navList.classList.toggle('is-open');
});
headerSection.addEventListener(`click`, () => {
  if (navList.classList.contains('is-open')) {
    navList.classList.toggle('is-open');
  }
});
