// Construstor
function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
  this.getSummary = function () {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  };
}
const book1 = new Book("book1", "John Doe", 2013);
const book2 = new Book("book2", "Jane Doe", 2016);

console.log(book2.getSummary);
