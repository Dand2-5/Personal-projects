// Construstor
function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
}
// Get Summary
Book.prototype.getSummary = function () {
  return `${this.title} was written by ${this.author} in ${this.year}`;
};

function Magazine(title, author, year, month) {
  Book.call(this, title, author, year);
  this.month = month;
}
// Inherit Prototype
Magazine.prototype = Object.create(Book.prototype);
// Instantiate Magazine object
const mag1 = new Magazine("Mag one", "Daniel Damasus", "2017", "Jan");
console.log(mag1.getSummary());
let dna = document.querySelector("#dna");
let text = 'I love Jesus \n';
let i = 0;
document.addEventListener('click', function () {
  dna.innerText += text;
})
function oge() {
}
console.log(text)
let dan = document.createElement("p")
dan.innerText = "Daniel is a boy";
document.body.appendChild(dan)
