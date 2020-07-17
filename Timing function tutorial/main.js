var race = document.querySelector('.race');
var lin = document.getElementById('lin');
var ease = document.getElementById('ease');
var easeIn = document.getElementById("ease-in");
var easeOut = document.getElementById("ease-out");
var easeInOut = document.getElementById("ease-in-out");

race.addEventListener('click', function () {
  lin.classList.toggle('linear-trans');
  ease.classList.toggle('ease-trans');
  easeIn.classList.toggle('ease-in-trans');
  easeOut.classList.toggle('ease-out-trans');
  easeInOut.classList.toggle("ease-in-out-trans");
})