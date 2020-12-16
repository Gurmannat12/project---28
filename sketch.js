var datetime = "2020-07-03T17:27:22.042434+09:00";
console.log(datetime.slice(14,16));
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

var tree,treeImage;
var boy,boyImage;
var ground;
var stone;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9;
var world;

function preload(){
treeImage = loadImage("tree.png");
boyImage = loadImage("boy.png");	
}

function setup() {
	createCanvas(1600,700);


	engine = Engine.create();
	world = engine.world;

	tree=createSprite(900,400);
	tree.addImage(treeImage);
	tree.scale=0.45;


	ground = new Ground(600,680,1600,20);
	stone = new Stone(180,500,40);
	mango1 = new Mango(800,380,60);
	mango2 = new Mango(720,320,60);
	mango3 = new Mango(800,260,60);
	mango4 = new Mango(880,300,60);
	mango5 = new Mango(950,340,60);
	mango6 = new Mango(930,220,60);
	mango7 = new Mango(1020,260,60);
	mango8 = new Mango(1040,380,60);
	mango9 = new Mango(1120,330,60);


	boy=createSprite(250,600);
	boy.addImage(boyImage);
	boy.scale=0.125;

	launcher = new Launcher(stone.body,{x:180,y:530});

	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 1300,
		  height: 600,
		  wireframes: false
		}
	  });

	Engine.run(engine);
  

  
}


function draw() {
 // rectMode(CENTER);
  background("white");

  
  boy.display();
  tree.display();
  stone.display();
  ground.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  launcher.display();

  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);
  detectCollision(stone,mango7);
  detectCollision(stone,mango8);
  detectCollision(stone,mango9);

}

function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    launcher.fly();
}

function detectCollision(lmango,lstone){
	mangoBodyPosition = lmango.body.position;
	stoneBodyPosition = lstone.body.position;

	var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);
        if(distance<=lmango.r+lstone.r){
		Matter.Body.setStatic(lmango.body,false);
		}
}

function keyPressed(){
	if(keyCode===32){
		Matter.Body.setPosition(stone.body,{x:180,y:500});
		launcher.attach(stone.body);
	}
}

