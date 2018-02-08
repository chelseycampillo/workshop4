var martian;
var car;
var chime;

function preload() { //loads the file in advance
  martian = loadSound('martian.mp3');
  car = loadSound('car.mp3');
  chime = loadSound('chime.mp3');
}

function setup() { 
  martian.setVolume(0.1);
  car.setVolume(0.1);
  chime.setVolume(0.1);
  colorMode(HSB);
  createCanvas(100, 100);
}

function draw() {
  if (martian.isPlaying()) {
    background(120);
  } 
  if (car.isPlaying()){
    background(0,50,50);
  }
  if(chime.isPlaying()) {
     background(210);
	}
}

function keyPressed() {
  print(key);
  if (key == 'M') {
  	martian.play();
}
  if (key == 'R') {
    car.play();
  }
  if (key == 'C') {
    chime.play();
  }
}
