
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var hammer;
var stone, rubber, iron;
var sand1, sand2, sand3, sand4, sand5, sand6;
var plane;

function preload(){}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	Engine.run(engine);

	hammer = new Hammer(400, 300);

	stone = new Stone(400, 380, 100, 100);
	rubber = new Rubber(700, 380, 30);
	iron = new Iron(260, 380, 80, 50);

	sand1 = new Sand(480, 380, 5);
	sand2 = new Sand(510, 380, 5);
	sand3 = new Sand(530, 380, 5);
	sand4 = new Sand(360, 380, 5);
	sand5 = new Sand(330, 380, 5);
	sand6 = new Sand(200, 380, 5);

	plane = new Plane(400, height, 800, 20);
  
}


function draw() {
    rectMode(CENTER);
    background("lightBlue");
  
    hammer.display();
	stone.display();
	plane.display();
	rubber.display();
	iron.display();

	sand1.display();
	sand2.display();
	sand3.display();
	sand4.display();
	sand5.display();
	sand6.display();

    drawSprites();
 
}



