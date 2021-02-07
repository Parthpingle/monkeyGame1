
var monkey , monkey_running,invisibleGround;
var banana ,bananaImage, obstacle, obstacleImage,ground;
var obstaclesGroup,bananaGroup;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,600);
   ground= createSprite(20,580,600,100);
  monkey = createSprite(30,500,50,50);
  monkey.addAnimation("monkeyrunning",monkey_running);
  monkey.scale = 0.1;
  invisibleGround = createSprite(10,550,600,20);
invisibleGround.visible = false;
  ground.velocityX = -3;
  ground.x = ground.width/2;
  }


function draw() {
  background(180);
  
  
    if(keyDown("space")){
    monkey.velocityY = -12
    }
    monkey.velocityY = monkey.velocityY+0.8
    if(ground.x<0){
    ground.x = ground.width/2
        }
  monkey.collide(invisibleGround);
 spawnObstacles();
  createBananas();
  obstaclesGroup = new Group();
  bananaGroup = new Group();
drawSprites();
  }
  
function spawnObstacles(){
 if(frameCount%120 === 0){ 
   obstacle = createSprite(600,500,50,50);
obstacle.addImage(obstacleImage);
   obstacle.scale = 0.2;
   obstacle.velocityX = -3;
   obstaclesGroup = createGroup;
 }
}

function createBananas(){
 if(frameCount%120 === 0){
    banana = createSprite(600,380,50,50)
   banana.addImage(bananaImage);
   banana.scale = 0.1;
   banana.velocityX = -3;
   bananaGroup = createGroup;
   
   
   
 }
  
  
}






