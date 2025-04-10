const coversRefs = {
  coverList: document.querySelector('.covers-list'),
};

window.addEventListener('scroll', coversAnimationBegin);

function coversAnimationBegin() {
  const { top, bottom } = coversRefs.coverList.getBoundingClientRect();
  const { innerHeight } = window;
  if (
    (top > 0 && (top < innerHeight || bottom <= 0)) ||
    (bottom > 0 && (bottom < innerHeight || top <= 0))
  ) {
    coversRefs.coverList.classList.add('active');
  } else {
    coversRefs.coverList.classList.remove('active');
  }
}
