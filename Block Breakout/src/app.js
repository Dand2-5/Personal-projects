const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// MAKE LINE THICK
ctx.lineWidth = 3;
// GAME VARIBLES AND OBJECTS
const PADDLE_WIDTH = 100;
const PADDLE_HEIGHT = 50;
const PADDLE_MARGIN_BOTTOM = 20;

// Create the paddle
const paddle = {
  x: canvas.width / 2 - PADDLE_WIDTH / 2,
  y: canvas.height - PADDLE_MARGIN_BOTTOM - PADDLE_HEIGHT,
  width: PADDLE_WIDTH,
  height: PADDLE_HEIGHT,
  dx: 5
}

// DRAW PADDLE
function drawPaddle(){
  ctx.fillStyle = "#2e3548";
  ctx.fillRect(paddle.x, paddle.y, paddle.width, paddle.height);

  ctx.strokeStyle = "#ffcd05";
  ctx.strokeRect(paddle.x, paddle.y, paddle.width, paddle.height);
}
// DRAW FUNCTION
function draw(){

  drawPaddle();
}
// UPDATE FUNCTION
function update(){


}
// GAME LOOP
function loop(){
//  ctx.drawImage(BG_IMG, 0, 0);
  draw();
  update();
  requestAnimationFrame(loop);
}
loop();
