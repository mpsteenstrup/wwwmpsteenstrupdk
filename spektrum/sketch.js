function setup() {
  createCanvas(410,520);
}
//varibles
var λ = 380;
var speed = 0.1;
var Fpx = 200;
var Fpy = 290;


function draw() {
  
 //sinus kurven

background(0);
    λ = constrain(λ, 380, 750);
    textSize(23);
     text("Den Fabelagtige Bølge-detector 9000", 200, 52);
    textSize(35);
    //farve kontrol
    if(λ >= 380 && λ<415){
            background(255/17.5*(λ-380), 0, 255/17.5*(λ-380));
        }else if(λ >= 415 && λ<472.5){
            background(255/57.5*(472.5-λ), 0, 255);
            
        }else if(λ >= 472.5 && λ<532.5){
            background(0, 255/60*(λ-472.5), 255/60*(532.5-λ));
            
        }else if(λ >= 532.5 && λ<580){
            background(255/37.5*(λ-532.5), 255, 0);
            
        }else if(λ >= 580 && λ<645){
            background(255, 255/65*(645-λ), 0);
            
        }else if(λ >= 645 && λ<750){
           
            background(255/105*(750-λ), 0, 0);
        }else{
            background(25);
        }
    
     //keypresses
     //keypress UP
    if (keyIsPressed && keyCode === UP_ARROW) {
        λ+=speed;
    }
    //keypress DOWN
    if (keyIsPressed && keyCode === DOWN_ARROW) {
        λ-=speed;
    }
    if (mouseIsPressed && mouseY>400){
      λ = map(mouseX, 20, 380, 380, 740);
    }
    
    //What wavelength are we on?
    textAlign(TOP, TOP);
    text("λ = " + floor(λ) + " nm", 100, 115, 301, 200);
    fill(0);
    textAlign(CENTER, CENTER);
    //What colour is this?
    if (λ >= 380 && λ < 450){
        text("Violet", Fpx, Fpy);
    } else if( λ >= 450 && λ < 495){
        text("Blå", Fpx, Fpy);
    } else if( λ >= 495 && λ < 570){
        text("Grøn", Fpx, Fpy);
    } else if( λ >= 570 && λ < 590){
        text("Gul", Fpx, Fpy);
    } else if( λ >= 590 && λ < 620){    
        text("Orange", 180, Fpy);
    } else if( λ >= 620 && λ < 750){
        text("Rød", Fpx, Fpy);
    } else {
        text("ikke synlig", Fpx, Fpy);
    }
    //sinus kurven
    for(var i=0;i<400;i++){
        ellipse(i,sin(i*2*PI/200*1/(λ/500))*20+200,5,5);
    } 

noStroke();
for(i=380;i<740;i++){
  
          if(i >= 380 && i<415){
          fill(255/17.5*(i-380), 0, 255/17.5*(i-380));
          rect(i-360,400,10,50);
        }
        else if(i >= 415 && i<472.5){
            fill(255/57.5*(472.5-i), 0, 255);
          rect(i-360,400,10,50);
        }
        else if(i >= 472.5 && i<532.5){
            fill(0, 255/60*(i-472.5), 255/60*(532.5-i));
            rect(i-360,400,10,50);
        }
        else if(i >= 532.5 && i<580){
            fill(255/37.5*(i-532.5), 255, 0);
            rect(i-360,400,10,50);
        }
        else if(i >= 580 && i<645){
            fill(255, 255/65*(645-i), 0);
            rect(i-360,400,10,50);
        }
        else if(i >= 645 && i<750){
            fill(255/105*(750-i), 0, 0);
            rect(i-360,400,10,50);
        }
        else{fill(0,0,200);
          rect(i-360,400,10,50);
        }
fill(0); 
rect(0,0,10,height);
rect(width-10,0,10,height);
rect(0,0,width,10);
rect(0,height-40,width,40);
fill(255);
textSize(12);
text("Lavet af Maria, Laurits og Quadar, Rysensteen 1.y-2016 ",165,500);
  
}


function mousePressed() {
  fill(200);
  ellipse(200,200,200,200);
}  


  
}