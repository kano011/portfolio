const num = 30;
var tx1 = new Array(num);
var ty1 = new Array(num);
for (let i = 0; i < num; i++) {
  tx1[i] = new Array(num).fill(0);
  ty1[i] = new Array(num).fill(0);
}
function setup() {
  let wid = innerWidth;
  if(wid > 1000){
    wid = 1000;
  }
  let canvas = createCanvas(wid, innerHeight);
  canvas.parent('canvas');
  //colorMode(HSB,360,100,100,1);
  background(60);
  //noStroke();
  stroke(80);
  strokeWeight(0.01);
  //console.log(tx1.size)
  for (let i = 0; i < num; i++) {
    for (let p = 0; p < num; p++) {
      if (i == 0 && p == 0) {
        tx1[i][p] = 0;
        ty1[i][p] = 0;
      } else if (i == 0) {
        tx1[i][p] = 0;
        ty1[i][p] = p * 40 + random(-20, 20);
      } else if (p == 0) {
        tx1[i][p] = i * 40 + random(-20, 20);
        ty1[i][p] = 0;
      } else {
        tx1[i][p] = i * 40 + random(-20, 20);
        ty1[i][p] = p * 40 + random(-20, 20);
      }
    }
  }
}

function draw() {
  background(100);
  for (let i = 0; i < num - 2; i++) {
    for (let p = 0; p < num - 1; p++) {
      fill(num / 3 * i, i * p / num, num / 3 * p);
      if (i % 2 == 0) {
        triangle(tx1[i][p], ty1[i][p], tx1[i][p + 1], ty1[i][p + 1], tx1[i + 1][p], ty1[i + 1][p]);
        triangle(tx1[i + 1][p], ty1[i + 1][p], tx1[i + 1][p + 1], ty1[i + 1][p + 1], tx1[i + 2][p], ty1[i + 2][p]);
      } else {
        triangle(tx1[i][p], ty1[i][p], tx1[i - 1][p + 1], ty1[i - 1][p + 1], tx1[i][p + 1], ty1[i][p + 1]);
        triangle(tx1[i + 1][p], ty1[i + 1][p], tx1[i][p + 1], ty1[i][p + 1], tx1[i + 1][p + 1], ty1[i + 1][p + 1]);
      }
    }
  }
  exit();
}