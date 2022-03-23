function setup() {
  createCanvas(400, 400);
  background(220,0,0);
}

function draw() {
  fill(0,128,128);
  circle(mouseX,mouseY,frameCount/10)
}
