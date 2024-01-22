let rSlider, gSlider, bSlider;

function setup() {
  // create canvas
  var canvas = createCanvas(710, 400);
  canvas.parent('sketch-holder');
  textSize(15);
  noStroke();
  background(0);
  blendMode(ADD);
  // create sliders
  rSlider = createSlider(0, 255, 0).parent('slider-holder');
  gSlider = createSlider(0, 255, 0).parent('slider-holder');
  bSlider = createSlider(0, 255, 0 ).parent('slider-holder');
  nyFarve = createButton('nyFarve');
  visAfvigelse = createButton('visAfvigelse');
  nyFarve.mousePressed(ny);
  nyFarve.parent('nyFarve-holder');
  visAfvigelse.mousePressed(vis);
  visAfvigelse.parent('visAfvigelse');
  startr = random(0,255);
  startg = random(0,255);
  startb = random(0,255);
}

function vis(){
  text('afvigelse: ' + round(afvigelse), 400, 350);

}

function ny() {
  startr = random(0,255);
  startg = random(0,255);
  startb = random(0,255);
}

function draw() {
  blendMode(REPLACE);
  background(0,0,0);
  fill(startr,startg,startb);
  ellipse(500,200,200,200);
  const r = rSlider.value();
  const g = gSlider.value();
  const b = bSlider.value();

  blendMode(ADD);
  fill(r,0,0);
  ellipse(150,150,200,200);
  fill(0,g,0);
  ellipse(250,150,200,200);
  fill(0,0,b);
  ellipse(200,250,200,200);
  afvigelse = sqrt((r-startr)**2+(g-startg)**2+(b-startb)**2);
  fill(255);

}
