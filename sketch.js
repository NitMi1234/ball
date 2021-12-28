var ball={
x:200,
y:200,
r:20,
xspeed:0,
yspeed:0,
color:["black","orange","blue","red"]

}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  circle(ball.x,ball.y,ball.r)
  fill(ball.color[2])
  ball.yspeed=4
  ball.y=ball.y+ball.yspeed 
}

//var()stores one value at a time
//array[]stores mulitple values at same time
//json{}store multiple values anlong with properties names at the same time