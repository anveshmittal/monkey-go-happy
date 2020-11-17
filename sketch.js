
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score;
var ground,invisbleGround;






function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  monkey = createSprite(50,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale = 0.1;
  
 ground = createSprite(400,350,900,10);
  ground.velocityX = -4;
  ground.x = ground.width/2;
  
  foodGroup = new Group();
  obstaclesGroup = new Group();
  
  score = 0;

}


function draw() {

  background("pink");
  
  
 
if(foodGroup.isTouching(monkey)){
  score = score+2;
  foodGroup.destroyEach();
  
}
  
 if(monkey.isTouching(obstaclesGroup)){
   fill("rgb(173,255,47)");
   text("gameOver",200,200);
 } 
  
  if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
  if(keyDown("space")){
    monkey.velocityY = -12;
     
  }
  monkey.velocityY = monkey.velocityY+0.8
  
  monkey.collide(ground);
  
  
  spawnfood();
  spawnobstacles();
  
drawSprites();  
  
  text("score:"+score,300,50);
  

}

function spawnfood(){
  if (frameCount%80===0){
    banana = createSprite(600,250,40,10)
    banana.addImage(bananaImage);
    banana.scale= 0.1;
    banana.velocityX=-5;
    banana.y = random(80,250);
    console.log(banana.y)
    banana.lifetime=300;
    foodGroup.add(banana);
    
  }
}
function spawnobstacles(){
  if (frameCount%80===0){
    obstacle = createSprite(800,330,10,40);
    obstacle.addImage(obstacleImage);
    obstacle.scale=0.1;
    obstacle.lifetime=300;
    obstacle.velocityX=-6;
    obstaclesGroup.add(obstacle);
    
    
  }
}




