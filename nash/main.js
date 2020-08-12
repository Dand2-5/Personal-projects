// var canvas = document.getElementById("canvas");
// canvas.height = innerHeight-30;
// canvas.width = innerWidth-20;
// var context = canvas.getContext("2d");
// var radius = 20;
// var color = "#0000ff";
// var g = 0.1; // acceleration due to gravity
// var x = 50; // initial horizontal position
// var y = 50; // initial vertical position
// var vx = 2; // initial horizontal speed
// var vy = 0; // initial vertical speed
// window.onload = init;
// function init() {
//   setInterval(onEachStep, 1000 / 60); // 60 fps
// }
// function onEachStep() {
//   vy += g; // gravity increases the vertical speed
//   x += vx; // horizontal speed increases horizontal position
//   y += vy; // vertical speed increases vertical position
//   if (y > canvas.height - radius) {
//     // if ball hits the ground
//     y = canvas.height - radius; // reposition it at the ground
//     vy *= -0.8; // then reverse and reduce its vertical speed
//   }
//   if (x > canvas.width + radius) {
//     // if ball goes beyond canvas
//     x = -radius; // wrap it around
//   }
//   drawBall(); // draw the ball
// }
// function drawBall() {
//   with (context) {
//     clearRect(0, 0, canvas.width, canvas.height);
//     fillStyle = color;
//     beginPath();
//     arc(x, y, radius, 0, 2 * Math.PI, true);
//     closePath();
//     fill();
//   }
// }
var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
function Graph(context, xmin, xmax, ymin, ymax, x0, y0, xwidth, ywidth){};
drawgrid(xmajor, xminor, ymajor, yminor);
drawaxes(xlabel, ylabel);
var graph = new Graph(context, -4, 4, -10, 10, 275, 210, 450, 350);
graph.drawgrid(1, 0.2, 5, 1);
graph.drawaxes("x", "y");
var xA = new Array();
var yA = new Array();
for (var i = 0; i <= 100; i++) {
  xA[i] = (i - 50) * 0.08;
  yA[i] = f(xA[i]);
}
graph.plot(xA, yA, "#ff0000", false, true);
function f(x) {
  var y;
  y = 2 * x + 1;
  return y;
}
