import Swiper from 'swiper';
import { Navigation, Pagination, Keyboard } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css';
import axios from 'axios';

const swiper = new Swiper('.reviews-swiper', {
  modules: [Navigation, Pagination, Keyboard],
  slidesPerView: 1,
  spaceBetween: 16,
  breakpoints: {
    768: { slidesPerView: 2 },
    1440: { slidesPerView: 4 },
  },
  navigation: {
    nextEl: '[data-btn="next"]',
    prevEl: '[data-btn="prev"]',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
});

async function fetchReviews() {
  try {
    const response = await axios.get(
      'https://portfolio-js.b.goit.study/api/reviews'
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

async function renderReviews() {
  const reviews = await fetchReviews();
  const reviewsContainer = document.querySelector('[data-swiper="reviews"]');

  if (!reviewsContainer) return;

  reviewsContainer.innerHTML = '';

  reviews.forEach(review => {
    const reviewItem = `
            <li class="swiper-slide swiper-review swiper-id">
                <img class="swiper-avatar_url" src="${review.avatar_url}" width="48" height="48" alt="${review.author} loading="lazy"">
                <h3 class="swiper-author">${review.author}</h3>
                <p class="swiper-review">${review.review}</p>
            </li>
        `;
    reviewsContainer.insertAdjacentHTML('beforeend', reviewItem);
  });

  swiper.update();
}

document.addEventListener('DOMContentLoaded', renderReviews);
