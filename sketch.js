var object1,object2;

function setup() {
  createCanvas(800,400);
  object1 = createSprite(300, 200, 50, 100);
  object2 = createSprite(100, 200, 50, 50);
}

function draw() {

  background("black");

  object1.shapeColor = "red";
  object2.shapeColor = "red";
  
  object1.x = mouseX;
  object1.y = mouseY;
  
  if (object1.x-object2.x <= object1.width/2 + object2.width/2 && 
    object2.x-object1.x <= object1.width/2 + object2.width/2 && 
    object1.y-object2.y <= object1.height/2 + object2.height/2 && 
    object2.y-object1.y <= object1.height/2 + object2.height/2) {
    
      object1.shapeColor = "blue";
    object2.shapeColor = "blue";
  }

  else {
    object1.shapeColor = "red";
    object2.shapeColor = "red";
  }

  object1.debug = true;
  object2.debug = true; 

  drawSprites();
}