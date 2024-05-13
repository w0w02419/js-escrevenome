function setup() {
    createCanvas(600, 600);
    background("black");
  }
  
  function draw() {
    stroke("blue");
    Fill("red");

    lf(mouseIsPressed){
        Rect(mouseX, mouseY, 20, 35);
    }
    
  }