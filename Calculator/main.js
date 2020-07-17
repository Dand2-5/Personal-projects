// Selectors
var btn = document.querySelectorAll(".num");
var input = document.querySelector(".value");
var operator = document.querySelectorAll('.operator');
var clear = document.querySelector('.clear');
// event listeners
for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener('click', button);
}
for (let i = 0; i < operator.length; i++) {
  operator[i].addEventListener('click', operator)
}
clear.addEventListener('click', clear);
// Functions

function button(e) {
  e.preventDefault();
  input.value += e.target.value;
    console.log(e.target.value);
}
function operator(e){
  console.log("Operator clickedk")
}
function clear(e) {
  e.preventDefault();
  input.value = "";
}