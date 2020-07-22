let p = innerWidth;
let h, m, s, x, a = 0;

function setup() {
  let canvas = createCanvas(innerWidth, innerHeight);
  canvas.parent('canvas');
  colorMode(HSB, 360, 256, 256, 100);
}


function draw() {
  frameRate(10);
  h = hour();
  m = minute();
  s = second();
  a = 0;
  if (h==0) {
    a=0;
	}else if ((h==1)||(h==23)) {
    a=1;
  }else if ((h==2)||(h==22)) {
    a=2;
  }else if ((h==3)||(h==21)) {
    a=3;
  }else if ((h==4)||(h==20)) {
    a=4;
  }else if ((h==5)||(h==19)) {
    a=5;
  }else if ((h==6)||(h==18)) {
    a=6;
  }else if ((h==7)||(h==17)) {
    a=9.5;
  }else if ((h==8)||(h==16)) {
    a=10;
  }else if ((h==9)||(h==15)) {
    a=10.5;
  }else if ((h==10)||(h==14)) {
    a=11;
  }else if ((h==11)||(h==13)) {
    a=11.5;
  }else if (h==12) {
    a=12;
  }
  background(120+20*a);
  for (let i = 0; i<p*2/3; i++) {
    push();
    x = random(1, 3);
    translate(random(width), random(height)/x);
    scale(random(0.5, 5));
    noStroke();
    fill(random(5*m, 60+5*m), 255, random(100, 255), 70-a*1.5);
    triangle(2, s*2, 0, 10+s*2, 4, 10+s*2);
    pop();
  }
}