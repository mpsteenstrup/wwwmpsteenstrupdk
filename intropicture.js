let img;

function preload(){
  img = loadImage('mpsFull.jpg');
}

function setup(){
  w = img.width;
  h = img.height;
  createCanvas(windowWidth, windowHeight);
  noStroke();
  img.loadPixels();

}

function draw(){
  ownFilter();
  fill(0);
}

function ownFilter(){
  let pixelSize = int(map(mouseX , 0, width, 2, 26));
  for (let i=0;i<w; i = i+pixelSize){
    for (let j=0;j<h; j = j+pixelSize){
      fill([getPixelValue(0,i,j),  getPixelValue(1,i,j),  getPixelValue(2,i,j)]);
      ellipse(3*i,3*j,3*pixelSize,3*pixelSize);
    }
  }
}

function getPixelValue(n,i,j){
  p = img.pixels[(i+w*j)*4+n];
  return p;
}
