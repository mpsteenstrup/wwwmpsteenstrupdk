void setup(){
	size(400,400);
}


background(7, 41, 71);
noStroke();

var x10=0;
var xx10= 0;
var xxx10= 0;
var speeeed=1;
var y4=0; //rød
var x4=0; //hvid
var yy4=400; // rød 
var yyy4=400; // hvid
var xx4=400; // hvid
var yyyy4=0; // rød
var speeed=2; // hastighed
var x1 = 0;
var speed1= 2;
var xPos = 200;
var yPos = 200;
var speed =1;
var t = 0;
var xPos = 200;
var yPos = 200;
var speed =1;
var h =0;
var w =0;
var h1=0;
var w1=0;
var h2 =0;
var w2 =0;
var h3=0;
var w3=0;
var x = 153;
var xx = 326;
var tx = 135;
var txx= 300;
var x3 = 300;
var xx3 = 100;
var antistof = 285;
var stof = 75;
var down=50;
var cirkel1=150;
var cirkel2=250;
var circle1=150;
var circle2=250;
var x2 = 153;
var xx2 = 326;
var tx2 = 135;
var txx2= 300;
var speed2=0.8;
// position of the ball
var x100 = 25;
// how far the ball moves every time
var speed100 = 0.5;

var xxx3= 0;
var speed=1;
var x8 = 0;
var speed8= 2;
var yy8=0;
var jordw=5;
var jordh=5;






var draw() {
    background(0, 0, 0);
    noStroke();

//universet i et punkt der vibrere 
    ellipse(xPos,yPos,20,20);


    xPos = xPos + speed;

    if (xPos >202) {
    speed = -1;
    }   
    if (xPos < 198) {
    speed = +1;
    }
    t+=1;
    
    if (t>60){
        background(0, 0, 0);
    noStroke();
    
//Eksplosion

    //universet i et punkt
        fill(255, 255, 255);
        ellipse(xPos,yPos,w+80,h+80);
    //Eks. 1
        fill(237, 26, 149);
        ellipse(200,200,w +75,h+75);
    //Eks. 2
        fill(232, 218, 60);
        ellipse(200,200,w+60,h+60);
    //Eks. 3
        fill(255, 56, 56);
        ellipse(200,200,w+30,h+30);
    //Eks. 4. - rumfarve 
        fill(7, 41, 71);
        ellipse(200,200,w1,h1);
    h = h+1;
    w = w+1;
    h1 = h1+1;
    w1 = w1+1;
    }
    
    if(w>300){
        h = 300;
        w = 300;
        
    if (t>300&&t<500){
        fill(255, 255, 255);
        textSize(35);
        text("The Big Bang",87,200);
    }
    
//quarker 

    if(t>500&&t<800){
    noStroke();
    fill(255, 255, 255);
    textSize(25);
    text("Kvarker",100,100);
    
   
        fill(255, 255, 255);
        ellipse(x2,200,100,100); // up kvark
        
  
        textSize(20);
        fill(255, 0, 0);
        text("Up",tx2+10,195,40,46);
        fill(255, 0, 0);
        ellipse(x2+160,156,100,100); // down kvark
        
        fill(255, 255, 255);
        textSize(18);
        fill(255, 255, 255);
        text("Down",txx2-5,150,40,46);
        if(x2>153){
            speed2=-1;
        }
        if(x2<156){
            speed2=5;
        }   
        
         // move the ball
        x2 = x2 + speed2;
    }
        
    }   
    
//Stof mod antistof 
    if(t>800&&t<1200){
        fill(255, 255, 255);
        textSize(25);
        text("Stof Vinder Over Antistof",33,60);
            fill(255, 10, 79);
    ellipse(x3,150,75,75); //rød cirkel
    fill(34, 82, 204);
    textSize(14);
    text("Antistof",antistof,150,45,40);
    
    textSize(18);
    fill(255, 255, 255);
    text("Der er nu en milliard stof per én antistof",20,300);
   
    
    textSize(14);
    
    fill(12, 245, 86);
    ellipse(xx3,150,75,75); //grøn cirkel
    fill(17, 0, 255);
    text("Stof",stof,150,34,40);
    
    if(x3>200) {
    x3-=1;
    antistof-=1;
    xx3+=1;
    stof+=1;}
    
    if(x3===xx3){
        antistof=180;
        stof=180;
        xx3=200;
        x3=200;}
    }
    
     //elementarpartikler 
    
    if(t>1200&&t<1500){
         fill(255, 255, 255);
    textSize(20);
    
    text("Up- og Down kvarker samler sig til protoner og neutroner",30,10,300,200);

    noStroke();
    text("Proton",270,300,100,100);
    text("Neutron",64,300,100,100);
    
    fill(182, 245, 237);
    ellipse(100,180,150,150); // stor cirkel
    
    fill(255, 0, 0);
    ellipse(x4,175,35,35); // rød
    
    fill(255, 255, 255);
    ellipse(100,y4,35,35); //hvid
    
    fill(255, 0, 0);
    ellipse(120,yy4,35,35); // hvid
    
    fill(182, 245, 237);
    ellipse(300,180,150,150); // stor cirkel
    
    fill(255, 255, 255);
    ellipse(275,yyy4,35,35); // hvid
    
    ellipse(xx4,200,35,35); // hvid
    
    fill(255, 0, 0);
    ellipse(320,yyyy4,35,35); // rød
    
    if(x4<75){
        x4+=speeed;
    }
    if(y4<200){
        y4+=speeed;
    }
    if(yy4>170){
        yy4-=speeed;
    }
    if(yyy4>175){
        yyy4-=speeed;
    }
    if(xx4>300){
        xx4-=speeed;
    }
    if(yyyy4<170){
        yyyy4+=speeed;
    }
        
    }  
    
//naturlove 

    if(t>1500&&t<1750){
        background(7, 41, 71);
        fill(255, 255, 255);
        textSize(40);
        text("De fire naturkræfter",36,200);
    }

    //Tyngdekraft
    if(t>1750&&t<2000){

    fill(13, 122, 30);
    rect(0,300,400,200); //græs
    
    fill(43, 17, 17); 
    rect(150,110,90,200);//stamme
    
    fill(13, 122, 30);
    ellipse(195,10,290,210);//krone
        
        
    noStroke();
    fill(255, 0, 0);
    ellipse(200,down,59,52);//æble
    
    fill(34, 255, 0);
    noStroke();
    ellipse(208,down-25,10,6);//æbleblade
    ellipse(200,down-25,10,6);
    
    fill(255, 255, 255);
    textSize(25);
    text("1 Tyngdekraften",84,50);
    
    down +=3;
    }

    //Stærk tiltrækning 
        if(t>2000&&t<2150){
              stroke(255,255,255);
      fill(25, 49, 110);
    ellipse(200,200,500,500);
     fill(255, 0, 0);
    noStroke();
    ellipse(cirkel1,190,50,50);
    fill(219, 210, 210);
    ellipse(cirkel2,190,50,50); 
    
    
    if (cirkel1+20!==cirkel2-20){
        cirkel1=cirkel1+2.5;
        cirkel2=cirkel2-2.5;
       
    }
        fill(255, 255, 255);
        textSize(22);
        text("2 De stærke tiltrækningskræfter",60,100,400,200);
        
        fill(26, 17, 17);
        textSize(20);
        text("+",cirkel1-6,180,200,200);
        }  
    
    // svag tiltrækning
        if(t>2150&&t<2300){
            stroke(255,255,255);
      fill(25, 49, 110);
    ellipse(200,200,500,500);
     fill(255, 0, 0);
    noStroke();
    ellipse(circle1,190,50,50);
    fill(219, 210, 210);
    ellipse(circle2,190,50,50); 
    
    
      
    if (circle1+20!==circle2-20){
        circle1=circle1+0.5;
        circle2=circle2-0.5;
       
    }
        fill(255, 255, 255);
        textSize(20);
        text("3 De svage tiltrækningskræfter",73,100,400,200);
        
        fill(26, 17, 17);
        textSize(20);
        text("+",circle1-6,180,200,200);
        }
        
    //elektromagnetiske 
    if(t>2300&&t<2500){
    
    fill(0, 174, 255);
    ellipse(x100,200,20,20);//elektron

    fill(255, 0, 0);
    ellipse(198,198,30,30);//proton
    
        noStroke();
    fill(0, 174, 255);
    ellipse(x100,200,20,20);//elektron
    
    if (x100 > 26) {
        speed100 = -0.6;
    }
    if (x100 < 24) {
        speed100 = 0.6;
    }
  
     // move the ball
    x100 = x100 + speed100;
   
   
    fill(255, 255, 255);
    ellipse(200,197,350,350);
    
    fill(13, 6, 6);
    textSize(18);
    text("4 Den elektromagnetiske kraft",82,72,400,50);
        
    fill(0, 174, 255);
    ellipse(25,200,20,20);//elektron
        fill(20, 18, 20);
        textSize(19);
        text("-",19,191,80,80);
    
    noStroke();
    fill(255, 0, 0);
    ellipse(x100+173,198,30,30);//proton
        fill(32, 38, 41);
        textSize(18);
        text("+",192,190,80,80);
    
    
    //pile
    strokeWeight(5.0);
    
    strokeCap(ROUND);
    
    stroke(184, 44, 184);
    line(39, 200, 100, 198);
    
    line(95,205,100,198);
    line(95,190,100,198);
    
    line(178,198,114,198);
    
    line(120,205,110,198);
    line(120,192,110,198);
    
    }
    
   
    
    //Atomer (Hydrogen)
    
    if(t>2500&&t<2700){

     
    fill(255, 255, 255);
    ellipse(206,203,300,300);
    fill(255, 0, 0);
    ellipse(204,205,50,50);
    fill(5, 5, 5);
    textSize(20);
    text("+",198,195,100,100);
    fill(15, 44, 191);
    ellipse(x1,200,15,15);
    fill(255, 255, 255);
    text("Hydrogen",160,20,100,100);
    
    if(x1<57){
        x1+=speed1;
        
    }
        
    } 
    
    //Atomer (Helium)
    
    if(t>2700&&t<2900){
          fill(255, 255, 255);
          text("Helium",50,45);
    ellipse(206,203,300,300);
    fill(255, 0, 0);
    ellipse(204,205,50,50);
    fill(5, 5, 5);
    textSize(20);
    text("+",198,195,100,100);
    
    fill(180, 199, 237);
    ellipse(222,171,50,50);
    ellipse(169,220,50,50);
    fill(255, 0, 0);
    ellipse(180,180,50,50);
    fill(5, 5, 5);
    text("+",173,170,100,100);
    
    fill(15, 44, 191);
    ellipse(x8,200,17,17);
    
    ellipse(200,yy8,17,17);
    
    if(x8<57){
        x8+=speed8;
        
    }
    
    if(yy8<55){
        yy8+=speed8;
    }
        
    }
    
    //Stjerner og galkser 
    if(t>2900&&t){
        fill(255, 255, 255);
        textSize(20);
        text("Galakser med stjerner og planeter bliver til",14,38);
         fill(216, 237, 57);
    ellipse(20,37,5,5);
    ellipse(27,32,3,3);
    ellipse(232,48,3,3);
    ellipse(300,28,5,5);
    ellipse(390,10,5,5);
    ellipse(350,14,5,5);
    ellipse(150,45,3,3);
    ellipse(145,17,3,3);
    ellipse(138,49,5,5);
    ellipse(149,31,5,5);
    ellipse(97,20,3,3);
    ellipse(85,43,5,5);
    ellipse(118,8,5,5);
    ellipse(230,3,5,5);
    ellipse(240,44,3,3);
    ellipse(250,13,5,5);
    ellipse(260,23,5,5);
    ellipse(270,30,5,5);
    ellipse(280,19,5,5);
    ellipse(170,30,5,5);
    ellipse(170,10,5,5);
    ellipse(180,25,5,5);
    ellipse(3,7,5,5);
    ellipse(5,19,5,5);
    ellipse(7,34,5,5);
    ellipse(29,12,3,3);
    ellipse(20,48,3,3);
    ellipse(29,12,5,5);
    ellipse(48,12,5,5);
    ellipse(57,33,5,5);
    ellipse(65,17,5,5);
    ellipse(75,5,5,5);
    ellipse(378,12,5,5);
    ellipse(360,40,5,5);
    ellipse(323,35,5,5);
    ellipse(330,45,5,5);
    ellipse(315,12,5,5);
    ellipse(298,5,5,5);
    ellipse(390,47,5,5);
    ellipse(390,34,5,5);
    
    fill(216, 337, 57);
    ellipse(20,137,5,5);
    ellipse(27,137,3,3);
    ellipse(232,138,3,3);
    ellipse(300,128,5,5);
    ellipse(390,115,5,5);
    ellipse(350,110,5,5);
    ellipse(150,150,3,3);
    ellipse(145,117,3,3);
    ellipse(138,125,5,5);
    ellipse(149,231,5,5);
    ellipse(97,250,3,3);
    ellipse(85,83,5,5);
    ellipse(118,98,5,5);
    ellipse(230,103,5,5);
    ellipse(240,244,3,3);
    ellipse(250,113,5,5);
    ellipse(260,323,5,5);
    ellipse(270,230,5,5);
    ellipse(280,319,5,5);
    ellipse(370,230,5,5);
    ellipse(70,310,5,5);
    ellipse(180,225,5,5);
    ellipse(3,107,5,5);
    ellipse(5,319,5,5);
    ellipse(7,234,5,5);
    ellipse(29,160,3,3);
    ellipse(20,348,3,3);
    ellipse(29,212,5,5);
    ellipse(48,190,5,5);
    ellipse(57,233,5,5);
    ellipse(65,380,5,5);
    ellipse(75,105,5,5);
    ellipse(378,312,5,5);
    ellipse(360,240,5,5);
    ellipse(323,335,5,5);
    ellipse(330,245,5,5);
    ellipse(315,312,5,5);
    ellipse(298,25,5,5);
    ellipse(390,347,5,5);
    ellipse(390,234,5,5);
    
    
    ellipse(3,207,5,5);
    ellipse(5,300,5,5);
    ellipse(7,134,5,5);
    ellipse(29,360,3,3);
    ellipse(20,248,3,3);
    ellipse(29,212,5,5);
    ellipse(148,350,5,5);
    ellipse(157,233,5,5);
    ellipse(65,380,5,5);
    ellipse(75,105,5,5);
    ellipse(378,312,5,5);
    ellipse(360,240,5,5);

    fill(0, 255, 204);
    beginShape();
    vertex(150, 125);
    bezierVertex(180, 5, 158, 295, 185, 159);
    bezierVertex(150, 180, 160, 125, 210, 167);
    endShape();
    
    fill(0, 255, 204);
    beginShape();
    vertex(230, 201);
    bezierVertex(280, 176, 258, 335, 338, 264);
    bezierVertex(150, 280, 260, 225, 310, 267);
    endShape();
    
    fill(0, 255, 204);
    beginShape();
    vertex(x10, 338);
    bezierVertex(-8, 154, 110, 332, xx10, 251);
    bezierVertex(48, 277, 180, 187, xxx10, 303);
    endShape();
    
    if(x10<246){
        x10+=0.75;
    }
    if(xx10<196){
        xx10+=0.75;
    }
    if(xxx10<179){
        xxx10+=0.75;
    }
    
    fill(0, 68, 255);
    ellipse(200,200,jordw,jordh); //jorden
     
    if(t>3100&&t<3400){
        jordw=jordw+1;
        jordh=jordh+1;
    }
    }
    
    if(t > 3400&&t<6000){
        fill(255, 255, 255);
        ellipse(200,74,148,51);
        ellipse(202,326,148,51);
        fill(40, 138, 51);
        ellipse(110,184,100,77);
        ellipse(126,233,48,111);
        ellipse(104,214,50,50);
        ellipse(206,143,98,70);
        ellipse(264,143,98,70);
        ellipse(243,166,98,70);
        ellipse(268,257,98,70);
        
    }   
    
    if(t>3550&&t<6000){
        textSize(90);
        fill(255, 255, 255);
        text("The End",24,236);
        
    }

    
};
