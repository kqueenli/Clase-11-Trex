var trex, trex_running;
var ground;

function preload(){
trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
}


function setup(){

  createCanvas(1000,500);
trex = createSprite(50,350,50,70);
trex.addAnimation("running",trex_running);
ground = createSprite(500,400,1000,30);

}

function draw(){


  background("white");
  
drawSprites()
}