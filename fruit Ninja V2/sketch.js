//game states
  var PLAY=1;
  var END=0;
  var gameState=1;
//variables
  var sword,fruit1,fruit2,fruit3,fruit4,monster;
  var swordImage,monsterImage,gameoverImage;
  var fruitGroup,enemyGruop;
  var gameover;
  var score=0;

function preload(){
  //load images
  fruit1 = loadImage("fruit1.png");
  fruit2 = loadImage("fruit2.png");
  fruit3 = loadImage("fruit3.png");
  fruit4 = loadImage("fruit4.png");
  monsterImage =loadImage("alien1.png");
  swordImage = loadImage("sword.png");
  gameoverImage = loadImage("gameover.png")
}
function setup(){
  createCanvas(400,400);
  sword = createSprite(40,200,20,20);  
  sword.scale=0.7;
  sword.addImage(swordImage);
  fruitGroup=createGroup();
  enemyGroup=createGroup();
}
function draw(){
  background("lightblue");
  
   if(gameState === PLAY){
 
  Enemy();
  fruits();
     
  sword.y=World.mouseY;
  sword.x=World.mouseX;   
     
  if(fruitGroup.isTouching(sword)){
    fruitGroup.destroyEach();
    score=score+1;
  }
    else if(enemyGroup.isTouching(sword)){
      
        gameState = END;
    
  
 
    fruitGroup.destroyEach();
    enemyGroup.destroyEach();
    fruitGroup.velocityX=0;
    enemyGroup.velocityX=0;
    sword.addImage(gameoverImage);
    sword.x=200;
    sword.y=200;
  }
  }
  
  
  
  
   
  drawSprites();
  text(" score "+score,300,100);
  
}



function fruits(){
  
 if(World.frameCount%80===0){ 
  fruit=createSprite(400,200,20,20);
  fruit.scale=0.2;
//fruit.debud=true;
  r=Math.round(random(1,4)); 
  if(r ==1 ) {
  fruit.addImage(fruit1);
  } else if (r == 2){
    fruit.addImage(fruit2)
    } else if (r == 3){
    fruit.addImage(fruit3)
      } else if (r == 4){
    fruit.addImage(fruit4)
      }
   fruit.y=Math.round(random(50,340));
   fruit.velocityX=-7;
   fruit.setlifetime=100;
   
   fruitGroup.add(fruit);
}
}
  
function Enemy(){
  
 if(World.frameCount%200===0){ 
 monster=createSprite(400,200,20,20);
 monster.addImage("moving",monsterImage);
 monster.y=Math.round(random(100,300)); 
 monster.velocityX=-8;
 monster.setlifetime=50;
   
 enemyGroup.add(monster);  
}
}