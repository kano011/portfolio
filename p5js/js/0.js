let NUM = parseInt((innerWidth * innerHeight) / 2000);
let cou = 0;
let sellect = 0;
let back_c = 0,elli_c = 100;
let x = [];
let y = [];
const el_size = [];

function setup(){
  colorMode(HSB,360,100,100,1);
  let canvas = createCanvas(innerWidth, innerHeight);
  NUM += 4-NUM%4;
  noStroke();
  kusa_init();
  canvas.parent('canvas');
}
//flow
function draw(){
  if(sellect>0){
    if(cou<120){
      cou++;
      kusa_cul1();
    }else if(cou<240){
      cou++;
      kusa_cul2();
    }else{
      cou = 0;
    }
    background(back_c);
  }
  kusa();
}
//color change
function mousePressed(){
  if(mouseIsPressed && mouseX < windowWidth / 2){
    sellect = 1;
    kusa_init();
  }else{
    sellect = 2;
    kusa_init();
  }
}
//initialize
function kusa_init(){
  for(let i = 0; i<NUM; i++){
    x[i] = int(random(width));
    y[i] = int(random(height));
    if(i<NUM/4){
      el_size[i] = int(random(40,50));
    }else{
      el_size[i] = int(random(20,25));
    }
  }
  kusa_c();
}
//円を描く
function kusa(){//culcuration
  for(let i = 0; i<NUM; i++){
    fill(elli_c);
    ellipse(x[i],y[i],el_size[i],el_size[i]);
  }
}
//丸の第一段階
function kusa_cul1(){
  //重なりのチェック
  for(let i = 0; i<NUM*3/4; i++){
    for(let p = 0; p<NUM*3/4; p++){
      if((i!=p)&&dist(x[i],y[i],x[p],y[p])*0.975<(el_size[i]+el_size[p])/2){
        x[p] = int(random(windowWidth));
        y[p] = int(random(windowHeight));
      }
    }
  }
}
//丸の位置の第二段階
function kusa_cul2(){
  //重なりのチェック
  for(let i = 0; i < NUM; i++){
    for(let p = int(NUM*3/4); p < NUM; p++){
      if((i!=p)&&dist(x[i],y[i],x[p],y[p])<(el_size[i]+el_size[p])/2){
        x[p] = int(random(windowWidth));
        y[p] = int(random(windowHeight));
      }
    }
  }
}
//背景と丸の色決め
function kusa_c(){
  if(sellect == 1){
    elli_c = color(0,100,100);
    back_c = color(100);
  }else if(sellect == 2){
    elli_c = color(0);
    back_c = color(60,100,100);
  }
}