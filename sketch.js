var s,m,h;
var sAngle,mAngle,hAngle;

function setup() {
  createCanvas(800,800);
  angleMode(DEGREES);
}

function draw() {
  background("skyBlue");  
  
  s=second();
  m=minute();
  h=hour();

  sAngle=map(s,0,60,0,360);
  mAngle=map(m,0,60,0,360);
  hAngle=map(h,0,12,0,360);
  
  translate(400,400);
  rotate(-90)
  
  ellipseMode(RADIUS);
  ellipse(0,0,250,250);
  
  for(var i=1; i<=12; i++){
    position=i*30;

    push();
    stroke("black");
    textSize(20);
    strokeWeight(4);  
    rotate(position);
    ellipse(0,200,2,10);
    pop();
  } 

  push();
  rotate(sAngle);
  stroke("white");
  strokeWeight(5);
  line(0,0,200,0);
  pop();

  push();
  rotate(mAngle);
  stroke("white");
  strokeWeight(7);
  line(0,0,170,0);
  pop();

  push();
  rotate(hAngle);
  stroke("white");
  strokeWeight(10);
  line(0,0,100,0);
  pop();
}
