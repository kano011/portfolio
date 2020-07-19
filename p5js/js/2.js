let q = 60;
let t = 0;

function setup() {
  let canvas = createCanvas(innerWidth, innerHeight);
  canvas.parent('canvas');
  background(255);
  colorMode(HSB, q, 100, 100);
  //noStroke();
  strokeWeight(1.5);
  fill(0);
  smooth();
}

function draw() {
  background(100);
  carb();
}

function carb() {
  let x1 = [];
  let y1 = [];
  let inc = PI/180*t;//delta
  let ax = 0.0, by = 0.0;
  let a = PI/30;//si-ta
  //float b = PI/30*1.0;
  push();
  translate(innerWidth/2, innerHeight/2);
  for (let i = 0; i <= q; i++) {
    ax = a * i * 2;
    by = a * i * 3 + inc;
    x1 = append(x1, cos(ax));
    y1 = append(y1, sin(by));
    ellipse(x1[i]*100, y1[i]*100, 2, 2);
    stroke(i, 100, 100);
    if(mouseIsPressed){
      stroke(0, 100, 0);
    }
    if (i>0)line(x1[i]*100, y1[i]*100, x1[i-1]*100, y1[i-1]*100);
  }
  pop();
  t++;
}