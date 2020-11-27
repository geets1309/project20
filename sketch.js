var car, wall;
var speed,weight;

function setup()
{
	createCanvas(1370,400);
	speed=random(55,80);
	weight=random(40,1500);
	 car = createSprite(50,200,50,50);
	 wall=createSprite(1360,200,60,400);
	 wall.shapeColor=color(80,80,80);
	 car.velocityX=speed;

}

function draw()
{

//car.collide(wall);
	background(0);
	if(wall.x-car.x < (car.width+wall.width)/2)
	{
	car.velocityX=0;
	var deformation=0.5 * weight * speed* speed/22500;
	if(deformation<100)
	{
car.shapeColor="green";
	}
	if(deformation>100 && deformation<180)
	{car.shapeColor="yellow";

	}
	if(deformation>180)
	{
car.shapeColor="red";
	}}
	drawSprites();
}
