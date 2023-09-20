//mouse distance
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

//global function
let colorArray = []; //red,blue etcc
let colorIndex = 0;

function createColors(){
  colorArray.push("red");
  colorArray.push( 200,100,255);
  colorArray.push("midnightblue");
}

function drawNodes(){
  fill(colorArray[colorIndex]);
  stroke(colorArray[colorIndex]);
  circle(width/2,height/2,20);
  circle(mouseX,mouseY,20);
  line(width/2,height/2,mouseX,mouseY);
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  createColors();
}

function draw() {
  background(220);
  drawNodes();
}
