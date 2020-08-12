let canvas = document.querySelector("#canvas");
canvas.width = innerWidth;
canvas.height = innerHeight;
let ctx = canvas.getContext("2d");

// Acceleration = f/m
// Velocity = d/t
// Max-speed

let an_check = 0;
let start = document.querySelector("#start-race");
start.addEventListener("click", animation);
let Car = function (x, y, speed, topSpeed, accel) {
  this.x = x;
  this.y = y;
  this.speed = speed;
  this.accel = accel;
  // Need a way to track the speed and need a way to accelerate;
  this.topSpeed = topSpeed;
  this.draw = () => {
    ctx.beginPath();
    ctx.fillRect(this.x, this.y, 100, 50);
  };
  this.check = (_) => {
    if (this.x + 100 == innerWidth) {
      this.x >= innerWidth;
      alert("Race Ended");
    }
  };
  this.update = (_) => {
    this.check();
    (setTimeout(acceleration), 1000);
    this.accel += an_check;
    if (this.accel > this.topSpeed) {
      this.accel = this.topSpeed;
    }
    this.x += this.accel;
    ferrari.draw();
    console.log(this.accel)
  };
};
let acceleration = (_) => {
  an_check += 1;
};
let ferrari = new Car(10, 100, 2, 20, 0);

function animation() {
  requestAnimationFrame(animation);
  ctx.clearRect(0, 0, innerWidth, innerHeight);
  ferrari.update();
}
