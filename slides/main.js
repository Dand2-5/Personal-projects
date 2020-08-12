const left = document.getElementById("left"),
  right = document.getElementById("right"),
  currentWrapper = document.getElementById("currentWrapper");
currentImg = document.getElementById("current");

let current = 0;

const images = [
  "img/img1.jpg",
  "img/img2.jpg",
  "img/img3.jpg",
  "img/img4.jpg",
  "img/img5.jpg",
  "img/img6.jpg",
];
let init = (current) => {
  currentImg.classList.remove('fade');
  currentImg.src = images[current];
  currentImg.classList.add('fade');
  console.log("init");
};

let goLeft = () => {
  if (current <= 0) {
    current = images.length;
  }
  current--;
  console.log(current);
  init(current);
};
// Fix bug.
let goRight = () => {
  if (current >= images.length - 1) {
    current = 0;
    console.log("reset"); // The condition is working cause we get our reset log in the console.
  }
  current++;
  console.log(current);
  init(current);
};
setInterval(goRight, 5000);
document.addEventListener("DOMContentLoaded", init(current));
left.addEventListener("click", goLeft);
// left.addEventListener("click", init(current));
right.addEventListener("click", goRight);
// right.addEventListener("click", init(current));
