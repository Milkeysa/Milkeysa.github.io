// State Variables And Fading
// Milkeysa Mohamed Jamal
// Date
//
// Extra for Experts:
// a look at state variables.

let mouseSide;

function setup() {
  createCanvas(windowWidth, windowHeight);
  updateMouseState();
}

let fillValue = 0;
if (mouseSide==="left") fill(0){
}
  else{
  fillValue += 3;
  }

function updateMouseState(){
  if (mouseX > mouseY){
    mouseSide = "right";
  }
  else{
    mouseSide = "left";
    print(mouseSide);
  fill(fillValue);
  rect(width / 2,0, width/2, height)
}
  
function renderSquare(){
  //draw 2 rectangles on screen
  rect(0,0,width/2,height);
  rect(width,2,0,width/2,height);
}

function draw() {
  background(220);
  updateMouseState();
  renderSquare();
}

