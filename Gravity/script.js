const canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext('2d');

var gravity = 1;
var friction = 0.99;

var colorArray = ['#2C3E50','#E74C3C','#ECF0FI','#fff','#298089'];
var mouse = {
  x: canvas.width / 2,
  y: canvas.height / 2
};
window.addEventListener('mousemove', function(event) {
  mouse.x = event.x;
  mouse.y = event.y;
})
window.addEventListener('resize', function(){
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  init();
});
window.addEventListener('click', function(){
  init();
});
function Ball(x, y, dy, dx, radius, color){
  this.x = x;
  this.y = y;
  this.dy = dy;
  this.dx = dx;
  this.radius = radius;
  this.color = color;
  this.minrad = radius;
  this.update = function(){
    if (this.y > innerHeight - this.radius ) {
      this.dy = -this.dy * friction;
    }else{
      this.dy += gravity;
    }
    if (this.x > innerWidth - this.radius || this.x < 0 + this.radius) {
      this.dx = -this.dx;
    }
    if (mouse.x - this.x < 50 && mouse.x - this.x > -50 && mouse.y - this.y < 50 && mouse.y - this.y > -50) {
      if (this.radius < 50) {
        this.radius ++;
      }
    }else if (this.radius > this.minrad) {
      this.radius --;
    }
    this.x += this.dx;
    this.y += this.dy;
    this.draw();
  };
  this.draw = function(){
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.stroke();
  };
}
var ballsArray;
function init() {
  ballsArray = [];
  for (var i = 0; i < 200; i++) {
    var x = Math.random() * (innerWidth - 30) + 30;
    var y = Math.random() * (innerHeight + 30) - 30;
    var dy = (Math.random() * -4) + 2;
    var dx = (Math.random() * -4) + 2;
    var radius = Math.random() * 8 + 10;
    var color = colorArray[Math.floor(Math.random() * colorArray.length) + 1];
    ballsArray.push(new Ball(x, y, dy, dx, radius, color));
  }
}
// file:///home/doub/desktop/javascript Web course/Gravity/index.html
function animation(){
  requestAnimationFrame(animation);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (var i = 0; i < ballsArray.length; i++) {
    ballsArray[i].update();
  }
}
init();
animation();
