function setup() {
    createCanvas(600, 600);
    background("yellow");
  }


 function draw() {
  stroke("grey");
  fill("rgb(5,44,255)");

  if(mouseIsPressed){
    rect(mouseX, mouseY, 20, 35);
 }

}
