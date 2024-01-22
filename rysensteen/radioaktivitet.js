
void setup(){
	size(400,400);
}

var Alpha = 200;
var x = 200;
var draw() {
    background(97, 179, 172);

fill(255, 0, 0);
textSize(30);
text("Henfald",145,41);

fill(0, 0, 0);
textSize(15);
text("Alfa-henfald (α) ",149,69);
text("Betaminus-henfald (β-)",136,175);
text("Gamma-henfald (γ)",150,270);

textSize(20);

//Urankerne Alphastråling
ellipse(200,300-200,10, 10);
ellipse(204,300-200,10, 10);
fill(21, 110, 219);
ellipse(200,307-200,10, 10);
ellipse(207,306-200,10, 10);
fill(255, 0, 0);
ellipse(191,305-200,10, 10);
ellipse(191,300-200,10, 10);
ellipse(211,300-200,10, 10);
fill(21, 110, 219);
ellipse(200,293-200,10, 10);
ellipse(209,291-200,10, 10);
fill(255, 0, 0);
ellipse(192,290-200,10, 10);
ellipse(194,294-200,10, 10);
fill(21, 110, 219);
ellipse(216,293-200,10, 10);
ellipse(202,287-200,10, 10);
fill(255, 0, 0);
ellipse(215,300-200,10, 10);

//Urankerne Betastråling
ellipse(200,300-100,10, 10);
ellipse(204,300-100,10, 10);
fill(21, 110, 219);
ellipse(200,307-100,10, 10);
ellipse(207,306-100,10, 10);
fill(255, 0, 0);
ellipse(191,305-100,10, 10);
ellipse(191,300-100,10, 10);
fill(21, 110, 219);
ellipse(211,300-100,10, 10);
fill(255, 0, 0);
ellipse(200,293-100,10, 10);
ellipse(209,291-100,10, 10);
fill(21, 110, 219);
ellipse(192,290-100,10, 10);
ellipse(194,294-100,10, 10);
fill(255, 0, 0);
ellipse(216,293-100,10, 10);
ellipse(202,287-100,10, 10);
ellipse(215,300-100,10, 10);


//Urankerne Gammastråling
ellipse(200,301,10, 10);
ellipse(204,300,10, 10);
fill(21, 110, 219);
ellipse(200,307,10, 10);
ellipse(207,306,10, 10);
fill(255, 0, 0);
ellipse(191,305,10, 10);
ellipse(191,300,10, 10);
fill(21, 110, 219);
ellipse(211,300,10, 10);
ellipse(200,293,10, 10);
fill(255, 0, 0);
ellipse(209,291,10, 10);
ellipse(192,290,10, 10);
fill(21, 110, 219);
ellipse(194,294,10, 10);
ellipse(216,293,10, 10);
fill(255, 0, 0);
ellipse(202,287,10, 10);
ellipse(215,300,10, 10);

//Repetetion
Alpha = Alpha +1;
if(mouseX, mouseY<150) { 
    ellipse(Alpha,294-200,10, 10);
    ellipse(Alpha+10,293-200,10, 10);
    fill(21, 110, 219);
    ellipse(Alpha+2,287-200,10, 10);
    ellipse(Alpha+8,300-200,10, 10);
    
    if (Alpha > 350) {Alpha = 200;} }


   


x=x-2;
if((mouseY>150) && (mouseY<250))
   
   { 

      
       
       fill(32, 199, 51);
ellipse(x,304-104,7, 7);
fill(40, 35, 194);
ellipse(Alpha+5,294-95,7, 7);
if (Alpha > 350) {Alpha = 200;}

if (Alpha > 349) {x = 200;}
}

if((mouseY>250) && (mouseY<400)){
    
fill(255, 234, 0);

ellipse(Alpha+2,297,4, 4);
if (Alpha > 350) {Alpha = 200;}


}


textSize(12);
fill(179, 9, 9);
text("He kerne Proton & Neutron",242,126);

textSize(12);
fill(179, 9, 9);
text("Elektron",304,228);

textSize(12);
fill(179, 9, 9);
text("Antineutrino",23,228);

textSize(12);
fill(179, 9, 9);
text("Foton",314,319);

};

