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
// Get age
Book.prototype.getAge = function () {
  let years = new Date().getFullYear() - this.year;
  return `${this.title} is ${years} years old`
}
// Revise / chhange the year
Book.prototype.revise = function (newYear) {
  this.year = newYear;
  this.revise = true;
}
// Initialize an object
const book1 = new Book("book1", "John Doe", 2013);
const book2 = new Book("book2", "Jane Doe", 2016);

console.log(book2);
book1.revise(2019);
console.log(book1)
