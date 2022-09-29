//variaveis globais
var mar;
var navio;
var fundo;
var marImg;
var navioImg;


function preload(){
  marImg = loadImage("sea.png");
  navioImg = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
// navioImg = loadImage("ship-1.png");
}

function setup(){
  createCanvas(400,400);
  mar  = createSprite (200,200,200,200);
  mar.addImage(marImg);
  mar.scale = 0.5
  navio = createSprite(200,240,50,50);
  navio.addAnimation("mudando",navioImg);
 //navio.addImage(navioImg);
  navio.scale = 0.2;
  
  mar.velocityX = -2;
  if(mar.x <0){
    mar.x = width/8;
  }
}

function draw(){
  background("blue");
  drawSprites();

 
}
