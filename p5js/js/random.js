number = Math.floor(Math.random()*Math.floor(4));
document.write("<script src='/portfolio/p5js/js/"+number+".js' ></script>");
if (number==0){
  document.write("<p style='text-align: center;'>Press Left-side or Right side</p>");
}else if(number==2){
  document.write("<p style='text-align: center;'>Press change color</p>");
}