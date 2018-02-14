// 1. Visual output per-key.
// 2. 

/*
  Visual/mouse-based input
  Tracking of state (challenge?) -- keypress state? Last key pressed?
  Visual output of how long key is pressed for?
  Visual metronome -- flash every 1/4 second, e.g.
  
  Volume control! (global volume?)
  Waveform change based on keypress?
  Frequency based on mouse. (Octave shift as a challenge? 0.5 vs. 2 vs. 4 -- superchallenge using pow?)
  
  Match color with frequency
  Draw a visual score, interpret score based on keys
  
  
  
  Ideas for directions you might want to consider:
	  "recording" and layering of loops.
    Different synthesis? Waveforms/etc?
    sustain "pedal"
    vibrato, or ASDR
    fugue machine
*/


var freqC = 261;
var freqG = 392;
var freqA = 440;
var freqF = 349;
var freqE = 329;
var freqD = 294;


var oscC, oscG, oscA, oscF, oscE, oscD;

var playingC, playingG, playingA, playingF, playingE, playingD;

function setup() {
  createCanvas (400,400);
  background(19,30,85);
  
  oscC = new p5.Oscillator();
  oscC.setType('triangle');
  oscC.freq(freqC);
  oscC.amp(0);
  oscC.start();
  
  oscG = new p5.Oscillator();
  oscG.setType('triangle');
  oscG.freq(freqG);
  oscG.amp(0);
  oscG.start();
  
  oscA = new p5.Oscillator();
  oscA.setType('triangle');
  oscA.freq(freqA);
  oscA.amp(0);
  oscA.start();
  
  oscF = new p5.Oscillator();
  oscF.setType('triangle');
  oscF.freq(freqF);
  oscF.amp(0);
  oscF.start();
  
  oscE = new p5.Oscillator();
  oscE.setType('triangle');
  oscE.freq(freqE);
  oscE.amp(0);
  oscE.start();
  
  oscD = new p5.Oscillator();
  oscD.setType('triangle');
  oscD.freq(freqD);
  oscD.amp(0);
  oscD.start();
}



function draw() {
  noStroke();
  fill(220);
	if (playingC) {
    fill(34,233,100);
    ellipse(50,50, 25,25); 
    fill('white');
    text('C', 47, 53);
  }
  if (playingG) {
    fill(52, 123, 229);
    ellipse(80, 100, 80, 80);
    fill('white');
    text('G', 80, 100);
    
  }
  if (playingA) {
    fill('red');
    ellipse(250, 150, 80, 80);
    fill('white');
    text('A', 250, 150);
  }
  if (playingF) {
    fill('green');
    ellipse(180, 100, 80, 80);
    fill('white');
    text('F', 180, 100);
  }
  if (playingE) {
    fill(52, 123, 229);
    ellipse(180, 200, 80, 80);
    fill('white');
    text('E', 180, 200);
  }
  if (playingD) {
    fill(52, 123, 229);
    ellipse(250, 250, 80, 80);
    fill('white');
    text('D', 250, 250);
  }
  if (floor(millis()/250) % 2 == 0) {
    fill(0);
  } else {
    fill(255);
  }
  rect(width-10, height-10, 10, 10);
}

function keyPressed() {
  print("got key press for ", key);
  var osc;
  if (key == 'C') {
    osc = oscC;
    playingC = true;
  } else if (key == 'G') {
    osc = oscG;
    playingG = true;
  } else if (key == 'A') {
    osc = oscA;
    playingA = true;
  } else if (key == 'F') {
    osc = oscF;
    playingF = true;
  } else if (key == 'E') {
    osc = oscE;
    playingE = true;
  } else if (key == 'D') {
    osc = oscD;
    playingD = true;
  }
  if (osc) {
    osc.amp(0.5, 0.1);
  }
}

function keyReleased() {
  print("got key release for ", key);
  var osc;
  if (key == 'C') {
    osc = oscC;
    playingC = false;
  } else if (key == 'G') {
    osc = oscG;
    playingG = false;
  } else if (key == 'A') {
    osc = oscA;
    playingA = false;
  } else if (key == 'F') {
    osc = oscF;
    playingF = false;
  } else if (key == 'E') {
    osc = oscE;
    playingE = false;
  } else if (key == 'D') {
    osc = oscD;
    playingD = false;
  }
  if (osc) {
    osc.amp(0, 0.5);
  }
}

function mouseMoved() {
  oscA.freq(pow(2, floor(map(mouseX, 0, width, 0, 4))) * freqA);
}
