
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var crumpledball,dustbin,dustbin2,dustbin3;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ground = createSprite(400,650,800,50)
	crumpledball = createSprite(600,150,25,25,25)
	dustbin = createSprite(600,600,100,30)
	dustbin3 = createSprite(550,565,30,100)
	dustbin3 = createSprite(650,565,30,100)
	Engine.run(engine)
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 
  drawSprites();
 
	  
  
	
}
function keyPressed(){
	if (keyCode === UP_ARROW) {
   Matter.Body.applyForce(crumpledball.body,crumpledball.body.position,{x:85,y:-85});
	   Matter.Body.setStatic(crumpledball,false);
	 }
	 else
	 {
	   crumpledball.isStatic=true
	 
	}
   }


