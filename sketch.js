
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
 	


}

function setup() 
{
	createCanvas(900, 700);

	engine = Engine.create();
	world = engine.world;

	

	ground = new Ground(600,height,1200,20)
	//D1= new Dustbin(600,680,200,20);
	D2=new Dustbin(750,600,320,210);
   //D3=new Dustbin(700,615,20,150);

   
	paper = new Paper (100,600,50);

	Engine.run(engine);
  
}


function draw() 
{
  rectMode(CENTER);
  background("white");

  
  
  drawSprites();
 paper.display();
 ground.display();
 //D1.display();
 D2.display();
 //D3.display();

text("Press Up Arrow To Play",330,100)


}

function keyPressed()
{

	if(keyCode === UP_ARROW) 
	{

   Matter.Body.applyForce(paper.body,paper.body.position,{x:350,y:-440});

	}



}

