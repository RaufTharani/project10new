var ship,ship_sailing,edges;
var sea;
var seaImage;

function preload(){
ship_sailing=loadAnimation("ship-1.png","ship-2.png","ship-4.png","ship-3.png");
seaImage=loadImage("sea.png");
}

function setup(){
createCanvas(400,400);

sea=createSprite(400,200)
sea.addImage("sea",seaImage);
sea.scale=0.3

ship=createSprite(100,160,20,50);
ship.addAnimation("sailing",ship_sailing);

ship.scale=0.3;
}

function draw() {
background("blue");

sea.velocityX=-2;

if(sea.x<0){
sea.x=sea.width/2
}

drawSprites();

  
 
}