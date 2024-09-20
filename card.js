const sliderWrapper = document.querySelector('.slider-wrapper');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let currentIndex = 0;

prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateSlider();
    }
});

nextButton.addEventListener('click', () => {
    if (currentIndex < sliderWrapper.children.length - 1) {
        currentIndex++;
        updateSlider();
    }
});

function updateSlider() {
    const cardWidth = sliderWrapper.children[0].offsetWidth;
    sliderWrapper.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
}
