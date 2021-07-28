var garden,rabbit;
var gardenImg,rabbitImg;
var apple,appleImg;
var leaf, leafImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  leafImg = loadImage("orangeLeaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating rabbit running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);

var rand =  Math.round(random(1,100));
}

function draw() {
  background(0);

  if(frameCount % 80 === 0) {
    createApples();
  }

  if(frameCount % 60 === 0) {
    createLeaves();
  }

  if (apple)
  
  rabbit.x = World.mouseX;

  edges= createEdgeSprites();
  rabbit.collide(edges);


  drawSprites();
}

function createApples(){
  // write your code here
  
  apple = createSprite(random(50,350),40,10,10);
  apple.addImage(appleImg);
  apple.scale = 0.075;
  apple.velocityY = 7;
  apple.y = Math.round(random(10,60));
  apple.lifetime = 30;
 
 
}

function createLeaves(){
  // write your code here 
  
  leaf = createSprite(random(50,350),40,10,10);
  leaf.addImage(leafImg);
  leaf.scale = 0.075;
  leaf.velocityY = 7;
  leaf.y = Math.round(random(10,60));
  leaf.lifetime = 30;
 
}

