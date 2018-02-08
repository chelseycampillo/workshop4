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
  createCanvas(100, 100);
}

function draw() {
  if (martian.isPlaying()) {
    background('green');
  } 
  if (car.isPlaying()){
    background('red');
  }
  if(chime.isPlaying()) {
     background('blue');
	}
}

function keyPressed() {
  print(key);
  if (key == 'M') {
  	martian.play();
}
  else if (key == 'R') {
    car.play();
  }
  else if (key == 'C') {
    chime.play();
  }
}
