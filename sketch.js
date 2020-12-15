ar bullet1,wall1;
var speed1, weight1,thickness1;

function setup(){
 createCanvas(1600, 400);

 speed1=random(223,321); 
 weight1=random(30,52);
 thickness1=random(22,83); 
 
 bullet1=createSprite(100, 200, 30,10);
 bullet1.velocityX = speed1;
 bullet1.shapeColor=color(255,255,255); 

 wall1=createSprite(1200,200, 60, 80); 
 wall1.shapeColor=color(80,80,80)

 
 }

function draw() {

 background(0);

 if(wall1.x-bullet1.x < (bullet1.width+wall1.width)/2) {
  bullet1.velocityX=0; 
  var deformation=0.5 * weight1 * speed1* speed1/(thickness1*thickness1*thickness1)
  if(deformation>10){
    bullet1.shapeColor=color(255,0,0);
  } 
  else{
    bullet1.shapeColor=color(0,204,0)
  }
    }  
                
  drawSprites();
}
