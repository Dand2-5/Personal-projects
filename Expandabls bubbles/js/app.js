canvas = document.getElementById('pong');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
c = canvas.getContext('2d');

var mouse = {
	x: undefined,
	y: undefined
}
var colorArray = ['#2C3E50','#E74C3C','#ECF0FI','#fff','#298089'];
var maxRad = 40;
//var minRad = 4; 
window.addEventListener('mousemove', 
	function(event){
		mouse.x = event.x;
		mouse.y = event.y;		
	});
window.addEventListener('resize', function(){
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	
	init();
});
function Circle(x, y, radius, dx, dy){
	this.x = x;
	this.y = y;
	this.dx = dx;
	this.dy = dy;
	this.radius = radius;
	this.minRad = radius;
	this.color = colorArray[Math.floor(Math.random() * colorArray.length)];
	
	this.draw = function(){
		c.beginPath();
		c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
		c.strokeStyle = '#1EBBA3'
		c.stroke();
		c.fillStyle = this.color;
		c.fill();
	}
	this.update = function(){
		if(this.x + radius > innerWidth || this.x - radius < 0){
			this.dx = -this.dx;
		}
		if(this.y + radius > innerHeight || this.y - radius < 0){
			this.dy = -this.dy;
		}
		this.y += this.dy;
		this.x += this.dx;
		
		// Interactivity
		if (mouse.x - this.x < 50 && mouse.x - this.x > -50 && mouse.y - this.y < 50 && mouse.y -this.y > -50){
			if (this.radius < maxRad){
				this.radius += 1;
			}
		}else if(this.radius > this.minRad){
			this.radius -= 1;
		}
		this.draw();
	}
}


// Check for errors from here

var circle = [];
function init(){
	circle = [];
	for (var i = 0; i < 800; i++){
		var radius = Math.random() * 3 + 1;
		var x = Math.random() * (innerWidth - radius * 2) + radius;
		var y = Math.random() * (innerHeight - radius * 2) + radius;
		var dx = (Math.random() - 0.5) * 4;
		var dy = (Math.random() - 0.5) * 4;
		
		circle.push(new Circle(x, y, radius, dx, dy));
}
}
// End check here

function animation(){
	requestAnimationFrame(animation);
	c.clearRect(0, 0, innerWidth, innerHeight);
	
	for (var i = 0; i < circle.length; i++){
		circle[i].update();
	}
}
init();
animation();
