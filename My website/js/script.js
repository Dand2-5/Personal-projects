var hamburger = document.querySelector('.hamburger');
var navlinks = document.querySelector('.nav__links');
var links = document.querySelectorAll('.nav__link li');

hamburger.addEventListener('click', function(){
    navlinks.classList.toggle('open');
})