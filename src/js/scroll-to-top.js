export const btnScrollUp = document.getElementById('scrollToTop');

export const scrollShow = () => {
  if (window.scrollY > 500) {
    btnScrollUp.classList.add('show');
  } else {
    btnScrollUp.classList.remove('show');
  }
};

export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};
