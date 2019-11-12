var particles = 1000;
var AR1 = new Array(particles);
var AR2 = new Array(particles);
var ARx = new Array(particles);
var ARy = new Array(particles);
var AR3 = new Array(particles);
var AR4 = new Array(particles);


function setup(){
  createCanvas(windowWidth,windowHeight,);
  noStroke(); 
  fill(0);
  ellipseMode(RADIUS);
  background(0);
  blendMode(ADD);
  
  for(var i =0; i< particles; i++){
    ARx[i] = random(width);
    ARy[i] = random(height);
    AR1[i] = 0;
    AR2[i] = 0;
    AR3[i] = 0;
    AR4[i] = 0;
  }
}


function draw() {
    background(0);
  
    if (frameCount % 1 == 0) {
    }
  
    for (var i = 0; i < particles.length; i++) {
      particles[i].display();
  
      if (particles[i].yPos < 100) {
        particles.splice(i, 1);
      }
  
    }

var draw = 10; 
var space = 1 ;
var rules = 1; 

function Particle() {
    this.xPos = mouseX;
    this.cSize = 100;
    this.yPos = mouseY;
    this.cColor = random(50);
    this.cSpeed = random(50);
  
    this.display = function () {
      fill(map(this.yPos, 0, height, 100, 255), 100, 100, map(this.yPos, 0, height, 0, 200));
      this.cSize = map(this.yPos, 0, height, 100, 255)
      this.yPos = this.yPos - this.cSpeed;
      this.cSpeed = map(this.yPos, 0, height, 0, 20)
      circle(this.xPos, this.yPos, this.cSize);
    }
  }
  
  fill(0,0,0);
  rect(0,0,width,height);
  
  for(var i=0; i<particles; i++){
    var distance = dist(mouseX, mouseY, ARx[i], ARy[i]); 
    if(distance > 3){ 
      AR3[i] = draw * (mouseX - ARx[i]) / (distance * distance);
      AR4[i] = draw * (mouseY - ARy[i]) / (distance * distance);
    }
    AR1[i] += AR3[i]; 
    AR2[i] += AR4[i];
    
    ARx[i] += AR1[i]; 
    ARy[i] += AR2[i]; 
    
    this.cSpeed = dist(0,0,AR1[i],AR2[i]);
    var r = map(this.cSpeed, 100, 50, 0, 255); 
    var g = map(this.cSpeed, 100, 50, 64, 255);
    var b = map(this.cSpeed, 100, 50, 128, 255);
    fill(r, g, b, 40);
    ellipse(ARx[i],ARy[i],space,space);
  }
  
}

