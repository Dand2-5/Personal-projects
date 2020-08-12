// Object literal
const book1 = {
  title: "Book one",
  author: "John Doe",
  year: "2013",
  getSummary: function () {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  },
};
const book2 = {
  title: "Book two",
  author: "Jane Doe",
  year: "2016",
  getSummary: function () {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  },
};
console.log(Object.values(book2));
console.log(Object.keys(book2));
