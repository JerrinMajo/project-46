var player,playerImg;
var backgroundImg;
var arrow,arrowImg;
var zombies,zombieImg;


function preload(){
  playerImg=loadImage("assets/hawkeye1.png");
  backgroundImg=loadImage("assets/background.png");
  arrowImg=loadImage("assets/arrow.png");
  zombieImg=loadImage("assets/chitauri2.png")

}

function setup(){
  createCanvas(windowWidth,windowHeight);

  player=createSprite(200,450);
  player.addImage("player",playerImg);
  player.scale=0.7;

  zombies=createSprite(800,450);
  zombies.addImage(zombieImg);
  zombies.scale=0.3;

}
function draw(){
  background(backgroundImg);

  if(keyDown(UP_ARROW)){
    player.y=player.y-5;
  }

  if(keyDown(DOWN_ARROW)){
    player.y=player.y+5;
  }

  if(keyDown(RIGHT_ARROW)){
    player.x=player.x+5;
  }

  if(keyDown(LEFT_ARROW)){
    player.x=player.x-5;
  }

  if(keyDown("space")){
    createArrow();
  }

  //createZombies();

  drawSprites();
}

function createArrow(){
   arrow=createSprite(100,100,10,10);
   arrow.addImage(arrowImg);
   arrow.scale=0.05;
   arrow.x=player.x+40;
   arrow.y=player.y-45;
   arrow.velocityX=4;
   arrow.lifetime=windowHeight/4;
}

/*function createZombies(){
  zombies=createSprite(500,450);
  zombies.addImage(zombieImg);
  zombies.scale=0.3;
}*/