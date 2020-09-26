document.addEventListener("DOMContentLoaded", (_) => {
  const slides = document.querySelector(".slides");
  const images = document.querySelectorAll(".slides-img");

  const prevBtn = document.querySelector("#prevBtn");
  const nextBtn = document.querySelector("#nextBtn");

  let currentSlide = 1;
  const size = images[0].clientWidth;

  slides.style.transform = `translateX(${-size * currentSlide}px)`;

  let moveForward = (_) => {
    if (currentSlide >= images.length) return;
    slides.classList.add("slide");
    currentSlide++;
    slides.style.transform = `translateX(${-size * currentSlide}px)`;
  };
  // setInterval(moveForward, 5000);
  nextBtn.addEventListener("click", moveForward);
  let moveBackward = () => {
    if (currentSlide <= 0) return;
    slides.classList.add("slide");
    currentSlide--;
    slides.style.transform = `translateX(${-size * currentSlide}px)`;
  };
  prevBtn.addEventListener("click", moveBackward);
  slides.addEventListener("transitionend", (_) => {
    if (images[currentSlide].id === "lastClone") {
      slides.classList.remove("slide");
      currentSlide = images.length - 2;
      slides.classList.add("slide");
    }
    if (images[currentSlide].id === "firstClone") {
      slides.classList.remove("slide");
      currentSlide = images.length - currentSlide;
      slides.classList.add("slide");
    }
  });
  document.addEventListener("keydown", (e) => {
    if (e.keyCode === 37) {
      moveBackward();
    } else if (e.keyCode === 39) {
      moveForward();
    }
  });
});
