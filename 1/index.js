// Import stylesheets
import './style.css';

// Write Javascript code!
var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');


ctx.fillStyle = 'green';
ctx.fillRect(95, 10, 150, 150);

ctx.beginPath();
ctx.arc(170, 80, 30, 0, 2* Math.PI);
ctx.stroke();
ctx.fillStyle = 'red';
ctx.fill();



