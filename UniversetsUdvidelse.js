var a = 0;
var b = 0;
var c = 1;
var img;
var img0;
var x0 = 0;
var y0 = 0;
var x1 = 1;
var y1 = 1;
var s = 1.1;

function preload() {
	img = loadImage('starsNG.jpg');
  img0 = loadImage('stars.jpg');
}


function setup() {
  var canvas = createCanvas(1920*2/3,1080*2/3);
  canvas.parent('sim');
//  background(100,100,0);
//  scale(2/3);
  translate(width/2,height/2);
  imageMode(CENTER);
  image(img,0,0);
  x = createSlider(-30,30,0);
  y = createSlider(-30,30,0);
  button = createButton('Udvid');
  button.mousePressed(udvid);
  tog = createButton('vis negativ');
  tog.mousePressed(negativ);
  background(255);
  image(img0,0,0);

}
function negativ(){
  c = -c;
}

function draw() {
  if(c===-1){
    background(255);
    image(img,0,0);
  }
  else{
    background(255);
    image(img0,0,0);
  }
  noFill();
  stroke('red');
  strokeWeight(2);
  ellipse(77,-146,20,20);
  ellipse(-248,202,20,20);
  filter(GRAY);
    blendMode(DARKEST);
  for (var i=0;i<a;i++){
 translate(x.value(),y.value());
 scale(s);
 image(img,0,0);

 filter(GRAY);}

}
function mouseClicked(){
  var afstand = ((x1-x0)**2+(y1-y0)**2)**0.5;
  afstand = afstand.toFixed(2);
//  document.getElementById("afstand").innerHTML = 'Afstanden er: ' + afstand;
}

function udvid() {
  a++;
  if(a===5){a=0;}
}
