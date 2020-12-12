const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ball, ball2, ball3, ball4, ball5
var rope, rope2, rope3, rope4, rope5
var balls

function setup() {
  createCanvas(3000, 800);
  engine = Engine.create();
  world = engine.world;
  balls = [ball,ball2,ball3,ball4, ball5];
  ground = new Ground(650, 150, 650, 20);
  

  ball = new Ball(0, 150, 80, 80);
  ball2 = new Ball(575,500,80,80);
  ball3 = new Ball(650,500,80,80);
  ball4 = new Ball(725,500, 80,80);
  ball5 = new Ball(800,500,80, 80);
  rope = new Rope(ball.body, { x: 500, y: 150 });
  rope2 = new Rope(ball2.body, {x: 575, y: 150});
  rope3 = new Rope(ball3.body, {x: 650, y: 150});
  rope4 = new Rope(ball4.body, {x: 725, y: 150});
  rope5 = new Rope(ball5.body, {x: 800, y: 150});

}

function draw() {
  background(180);
  Engine.update(engine);
  ground.display();
  

  ball.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  rope.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();



}


function mouseDragged() {
  Matter.Body.setPosition(ball.body, { x: mouseX, y: mouseY });
}


