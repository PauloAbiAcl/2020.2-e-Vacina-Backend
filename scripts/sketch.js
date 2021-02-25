

function windowResized(){ //updates the canvas size if window size changes
 resizeCanvas(windowWidth, windowHeight*0.95);
}

const numberOfDrops = 100;
const drops = [];
for(let i = 0; i < numberOfDrops; i++){
  drops.push(new Drop(Math.random()*window.innerWidth, Math.random()*(-window.innerHeight)));
}

let canvas;
function setup(){
 canvas = createCanvas(windowWidth, windowHeight*0.95);
 canvas.position(0,0);
 canvas.style('z-index', '-1');

}

function draw(){
 //background(55,177,199);
 background(25,25,25);
  
 drops.forEach(drop => {
   drop.fall();
   drop.isOut(windowHeight,Math.random()*(-windowHeight));
   drop.show();
 });

}