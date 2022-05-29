const canvas = document.querySelector("#draw");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.strokeStyle = "#BADA55"; // color
ctx.lineJoin = "round"; // end of line is round
ctx.lineCap = "round"; // when a line meets another line
ctx.lineWidth = 100;
let isDrawing = false;

let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;
ctx.globalCompositeOperation = "multiply";

function draw(e) {
  if (!isDrawing) return; //stop fn from running when they are not moused down
  console.log(e);
  ctx.strokeStyle = `hsl(${hue},100%,50%)`;

  ctx.beginPath(); // start from
  ctx.moveTo(lastX, lastY);
  //go to
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  // lastX = e.offsetX;
  //lastY = e.offsetY;
  [lastX, lastY] = [e.offsetX, e.offsetY];
  hue++;
  if (hue >= 360) {
    hue = 0;
  }

  if (ctx.lineWidth >= 500 || ctx.lineWidth <= 1) {
    direction = !direction;
  }
  if (direction) {
    ctx.lineWidth++;
  } else {
    ctx.lineWidth--;
  }
}
canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mousedown", (e) => {
  isDrawing = true;
  //lastX = e.offsetX;
  //lastY = e.offsetY;
  [lastX, lastY] = [e.offsetX, e.offsetY];
});
canvas.addEventListener("mouseup", () => (isDrawing = false));
canvas.addEventListener("mouseout", () => (isDrawing = false));
