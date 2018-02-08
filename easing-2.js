function setup() { 
  createCanvas(400, 400);
  colorMode(HSB);
  fill(255);
} 
//rate for first circle
var rate = 0.1;
var x = 0;
var y = 0;

//rate for second circle
var rate2 = 0.2;
var x2 = 100;
var y2 = 100;

function draw() {
	background(0,255,255);
	ellipse(x,y,15,15);
	x = mouseX*rate + x*(1-rate);
	y = mouseY*rate + y*(1-rate);
	print(mouseX);//lists x values
	
	ellipse(x2,y2,15,15);
	x2 = mouseX*rate2 + x2*(1-rate2);
	y2 = mouseY*rate2 + y2*(1-rate2);
}
