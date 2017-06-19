var forceX = 0;
var forceY = 0;
var bars = [];


function windowResized() { 
	resizeCanvas(windowWidth, windowHeight);
}

function setup(){
	createCanvas(windowWidth, windowHeight);

  
  
	gyro.frequency = 10; 
	gyro.startTracking(function(o) {
        forceX = o.gamma/50;
        forceY = o.beta/50;
    });

    for (var i = 0; i < 1; i++) {
    	bars[i] = new Bar();
    }

  
}



function draw(){
 background(200);
   console.log('draw');
   noStroke();
   fill(random(255),random(255),random(255));

   for (var i = 0; i < bars.length; i++) {
		bars[i].update();
		
	}
}



function Bar(){
	this.x = width/2; 
	this.y = height/2;
	this.vitx = random(2, 12);
	this.vity = random(2, 12);
	this.diam =16;
}


Bar.prototype = {
	update: function(){

		this.x += this.vitx * forceX;
		this.y += this.vity * forceY;

		if(this.x < this.diam/2){
			this.x = this.diam/2;
		} else if(this.x > width-this.diam/2){
			this.x = width-this.diam/2;
		}
		if(this.y < this.diam/2){
			this.y = this.diam/2;
		} else if(this.y > height-this.diam/2){
			this.y = height-this.diam/2;
		}

//	rect(this.x, this.y, this.diam * forceX*50, this.diam * forceY*50);		

 rectMode(CENTER);
  rect(this.x, this.y, this.diam, 80);
  rect(this.x-40, this.y, this.diam, 80);
  rect(this.x-80, this.y, this.diam, 80);
  rect(this.x+40, this.y, this.diam, 80);
  rect(this.x+80, this.y, this.diam, 80);
  rect(this.x-40, this.y-55, this.diam, 30);
  rect(this.x+40, this.y+55, this.diam, 30);
  
  rectMode(CORNER);
  rect(this.x-72, this.y-40, 6, 15);
  rect(this.x+66, this.y-40, 6, 15);
  rect(this.x-72, this.y+25, 6, 15);
  rect(this.x+66, this.y+25, 6, 15);
	}
}