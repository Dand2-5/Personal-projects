const canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext('2d');

addEventListener('resize', function(){
  canvas.width = innerWidth;
  canvas.height = innerHeight;

  init();
});
const colors = [
  '#00bdff',
  '#4d39ce',
  '#088eff'
];
const mouse = {
  x: innerWidth / 2,
  y: innerHeight / 2
};

addEventListener('mousemove', function() {
  mouse.x = event.clientX;
  mouse.y = event.clientY;
});
function Point(x, y, radius, color) {
  this.x = x;
  this.y = y;
  this.radius = radius;
  this.color = color;
  this.radians = Math.random() * Math.PI * 2;
  this.velocity = 0.05;
  this.randomDistanceFromCenter = Math.random() * 80 + 50;
  this.lastMouse = {x: x, y: y};

  this.update = function () {
    const lastPoint = {x: this.x, y: this.y};
    this.radians += this.velocity;
    this.lastMouse.x += (mouse.x - this.lastMouse.x) * 0.03;
    this.lastMouse.y += (mouse.y - this.lastMouse.y) * 0.03;
    this.x = this.lastMouse.x + Math.cos(this.radians) * this.randomDistanceFromCenter;
    this.y = this.lastMouse.y + Math.sin(this.radians) * this.randomDistanceFromCenter;
    this.draw(lastPoint);
  }
  this.draw = function (lastPoint) {
    ctx.beginPath();
    ctx.lineWidth = this.radius;
    ctx.strokeStyle = this.color;
    ctx.moveTo(lastPoint.x, lastPoint.y);
    ctx.lineTo(this.x, this.y);
    ctx.stroke();
    ctx.closePath();
  }
}
let particles;
function init(){
  particles = [];
  for (var i = 0; i < 100; i++) {
    var x = canvas.width / 2;
    var y = canvas.height / 2;
    var rad = Math.random() * 2 + 1;
    particles.push(new Point(x, y, rad, colors[Math.floor(Math.random() * colors.length)]));
  }
}

function animate(){
  requestAnimationFrame(animate);
  ctx.fillStyle = 'rgba(255, 255, 255, .05)';
  ctx.fillRect(0, 0, innerWidth, innerHeight);
  for (var i = 0; i < particles.length; i++) {
    particles[i].update();
  }
}
init();
animate();
