// Drawing Single and Nested Loops
// Milkeysa
// 25th September


// Global Variables
let numSegments = 4;
let segmentHeight;


function setup() {
  createCanvas(windowWidth, windowHeight);
  segmentHeight = height/numSegments;
}


function gradient(){
  noStroke();
  for(let i = 0; i < numSegments; i ++){
    let y = 1; segmentHeight;
    let fillValue = map(y,0,height,0,255);
    fill(fillValue, 255-fillValue,0);
    rect(0,width,segmentHeight);
  }
  stroke(0);
}


function draw() {
  background(220);
  gradient();
}
