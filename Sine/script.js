const canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext('2d');

var wave = {
  y: canvas.height / 2,
  amplitude: 180,
  wavelength: 0.01,
  frequency: 0.01
}
function ren(){
  wave.amplitude -= 10
}
function len(){
  wave.amplitude += 10
}
var increment = wave.frequency;
function animation(){
  requestAnimationFrame(animation);
  ctx.fillStyle = 'rgba(0 ,0, 0, .01)'
  ctx.fillRect(0, 0, innerWidth, innerHeight);
  increment += wave.frequency;
  ctx.beginPath();
  ctx.moveTo(0, canvas.height / 2);
  for (var i = 0; i < canvas.width; i++) {
    ctx.lineTo(i, wave.y + Math.sin(i * wave.wavelength * Math.sin(increment)) * wave.amplitude * Math.sin(increment));
  }
  ctx.moveTo(0, canvas.height / 2);
  for (var i = 0; i < canvas.width; i++) {
    ctx.lineTo(i, wave.y + Math.sin(i * wave.wavelength / Math.sin(increment)) * wave.amplitude * Math.sin(increment));
  }
  ctx.moveTo(0, canvas.height / 3);
  for (var i = 0; i < canvas.width; i++) {
    ctx.lineTo(i, wave.y + Math.sin(i * wave.wavelength + increment) * wave.amplitude * Math.sin(increment));
  }
  ctx.moveTo(0, canvas.height / 4);
  for (var i = 0; i < canvas.width; i++) {
    ctx.lineTo(i, wave.y + Math.sin(i * wave.wavelength - increment) * wave.amplitude * Math.sin(increment));
  }
  ctx.strokeStyle = 'hsl(20, 50%, 50%)'
  ctx.stroke();
}
animation();
