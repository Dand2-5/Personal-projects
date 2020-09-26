document.addEventListener("DOMContentLoaded", (_) => {
  // Card options
  const cardArray = [
    {
      name: "Xenon",
      img: "img/pic1.jpg",
    },
    {
      name: "Babe",
      img: "img/pic2.jpg",
    },
    {
      name: "Doub",
      img: "img/pic3.jpg",
    },
    {
      name: "Boobs",
      img: "img/pic4.jpg",
    },
    {
      name: "Sommm",
      img: "img/pic5.png",
    },
    {
      name: "Glasses",
      img: "img/pic6.jpg",
    },
    {
      name: "Xenon",
      img: "img/pic1.jpg",
    },
    {
      name: "Babe",
      img: "img/pic2.jpg",
    },
    {
      name: "Doub",
      img: "img/pic3.jpg",
    },
    {
      name: "Boobs",
      img: "img/pic4.jpg",
    },
    {
      name: "Sommm",
      img: "img/pic5.png",
    },
    {
      name: "Glasses",
      img: "img/pic6.jpg",
    },
  ];
  cardArray.sort((_) => 0.5 - Math.random());
  const resultDisplay = document.getElementById("#result");
  // Create game board
  const grid = document.querySelector(".grid");
  let cardsChosen = [];
  let cardsChosenId = [];
  let cardsWon = [];
  // Create your board
  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      let card = document.createElement("img");
      card.setAttribute("src", "img/blank.jpg");
      card.setAttribute("data-id", i);
      card.addEventListener("click", flipCard);
      grid.appendChild(card);
    }
  }
  // check for matches
  function checkForMatch() {
    let cards = document.querySelectorAll("img");
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];
    if (cardsChosen[0] === cardsChosen[1]) {  
      alert("You found a match");
      cards[optionOneId].setAttribute("src", "img/close.png");
      cards[optionTwoId].setAttribute("src", "img/close.png");
      cardsWon.push(cardsChosen);
    } else {
      cards[optionOneId].setAttribute("src", "img/blank.jpg");
      cards[optionTwoId].setAttribute("src", "img/blank.jpg");
      alert("Sorry");
    }
    cardsChosen = [];
    cardsChosenId = [];
    resultDisplay.textContent = cardsWon.length;
    if (cardsWon.length === cardsArray.length / 2) {
      resultDisplay.textContent = "Congratulations";
    }
  }
  // Flip card
  function flipCard() {
    let cardId = this.getAttribute("data-id");
    cardsChosen.push(cardArray[cardId.name]);
    cardsChosenId.push(cardId);
    this.setAttribute("src", cardArray[cardId].img);
    if (cardsChosen.length === 2) {
      setTimeout(checkForMatch, 500);
    }
  }

  createBoard();
});
