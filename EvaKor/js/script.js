if (window.innerWidth > 768) {
  const slider = document.querySelector(".slider-container");
  const slides = document.querySelector(".slides");
  const slideWidth = slides.firstElementChild.clientWidth;
  const slideCount = slides.children.length;
  let currentIndex = 0;

  function nextSlide() {
    currentIndex++;

    if (currentIndex >= slideCount) {
      currentIndex = 0;
    }
    updateSliderPosition();
  }

  function updateSliderPosition() {
    slides.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    // Update slide opacity
    for (let i = 0; i < slideCount; i++) {
      if (i === currentIndex) {
        slides.children[i].classList.add("active");
      } else {
        slides.children[i].classList.remove("active");
      }
    }
  }

  setInterval(nextSlide, 2000); // Auto-rotate every 2 seconds
}
