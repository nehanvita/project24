const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



var engine,ground,paper,dustbin1;


function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  ground = new Ground(800,650,1600,20);
  paper= new Paper(500,550,50);
	
	dustbin1 = new Dustbin(990,620,20,100)
	dustbin2 = new Dustbin(1200,660,400,20)
	dustbin3 = new Dustbin(1400,620,20,100)

  

	Engine.run(engine);
  
}


function draw() {
  background(0);
  Engine.update(engine);

    ground.display();
    paper.display();

  dustbin1.display();
  dustbin2.display();
  dustbin3.display();

 
}


function keyPressed(){
  if(keyCode === UP_ARROW){
      
    Matter.Body.applyForce(paper.body,paper.body.position,{x:95,y:-95});
  
  }
  
  }
