function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220,0,0);
}

function draw() {
  fill(0,128,128);
  circle(mouseX,mouseY,frameCount/10)
}
