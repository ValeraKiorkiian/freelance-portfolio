// const openMenu = document.querySelector('.js-nav-list-open');
// const navList = document.querySelector('.nav-list');
// const headerSection = document.querySelector('.header');
// openMenu.addEventListener(`click`, event => {
//   event.stopPropagation();
//   navList.classList.toggle('is-open');
// });
// headerSection.addEventListener(`click`, () => {
//   if (navList.classList.contains('is-open')) {
//     navList.classList.toggle('is-open');
//   }
// });
const openMenu = document.querySelector('.js-nav-list-open');
const navList = document.querySelector('.nav-list');

openMenu.addEventListener('click', event => {
  event.stopPropagation();
  navList.classList.toggle('is-open');
});

// Закрытие меню при клике вне кнопки и вне самого меню
document.addEventListener('click', event => {
  const isClickInsideMenu = navList.contains(event.target);
  const isClickOnButton = openMenu.contains(event.target);

  if (!isClickInsideMenu && !isClickOnButton) {
    navList.classList.remove('is-open');
  }
});
