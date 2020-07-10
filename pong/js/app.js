class Vec{
	constructor(x = 0, y = 0)
	{
		this.x = x;
		this.y = y;
	}
}

const canvas = document.getElementById('pong');
const c = canvas.getContext('2d');

c.fillStyle = "#000";
c.fillRect(0, 0, canvas.width, canvas.height);

c.fillStyle = "#fff";
c.fillRect(0, 0, 10, 10);

