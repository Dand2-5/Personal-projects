var canvas = document.getElementById('sky');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var ctx = canvas.getContext('2d');

function Circle(x, y, rad, dx){
  this.x = x;
  this.y = y;
  this.rad = rad;
  this.dx = dx;

  this.draw = function(){
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.rad, 0, Math.PI * 2, false);
    ctx.fillStyle = "#fff";
    ctx.fill();
  }
  var angle = 0.02;
  this.update = function(){
    angle += 1;
    //this.x += Math.sin(angle);
    if (this.y > innerHeight || this.x > innerWidth) {
      this.y = Math.random() * 20;
    }
    this.y += dx;
    this.draw();
  }
}

var circle = [];
for(var i = 0; i < 500; i++){
  var x = Math.random() * innerWidth - 30;
  var y = 30;
  var rad = Math.random() * 6;
  var dx = Math.random() * 2;
  circle.push(new Circle(x, y, rad, dx));
}

function animation(){
  requestAnimationFrame(animation);
  ctx.clearRect(0, 0, innerWidth, innerHeight);
  for (var i = 0; i < circle.length; i++) {
    circle[i].update();
  }
}
animation();
