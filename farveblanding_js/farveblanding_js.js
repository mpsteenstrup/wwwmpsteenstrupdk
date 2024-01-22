function setup() {
  createCanvas(800, 600);
//createCanvas(600,600,P2D);
background(255);
textSize(40);
textFont("Helvetica");
}
var d = 0;

function draw() {
  blendMode(LIGHTEST);
  background(255);
  blendMode(DARKEST);
    fill(0);
    text('substractiv',600,400);
  rect(0,0,width,height/2);
  blendMode(ADD);
  fill(255);
  text('additiv',600,190);
  fill(0,255,0);
if(d>=1){ellipse(250,100,190,190);}
  fill(255,0,0,255);
if(d>=2){ellipse(350,100,190,190);}
  fill(0,0,255);
if(d>=3){ellipse(300,190,190,190);}

// substractiv farveblanding
  fill(0);
  text('substractiv',600,400);
   fill(255);
 if(d>=4){//rect(0,height/2,width,height);
   blendMode(DIFFERENCE);
  fill(0,255,0);
ellipse(250,400,190,190);
  fill(255,0,0,255);
if(d>=5){ellipse(350,400,190,190);}
  fill(0,0,255);
if(d>=6){ellipse(300,500,190,190);}
}
  if(d==7){
  d = 0;
  blendMode(REPLACE);
    background(255);
   fill(0);
  rect(0,0,width,height/2);
  }
}

function mouseClicked() {
  d += 1;

}