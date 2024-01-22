void setup(){
	size(400,400);
}

var H = random();

var R = 72; 


var draw() {
    background(32, 92, 130);
    
    fill(41, 204, 174);
textSize(30);
text("Absorption", 133,57);
    
fill(204, 150, 43);
textSize(16);
text("Beta kilde", 0,187);
strokeWeight(1);
fill(250, 123, 13);
rect(0,201,71,16);


fill(0, 0, 0);
quad(379, 172, 380, 303, 330, 261, 332, 137);

strokeWeight(7);
    stroke(245, 234, 24);


point(361,250);    
point(370,203);  
point(369,274);  
point(367,177);  
point(362,230);  
strokeWeight(6);
point(342,178);  
point(339,250);  
point(348,214);  
point(357,192); 

noStroke();



var x;
x = 0;
rect(140,150,x,130);

fill(75, 115, 133);
if (mouseX>100)  {rect(140,150,x+7,130);fill(0, 0, 0);ellipse(357,192,7,7); }

fill(75, 115, 133);
if (mouseX>150) {rect(150,150,x+7,130);fill(0,0,0);ellipse(348,214,7,7);} 

fill(75, 115, 133);
if (mouseX>160)  {rect(160,150,x+7,130);fill(0,0,0);ellipse(339,250,7,7);}

fill(75, 115, 133);
if (mouseX>170)  {rect(170,150,x+7,130);fill(0, 0, 0);ellipse(342,178,7,7); }

fill(75, 115, 133);
if (mouseX>180) {rect(180,150,x+7,130);fill(0,0,0);ellipse(362,230,8,8);} 

fill(75, 115, 133);
if (mouseX>190)  {rect(190,150,x+7,130);fill(0,0,0);ellipse(339,250,8,8);}

fill(75, 115, 133);
if (mouseX>200)  {rect(200,150,x+7,130);fill(0,0,0);ellipse(369,274,8,8);}

fill(75, 115, 133);
if (mouseX>210)  {rect(210,150,x+7,130);fill(0, 0, 0);ellipse(370,203,8,8); }

fill(75, 115, 133);
if (mouseX>220) {rect(220,150,x+7,130);fill(0,0,0);ellipse(361,250,8,8);} 

fill(75, 115, 133);
if (mouseX>230)  {rect(230,150,x+7,130);fill(0,0,0);ellipse(367,177,8,8);}

fill(247, 255, 0);

ellipse(R,210,7,7);

R = R + 3;
if ( R>350) {R = 72;}
R = R + 1;
if ((mouseX>230) && (R>140)) {R=72; R =3;}

fill(250, 123, 13);
rect(0,201,71,16);



if((random()< 0.1) && (mouseX>140)  && (R>140) && (R<150)) { R = 72;}
if((random()< 0.1) && (mouseX>150)  && (R>150) && (R<160)) { R = 72;}
if((random()< 0.1) && (mouseX>160)  && (R>160) && (R<170)) { R = 72;}
if((random()< 0.1) && (mouseX>170)  && (R>170) && (R<180)) { R = 72;}
if((random()< 0.1) && (mouseX>180)  && (R>180) && (R<190)) { R = 72;}
if((random()< 0.1) && (mouseX>190)  && (R>190) && (R<200)) { R = 72;}
if((random()< 0.1) && (mouseX>200)  && (R>200) && (R<210)) { R = 72;}
if((random()< 0.1) && (mouseX>210)  && (R>210) && (R<220)) { R = 72;}


};

