
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var ball1;
var ball2;
var ball3;
var ball4;
var ball5;
var ball6;
var ball7;
var roof;
var string1;
var string2;
var string3;
var string4;
var string5;
var string6;
var string7;


function preload()
{
	
}

function setup() {
	createCanvas(900, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	roof = new Roof(550,350,600,15);
	
	ball1 = new Ball(150,390,41);
	ball2 = new Ball(250,390,41);
	ball3 = new Ball(350,390,41);
	ball4 = new Ball(450,390,41);
	ball5 = new Ball(550,390,41);

	string1 = new String(ball1.body,roof.body,-100*2,0);
	string2 = new String(ball2.body,roof.body,-50*2,0);
	string3 = new String(ball3.body,roof.body,-0*2,0);
	string4 = new String(ball4.body,roof.body,+50*2,0);
	string5 = new String(ball5.body,roof.body,+100*2,0);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(rgb(45,125,100));
  	
 	fill(rgb(43,56,89));
	roof.display();
	fill(rgb(225,225,225));
	string1.display();
	string2.display();
	string3.display();
	string4.display();
	string5.display();

	fill(rgb(47,12,76));
	ball1.display();
	fill(rgb(98,45,12));
	ball2.display();
	fill(rgb(20,90,60));
	ball3.display();
	fill(rgb(20,50,100));
	ball4.display();
	fill(rgb(75,100,125));
	ball5.display();


  drawSprites();
 
}

function keyPressed(){
	if(keyCode === LEFT_ARROW){
		Matter.Body.applyForce(ball1.body,ball1.body.position,{x:-150,y:-10});
	}
}
