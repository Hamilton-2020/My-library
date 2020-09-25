var fixedRect, movingRect;
var gameObject1, gameObject2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  gameObject1 = createSprite(500, 200, 50, 50);
  gameObject2 = createSprite(300, 200, 50, 50);

  gameObject1.velocityX = -5;
  gameObject2.velocityX = 5;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect, gameObject2)){ //True / False
    movingRect.shapeColor = "yellow";
    gameObject2.shapeColor = "yellow";
  }
  else{
    movingRect.shapeColor = "blue";
    gameObject2.shapeColor = "blue";
  }
   bounceOff(gameObject1, gameObject2);
  drawSprites();
}





/*
return ---> Keyword that gives back a value from an user-defined function to the calling function


ARGUMENTS
  - Real values given to a function when it is being used
  - These values take some memory in the storage

PARAMETERS
  - Not real values / do not exist
  - Do not take any memory in the storage
  - PLACEHOLDERS for arguments


*/