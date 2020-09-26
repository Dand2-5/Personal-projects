const Typewriter = function (txtElement, words, wait = 3000) {
  this.txtElement = txtElement;
  this.words = words;
  this.txt = "";
  this.wordIndex = 0;
  this.wait = parseInt(wait, 10);
  this.type();
  this.isDeleting = false;
};

// Type method
Typewriter.prototype.type = function () {
  // Current index of word
  const current = this.wordIndex % this.words.length;
  // Get full text of current word
  const fullTxt = this.words[current];
  // Check if deleting
  if (this.isDeleting) {
    // Remove a character
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    // Add a character
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }
  // Insert txt into element
  this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

  // Initial Type speed
  let typeSpeed = 300;
  if (this.isDeleting) {
    typeSpeed /= 2;
  }
  // if word is complete
  if (!this.isDeleting && this.txt === fullTxt) {
    // Make pause at end
    typeSpeed = this.wait;
    // Set deleting to true
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === "") {
    this.isDeleting = false;
    // Move to the next word
    this.wordIndex++;
    // Pause before typing
    typeSpeed = 500;
  }
  setTimeout(() => this.type(), typeSpeed);
};

// Init on DOM load
document.addEventListener("DOMContentLoaded", init);

// Init app
function init() {
  const txtElement = document.querySelector(".txt-type");
  const words = JSON.parse(txtElement.getAttribute("data-words"));
  const wait = txtElement.getAttribute("data-wait");

  // Init typewriter
  new Typewriter(txtElement, words, wait);
}