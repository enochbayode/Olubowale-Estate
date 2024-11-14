const track = document.querySelector('.carousel-track');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let currentSlide = 0;

// Detect number of cards to slide based on screen width
function getCardsPerSlide() {
  return window.innerWidth >= 768 ? 4 : 1;
}

// Update the track's position
function updateCarousel() {
  const cardWidth = track.querySelector('.card').getBoundingClientRect().width;
  const cardsPerSlide = getCardsPerSlide();
  track.style.transform = `translateX(-${currentSlide * cardWidth}px)`;
}

// Next button click
nextButton.addEventListener('click', () => {
  const totalCards = track.children.length;
  const cardsPerSlide = getCardsPerSlide();
  if (currentSlide < totalCards - cardsPerSlide) {
    currentSlide++;
    updateCarousel();
  }
});

// Previous button click
prevButton.addEventListener('click', () => {
  if (currentSlide > 0) {
    currentSlide--;
    updateCarousel();
  }
});

// Handle window resize to adjust slides
window.addEventListener('resize', updateCarousel);

// Initialize carousel on page load
updateCarousel();
