const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

let x = canvas.width / 2;
let y = canvas.height - 30;

let dx = 2;
let dy = -2;

const ballRadius = 10;

function drawBall() {
  ctx.beginPath();
  ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
  ctx.fillstyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBall();
  x += dx;
  y += dy;
  // bottom edge || top edge
  if (y + dy > canvas.height - ballRadius || y + dy < ballRadius) {
    dy = -dy;
    ctx.fillStyle = "hsl(" + 360 * Math.random() + ", 50%, 50%)";
  }
  // right edge || left edge
  if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
    dx = -dx;
    ctx.fillStyle = "hsl(" + 360 * Math.random() + ", 50%, 50%)";
  }
}
setInterval(draw, 10);
