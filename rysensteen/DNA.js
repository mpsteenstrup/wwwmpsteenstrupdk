void setup(){
	size(400,400);
}

    var rw = 50;
    var rh = 20;
    var xl = 200;
    var xr = 200;
    var yl = 200;
    var yr = 200;
    var x1 = 200;
    var y1 = 200;
    var x2 = 200;
    var y2 = 200;
    var x3 = 200;
    var y3 = 200;
    var x4 = 200;
    var y4 = 200;
    var x5 = 200;
    var y5 = 200;
    var x6 = 200;
    var y6 = 200;
    var x7 = 200;
    var y7 = 200;
    var x8 = 200;
    var y8 = 200;
    var x9 = 200;
    var y9 = 200;
    var x10 = 200;
    var y10 = 200;
    var x11 = 200;
    var y11 = 200;
    var x12 = 200;
    var y12 = 200;
    var x13 = 200;
    var y13 = 200;
    var x14 = 200;
    var y14 = 200;
    var x15 = 200;
    var y15 = 200;
    var x16 = 200;
    var y16 = 200;
    var y = 200;
    var x = 200;
    var DNAy = 500;
    var DNAyy = -100;
    var test = x16;
    
    var stadie = 1;
    
var draw() {
    background(255, 255, 255);
    stroke(0, 0, 0);
    strokeWeight(10);
    line(xl - 50, yl - 150, xl - 50, yl + 150);
    line(xr + 50, yr - 150, xr + 50, yr + 150);
    
    // left DNA-string side
    strokeWeight(1);
    noStroke();
    fill(240, 240, 0);
    rect(xl - 45, yl - 117, rw, rh);
    fill(0, 195, 255);
    rect(xl - 45, yl - 84, rw, rh);
    fill(108, 224, 62);
    rect(xl - 45, yl - 51, rw, rh);
    fill(235, 127, 127);
    rect(xl - 45, yl - 18, rw, rh);
    fill(240, 240, 0);
    rect(xl - 45, yl + 15, rw, rh);
    fill(0, 195, 255);
    rect(xl - 45, yl + 48, rw, rh);
    fill(108, 224, 62);
    rect(xl - 45, yl + 81, rw, rh);
    fill(235, 127, 127);
    rect(xl - 45, yl + 114, rw, rh);
    
    fill(0, 0, 0);
    text("A", xl - 20, yl - 102);
    text("C", xl - 20, yl - 69);
    text("G", xl - 20, yl - 36);
    text("T", xl - 20, yl - 3);
    text("A", xl - 20, yl + 30);
    text("C", xl - 20, yl + 63);
    text("G", xl - 20, yl + 96);
    text("T", xl - 20, yl + 129);
    
    // right DNA-string side
    fill(235, 127, 127);
    rect(xr - 5, yr - 117, rw, rh);
    fill(108, 224, 62);
    rect(xr - 5, yr - 84, rw, rh);
    fill(0, 195, 255);
    rect(xr - 5, yr - 51, rw, rh);
    fill(240, 240, 0);
    rect(xr - 5, yr - 18, rw, rh);
    fill(235, 127, 127);
    rect(xr - 5, yr + 15, rw, rh);
    fill(108, 224, 62);
    rect(xr - 5, yr + 48, rw, rh);
    fill(0, 195, 255);
    rect(xr - 5, yr + 81, rw, rh);
    fill(240, 240, 0);
    rect(xr - 5, yr + 114, rw, rh);
    
    fill(0, 0, 0);
    text("T", xr + 20, yr - 102);
    text("G", xr + 20, yr - 69);
    text("C", xr + 20, yr - 36);
    text("A", xr + 20, yr - 3);
    text("T", xr + 20, yr + 30);
    text("G", xr + 20, yr + 63);
    text("C", xr + 20, yr + 96);
    text("A", xr + 20, yr + 129);
    
    // baser usynlige
    fill(255, 255, 255);
    ellipse(xr - 5, yr - 107, rh, rh);
    fill(255, 255, 255);
    triangle(xl + 6, yl - 84, xl + 6, yl - 64, xl - 9, yl - 74);
    fill(255, 255, 255);
    triangle(xr + 9, yr - 41, xr - 6, yr - 51, xr - 6, yr - 31);
    fill(255, 255, 255);
    ellipse(xl + 5, yl - 8, rh, rh);
    fill(255, 255, 255);
    ellipse(xr - 5, yr + 25, rh, rh);
    fill(255, 255, 255);
    triangle(xl + 6, yl + 48, xl + 6, yl + 68, xl - 9, yl + 58);
    triangle(xr - 6, yr + 81, xr - 6, yr + 101, xr + 9, yr + 91);
    fill(255, 255, 255);
    ellipse(xl + 5, yl + 124, rh, rh);
    
    // baser synlige
    fill(240, 240, 0);
    ellipse(xl + 5, yl - 107, rh, rh);
    fill(108, 224, 62);
    triangle(xr - 4, yr - 84, xr - 4, yr - 64, xr - 19, yr - 74);
    fill(108, 224, 62);
    triangle(xl + 20, yl - 41, xl + 5, yl - 51, xl + 5, yl - 31);
    fill(240, 240, 0);
    ellipse(xr - 5, yr - 8, rh, rh);
    fill(240, 240, 0);
    ellipse(xl + 5, yl + 25, rh, rh);
    fill(108, 224, 62);
    triangle(xr - 4, yr + 48, xr - 4, yr + 68, xr - 19, yr + 58);
    triangle(xl + 5, yl + 81, xl + 5, yl + 101, xl + 20, yl + 91);
    fill(240, 240, 0);
    ellipse(xr - 5, yr + 124, rh, rh);
    
    // helikase (saks)
    fill(0, 0, 0);
    ellipse(x - 20, y + 170, 30, 40);
    fill(255, 255, 255);
    ellipse(x - 20, y + 170, 15, 25);
    fill(0, 0, 0);
    ellipse(x + 20, y + 170, 30, 40);
    fill(255, 255, 255);
    ellipse(x + 20, y + 170, 15, 25);
    fill(0, 0, 0);
    stroke(0,0,0);
    strokeWeight(7);
    line(x - 15, y + 155, x + 15, y + 120);
    line(x + 15, y + 155, x - 15, y + 120);
    strokeWeight(5);
    line(x, y + 185, x, y + 170);
    line(x, y + 115, x, y + 100);
    line(x, y + 95, x, y + 90);
    line(x, y + 75, x, y + 60);
    line(x, y + 45, x, y + 30);
    line(x, y + 15, x, y);
    line(x, y - 15, x, y - 30);
    noStroke();
    text("Helikase", x - 25, y + 200);
    
    if(y>-200){
        y -= 2;   
    }
    
    if(xl>75){
        xl -= 0.4;
    }
    if(xr<325){
        xr += 0.4;
    }
    else{
        stadie = 2;
    }
    if(stadie === 2){
         // left side
        fill(235, 127, 127);
        rect(x1 - 175, y1 - 190, rw, rh);
        fill(108, 224, 62);
        rect(x2 - 75, y2 - 190, rw, rh);
        fill(0, 195, 255);
        rect(x3 + 25, y3 - 190, rw, rh);
        fill(240, 240, 0);
        rect(x4 + 125, y4 - 190, rw, rh);
        fill(235, 127, 127);
        rect(x5 - 175, y5 + 170, rw, rh);
        fill(108, 224, 62);
        rect(x6 - 75, y6 + 170, rw, rh);
        fill(0, 195, 255);
        rect(x7 + 25, y7 + 170, rw, rh);
        fill(240, 240, 0);
        rect(x8 + 125, y8 + 170, rw, rh);
        
        // baser usynlige
        fill(255, 255, 255);
        ellipse(x1 - 175, y1 - 180, rh, rh);
        triangle(x3 + 25, y3 - 190, x3 + 25, y3 - 170, x3 + 45, y3 - 180);
        ellipse(x5 - 175, y5 + 180, rh, rh);
        triangle(x7 + 25, y7 + 170, x7 + 25, y7 + 190, x7 + 45, y7 + 180);
        
        // baser synlige
        fill(108, 224, 62);
        triangle(x2 - 75, y2 - 190, x2 - 75, y2 - 170, x2 - 95, y2 - 180);
        fill(240, 240, 0);
        ellipse(x4 + 125, y4 - 180, rh, rh);
        fill(108, 224, 62);
        triangle(x6 - 75, y6 + 170, x6 - 75, y6 + 190, x6 - 95, y6 + 180);
        fill(240, 240, 0);
        ellipse(x8 + 125, y8 + 180, rh, rh);
        
        fill(0, 0, 0);
        text("T", x1 - 155, y1 - 175);
        text("G", x2 - 55, y2 - 175);
        text("C", x3 + 45, y3 - 175);
        text("A", x4 + 145, y4 - 175);
        text("T", x5 - 155, y5 + 185);
        text("G", x6 - 55, y6 + 185);
        text("C", x7 + 45, y7 + 185);
        text("A", x8 + 145, y8 + 185);
        
        if(x1<300){
            x1 += 1;
        }
        if(y1<273){
            y1 += 1;   
        }
        if(y2<306){
            y2 += 1;   
        }
        if(y3<339){
            y3 += 1;   
        }
        if(x3>100){
            x3 -= 1;   
        }
        if(x4>1){
            x4 -= 1;   
        }
        if(y4<372){
            y4 += 1;   
        }
        if(x5<300){
            x5 += 1;   
        }
        if(y5>46){
            y5 -= 1;   
        }
        if(y6>78){
            y6 -= 1;   
        }
        if(x7>100){
            x7 -= 1;   
        }
        if(y7>111){
            y7 -= 1;   
        } 
        if(x8>1){
            x8 -= 1;   
        }else{
            stadie = 3;
        }
        if(y8>144){
            y8 -= 1;   
        }
       
    }
    if(stadie === 3){
        fill(0, 0, 0);
        stroke(10);
        strokeWeight(10);
        line(130, DNAy - 20, 130, DNAy - 320);
        noStroke();
        fill(240, 240, 0);
        ellipse(81, 93, rh, rh);
        fill(108, 224, 62);
        triangle(75, 149, 75, 169, 95, 160);
        fill(240, 240, 0);
        ellipse(81, 226, rh, rh);
        fill(108, 224, 62);
        triangle(75, 280, 75, 300, 95, 290);
        fill(25, 179, 118);
        ellipse(x - 122, y + 580, 80, 30);
        fill(0, 0, 0);
        text("Polymerase", x - 152, y + 585); 
        if((y + 1000) === 0){
            
        }
            
            y -= 1.6;
        
        if(x1>257){
            x1 -= 2;   
        }
        if(x2>157){
            x2 -= 1;   
        }
        if(x3>50){
            x3 -= 1;   
        }
        if(x4>-45){
            x4 -= 2;   
        }
        if(x5>257){
            x5 -= 2;   
        }
        if(x6>157){
            x6 -= 1;   
        }else{
            stadie = 4;
        }
        if(x7>50){
            x7 -= 1;   
        }
        if(x8>-45){
            x8 -= 2;   
        }
        if(DNAy>370){
            DNAy -= 1;   
        }
        
    }
       

    if(stadie === 4){
        // right side
        fill(240, 240, 0);
        rect(x9 - 175, y9 - 190, rw, rh);
        fill(0, 195, 255);
        rect(x10 - 75, y10 - 190, rw, rh);
        fill(108, 224, 62);
        rect(x11 + 25, y11 - 190, rw, rh);
        fill(235, 127, 127);
        rect(x12 + 125, y12 - 190, rw, rh);
        fill(240, 240, 0);
        rect(x13 - 175, y13 + 170, rw, rh);
        fill(0, 195, 255);
        rect(x14 - 75, y14 + 170, rw, rh);
        fill(108, 224, 62);
        rect(x15 + 25, y15 + 170, rw, rh);
        fill(235, 127, 127);
        rect(test + 125, y16 + 170, rw, rh);
        
        // baser usynlige
        fill(255, 255, 255);
        triangle(x10 - 25, y10 - 190, x10 - 25, y10 - 170, x10 - 45, y10 - 180);
        ellipse(x12 + 175, y12 - 180, rh, rh);
        triangle(x14 - 25, y14 + 170, x14 - 25, y14 + 190, x14 - 45, y14 + 180);
        ellipse(test + 75, y16 + 180, rh, rh);
        
        // baser synlige
        fill(240, 240, 0);
        ellipse(x9 - 125, y9 - 180, rh, rh);
        fill(108, 224, 62);
        triangle(x11 + 75, y11 - 190, x11 + 75, y11 - 170, x11 + 95, y11 - 180);
        fill(240, 240, 0);
        ellipse(x13 - 125, y13 + 180, rh, rh);
        fill(108, 224, 62);
        triangle(x15 + 75, y15 + 170, x15 + 75, y15 + 190, x15 + 95, y15 + 180);
        
        fill(0, 0, 0);
        text("A", x9 - 150, y9 - 175);
        text("C", x10 - 50, y10 - 175);
        text("G", x11 + 50, y11 - 175);
        text("T", x12 + 150, y12 - 175);
        text("A", x13 - 150, y13 + 185);
        text("C", x14 - 50, y14 + 185);
        text("G", x15 + 50, y15 + 185);
        text("T", test + 150, y16 + 185);
        
        if(x9<400){
            x9 += 1;   
        }
        if(y9<273){
            y9 += 1;   
        }
        if(x10<300){
            x10 += 1;   
        }
        if(y10<306){
            y10 += 1;   
        }
        if(y11<339){
            y11 += 1;   
        }
        if(x12>100){
            x12 -= 1;   
        }
        if(y12<372){
            y12 += 1;   
        }
        if(x13<400){
            x13 += 1;   
        }
        if(y13>45){
            y13 -= 1;   
        }
        if(x14<300){
            x14 += 1;   
        }
        if(y14>78){
            y14 -= 1;   
        }
        if(y15>111){
            y15 -= 1;   
        }
        if(x16>100){
            x16 -= 1;   
        }
        if(y16>145){
            y16 -= 1;   
        }else{
            stadie = 5;
        }
    if(stadie === 5){
        fill(108, 224, 62);
        triangle(320, 116, 320, 136, 300, 126);
        fill(240, 240, 0);
        ellipse(320.5, 192, rh, rh);
        fill(108, 224, 62);
        triangle(320, 249, 320, 269, 300, 259);
        fill(25, 179, 118);
        ellipse(x + 125, (-y) - 291, 80, 30);
        fill(0, 0, 0);
        text("Polymerase", x + 95, (-y) - 286);
        stroke(0, 0, 0);
        line(270, DNAyy - 20, 270, DNAyy - 320);
        
        if(x9<445){
            x9 += 1;   
        }
        if(x10<345){
            x10 += 1;   
        }
        if(x11<243){
            x11 += 1;
        }
        
        if(x12<145){
            x12 += 2;   
        }
        
        if(x13<445){
            x13 += 2;   
        }
        if(x14<345){
            x14 += 1;   
        }
        if(x15<243){
            x15 += 1;   
        }
        
        if(test>150){
            //x16 += 1;
            test-= 1;
            
        }
        
        if(DNAyy<370){
            DNAyy += 2;
        }
    }
    }
};
