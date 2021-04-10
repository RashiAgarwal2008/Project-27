const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5, bobDiametre;
var roofObject;
var rope1, rope2, rope3, rope4, rope5;

function preload() {

}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	//bob diametre
	bobDiameter = 100;
	startBobPositionX = width / 2;
	startBobPositionY = height / 4 + 420;

	//bobs
	bobObject1 = new bob(startBobPositionX - bobDiameter * 2, startBobPositionY, bobDiameter);
	bobObject2 = new bob(startBobPositionX - bobDiameter, startBobPositionY, bobDiameter);
	bobObject3 = new bob(startBobPositionX, startBobPositionY, bobDiameter);
	bobObject4 = new bob(startBobPositionX + bobDiameter, startBobPositionY, bobDiameter);
	bobObject5 = new bob(startBobPositionX + bobDiameter * 2, startBobPositionY, bobDiameter);

	//roof
	roofObject = new Roof(400, 100, 500, 50);

	//ropes
	rope1 = new Rope(bobObject1.body, roofObject.body, -bobDiametre * 2, 0);
	rope2 = new Rope(bobObject2.body, roofObject.body, -bobDiametre * 2, 0);
	rope3 = new Rope(bobObject3.body, roofObject.body, -bobDiametre * 2, 0);
	rope4 = new Rope(bobObject4.body, roofObject.body, -bobDiametre * 2, 0);
	rope5 = new Rope(bobObject5.body, roofObject.body, -bobDiametre * 2, 0);

	Engine.run(engine);

}


function draw() {
	rectMode(CENTER);
	background(165);

	//display sprites

	bobObject1.display();
	bobObject2.display();
	bobObject3.display();
	bobObject4.display();
	bobObject5.display();

	roofObject.display();

	rope1.display();
	rope2.display();
	rope3.display();
	rope4.display();
	rope5.display();

	drawSprites();
}

