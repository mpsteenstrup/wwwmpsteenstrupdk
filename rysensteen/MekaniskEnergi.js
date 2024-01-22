void setup(){
	size(400,400);
}

var draw() {
    background(136, 208, 247);
    var vin=10;
var x = 205;
fill(82, 76, 76);
// position of the car
var o = 10;

// draw the car body
fill(255, 0, 115);
rect(o + 15, 305, 70, 40);
rect(o, 325, 100, 20);


// draw the wheels
fill(77, 66, 66);
ellipse(o + 25, 341, 24, 24);
ellipse(o + 75, 341, 24, 24);





//hus
rect(200,50,100,300);
strokeWeight(2);
//vinduer i første række
rect(x,75,vin,vin);
rect(x,95,vin,vin);
rect(x,115,vin,vin);
rect(x,155,vin,vin);
rect(x,135,vin,vin);
rect(x,55,vin,vin);
rect(x,155,vin,vin);
rect(x,255,vin,vin);
rect(x,175,vin,vin);
rect(x,195,vin,vin);
rect(x,215,vin,vin);
rect(x,235,vin,vin);
rect(x,275,vin,vin);
rect(x,295,vin,vin);
rect(x,315,vin,vin);
rect(x,335,vin,vin);


//vinduer i 2. række
var y=225;
rect(y,75,vin,vin);
rect(y,95,vin,vin);
rect(y,115,vin,vin);
rect(y,155,vin,vin);
rect(y,135,vin,vin);
rect(y,55,vin,vin);
rect(y,155,vin,vin);
rect(y,255,vin,vin);
rect(y,175,vin,vin);
rect(y,195,vin,vin);
rect(y,215,vin,vin);
rect(y,235,vin,vin);
rect(y,275,vin,vin);
rect(y,295,vin,vin);
rect(y,315,vin,vin);
rect(y,335,vin,vin);

//vinduer i 3.
var z=245;
rect(z,75,vin,vin);
rect(z,95,vin,vin);
rect(z,115,vin,vin);
rect(z,155,vin,vin);
rect(z,135,vin,vin);
rect(z,55,vin,vin);
rect(z,155,vin,vin);
rect(z,255,vin,vin);
rect(z,175,vin,vin);
rect(z,195,vin,vin);
rect(z,215,vin,vin);
rect(z,235,vin,vin);
rect(z,275,vin,vin);
rect(z,295,vin,vin);
rect(z,315,vin,vin);
rect(240,331,10,30);
rect(250,331,10,30);

//vinuder i 4.
var æ=265;
rect(æ,75,vin,vin);
rect(æ,95,vin,vin);
rect(æ,115,vin,vin);
rect(æ,155,vin,vin);
rect(æ,135,vin,vin);
rect(æ,55,vin,vin);
rect(æ,155,vin,vin);
rect(æ,175,vin,vin);
rect(æ,195,vin,vin);
rect(æ,215,vin,vin);
rect(æ,235,vin,vin);
rect(æ,275,vin,vin);
rect(æ,295,vin,vin);
rect(æ,315,vin,vin);
rect(æ,335,vin,vin);
rect(æ,255,vin,vin);

//vinduer i 5. 
var å=285;
rect(å,75,vin,vin);
rect(å,95,vin,vin);
rect(å,115,vin,vin);
rect(å,155,vin,vin);
rect(å,135,vin,vin);
rect(å,55,vin,vin);
rect(å,155,vin,vin);
rect(å,255,vin,vin);
rect(å,175,vin,vin);
rect(å,195,vin,vin);
rect(å,215,vin,vin);
rect(å,235,vin,vin);
rect(å,275,vin,vin);
rect(å,295,vin,vin);
rect(å,315,vin,vin);
rect(å,335,vin,vin);

rect(225,20,50,30);

stroke(207,31,207);
var q = 350 - mouseY;
var EMek=2946;
var EPot=q*9.82;
var EKin=EMek-EPot;
var v=sqrt(2*EKin);
var a=(sqrt(2*EMek-2*9.82*q));
stroke(0, 0, 0);
strokeWeight(4);
fill(30, 35, 92);
strokeWeight(4);
strokeWeight(4);
  if (mouseY > 49)
{
    //dot on line
    strokeWeight(2);
   line(300,mouseY,328,mouseY);}
   fill(48, 186, 89);
   strokeWeight(4);
   rect(0,350,400,50);//grass
        fill(0, 0, 0);
        //side text and values
        textSize(12);
        fill(105, 24, 24);
         text("højde (m) :" + " " +"," + " "+ q.toFixed(0), 88-74,170-63);
        text("E-Kin (J):" + " " +"," + " "+ EKin.toFixed(2), 88-74,190-43);
        text("E-Pot (J):" + " " +"," + " "+ EPot.toFixed(2), 88-74,213-86); 
        text("Hastighed (m/s):" + " " +"," + " "+ v.toFixed(2), 88-74,209-25); 
        text("m (kg) = 1",15,200);
        fill(186, 55, 186);
        var r=mouseY;
        if (r<50){
            r=50;
            
            
    
        line(300,r,328,r);
        }
        fill(105, 24, 24);
        var s = "E-Pot = m*g*h = 1 kg * 9.82 m/s^2 * " + round(q) + " m = "+ EPot.toFixed(2)+ " J";//formel POT
      text(s,5,365);
      var v2 = round(v*v);
        var A ="E-kin = 1/2 * m * V^2 = 1/2 * 1 kg * " + v2 + " m^2/s^2 = "+EKin.toFixed(2)+" J";//formel KIN
        text(A,5,380);
        
        
        var d ="Hastighed = √(2*EMek-2*g*h) = √(2*2946-2*9.82*"+ round(q)+") = "+a.toFixed(2)+"m/s";
        text(d,5,395);//formel HASTIGHED
        
 stroke(0, 0, 0);
   text("EMek (J) : 2946 ",13,157,100,40);
   
        if (r>350){
            r=350;
        }
        ellipse(270+60,r-15,30,30);//stor cirkel
        //text(s,0,40);
        
      
        strokeWeight(2);
        fill(247, 196, 67);
        ellipse(45,45,60,60);
    
        

    };
    
       
       
  
  
  //hvad vil vi snakke om: 
  //energibevarelse (pot + kin = mek (konstant) derfor er kin = Mek - pot.
  //udregning af hastighed (isolere v)
  //omsætning fra potentiel til kinetisk (beligenhed til bevægelse)
  
  
  
  //HUSK!!! (i Vacuum, derfor uden nogen friktion)
  
