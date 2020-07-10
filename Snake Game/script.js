const canvas = document.getElementById('canvas');
canvas.width = 608;
canvas.height = 608;
const ctx = canvas.getContext('2d');
const box = 32;
const snakeimg = new Image();
snakeimg.src = "image/snake.png";
const ground = new Image();
ground.src = "img/ground.png";
const gameOver = new Image();
gameOver.src = "img/gameover.png";
var goat = new Image();
goat.src = "img/apple.png";
const foodimg = new Image();
foodimg.src = "img/food.png";
ctx.drawImage(foodimg, 0,0);
var food = {
  x: Math.floor(Math.random() * 17 + 1) * box,
  y: Math.floor(Math.random() * 15 + 3) * box,
}
var snake = [];
snake[0] = {x: 9*box, y: 8*box};
var d;
// lets start working on the movement of the Snake
document.addEventListener("keydown", function(event){
  if (event.keyCode == 37 && d != "RIGHT") {
    d = "LEFT";
  }else if (event.keyCode == 38 && d != "DOWN") {
    d = "UP";
  }else if (event.keyCode == 39 && d != "LEFT") {
    d = "RIGHT";
  }else if (event.keyCode == 40 && d != "UP") {
    d = "DOWN";
  }
})

function collision(head,array) {
  for (var i = 0; i < array.length; i++) {
    if (head.x == array[i].x && head.y == array[i].y) {
      return true;
    }
  }
  return false;
}
function gameover(){
  ctx.fillStyle = 'rgba(0, 0, 0, .5)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(gameOver, 0, 0);
}
let score = 0;
function animation(){
  ctx.drawImage(ground, 0, 0);
  ctx.drawImage(foodimg, food.x, food.y);
  for (var i = 0; i < snake.length; i++) {
     // ctx.fillStyle = (i == 0)? "green":"white";
     // ctx.fillRect(snake[i].x, snake[i].y, box, box);
     //
     // ctx.strokeStyle = "red";
     // ctx.strokeRect(snake[i].x, snake[i].y, box, box);
   if (i == 0) {
     ctx.drawImage(goat, snake[i].x, snake[i].y);
    }
   ctx.drawImage(goat, snake[i].x, snake[i].y);
  }
  var snakeX = snake[0].x;
  var snakeY = snake[0].y;

  if(d == "LEFT") snakeX -= box;
  if(d == "UP") snakeY -= box;
  if(d == "RIGHT") snakeX += box;
  if(d == "DOWN") snakeY += box;

  if (snakeX == food.x && snakeY == food.y) {
    score += 5;
    food = {
      x: Math.floor(Math.random() * 17 + 1) * box,
      y: Math.floor(Math.random() * 15 + 3) * box,
    }
  }else {
    snake.pop();
  }
  var newHead = {
    x: snakeX,
    y: snakeY
  }
  if(snakeX < box || snakeX > 17 * box || snakeY < 3 * box || snakeY > 17 * box || collision(newHead, snake)){
    gameover();
    clearInterval(game);
  }
  snake.unshift(newHead);
  ctx.font = "35px Arial";
  ctx.fillStyle = "#fff";
  ctx.fillText(score, 2.2*box, 1.6*box);
}
var game = setInterval(animation, 150);
