const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

let x = canvas.width / 2;
let y = canvas.height - 30;

let dx = 2;
let dy = -2;

const ballRadius = 10;

const paddleHeight = 10;
const paddleWidth = 75;
let paddleX = (canvas.width - paddleWidth) / 2;

let rightPressed = false;
let leftPressed = false;

function drawPaddle() {
  ctx.beginPath();
  ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
  ctx.fillstyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
}

function randomColorStyle() {
  // H(Hue)S(Saturation)L(Lightness)
  // This will create a random color with same saturation and light intensity (luminance).
  // https://stackoverflow.com/questions/23861481/randomize-rgb-in-html5-canvas-with-a-new-value-for-each-fillrect-using-javascrip
  ctx.fillStyle = "hsl(" + 360 * Math.random() + ", 50%, 50%)";
}

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
  drawPaddle();
  x += dx;
  y += dy;

  // bottom edge || top edge
  if (y + dy > canvas.height - ballRadius || y + dy < ballRadius) {
    dy = -dy;
    randomColorStyle();
  }
  // right edge || left edge
  if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
    dx = -dx;
    randomColorStyle();
  }

  if (rightPressed && paddleX < canvas.width - paddleWidth) {
    paddleX += 7; // pixel
  } else if (leftPressed && paddleX < canvas.width + paddleWidth) {
    paddleX -= 7;
  }
}

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(event) {
  if (event.keyCode == 39) {
    rightPressed = true;
  } else if (event.keyCode == 37) {
    leftPressed = true;
  }
}

function keyUpHandler(event) {
  if (event.keyCode == 39) {
    rightPressed = false;
  } else if (event.keyCode == 37) {
    leftPressed = false;
  }
}

setInterval(draw, 10);
