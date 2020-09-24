
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var PLAY = 1,END = 0;
var gamestate = PLAY;

function preload()
{
    this.tree  = loadImage("tree.png");
    boy=loadImage("boy2.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	tree = new Tree(600,650);

	mango1 = new Mango(480,320);
	mango2 = new Mango(680,320);
	mango3 = new Mango(580,320);
	mango4 = new Mango(540,250);
	mango5 = new Mango(620,250);

	stone = new Stone(235,420);

	

	slingshot = new SlingShot(stone.body,{x:235,y:420});

	ground = new Ground(400,650,width,20);

	Engine.run(engine);
  
}


function draw() {
  background(255);
  //text(mouseX+","+mouseY,mouseX,mouseY)
  image(boy ,200,340,200,300);
  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);

  tree.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();

  

  stone.display();

  ground.display();

  slingshot.display();
  
  drawSprites();
  if(mouseIsPressed){
    if(gamestate == PLAY){
        Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
        }
  }
 
}
/*
function mouseDragged(){
    
}*/

function mouseReleased(){
    slingshot.fly();
    gamestate = END;
}

function keyPressed(){
    if(keyCode === 32){
        Matter.Body.setPosition(stone.body,{x:75,y:450});
        slingshot.attach(stone.body);
        gamestate = PLAY;
    }
}

function detectCollision(a,b){
   m = b.body.position;
   s = a.body.position;

    if(m.x-s.x<=a.r+b.r&&s.x-m.x<=a.r+b.r
        &&m.y-s.y<=a.r+b.r&&s.y-m.y<=a.r+b.r){
            Matter.Body.setStatic(b.body,false);
        }
}



