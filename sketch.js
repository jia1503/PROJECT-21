var bullet1,wall1,bullet2,wall2,bullet3,wall3;
var speed1, speed3,speed2, weight1,weight3,weight2,thickness1,thickness2,thickness3;

function setup(){
 createCanvas(1600, 400);

 speed1=random(223,321); 
 speed2=random(223,321); 
 speed3=random(223,321); 
 
 weight1=random(30,52);
 weight3=random(30,52);
 weight2=random(30,52);

 thickness1=random(22,83); 
 thickness2=random(22,83); 
 thickness3=random(22,83);

 bullet1=createSprite(50, 100, 30,10);
 bullet1.velocityX = speed1;
 bullet1.shapeColor=color(255,255,255); 

 bullet2=createSprite(100, 200, 30,10);
 bullet2.velocityX = speed2;
 bullet2.shapeColor=color(255,255,255); 

 bullet3=createSprite(150, 300, 30,10);
 bullet3.velocityX = speed3;
 bullet3.shapeColor=color(255,255,255); 

 wall1=createSprite(1200,100, 60, 80); 
 wall1.shapeColor=color(80,80,80)

 wall2=createSprite(1200,200, 60, 80); 
 wall2.shapeColor=color(80,80,80)

 wall3=createSprite(1200,300, 60, 80); 
 wall3.shapeColor=color(80,80,80)
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

    if(wall2.x-bullet2.x < (bullet2.width+wall2.width)/2) {
      bullet2.velocityX=0; 
      var deformation=0.5 * weight2 * speed2* speed2/(thickness2*thickness2*thickness2);
      if(deformation>10){
        bullet2.shapeColor=color(255,0,0);
      } 
      else{
        bullet2.shapeColor=color(0,204,0)
      }
        } 

        if(wall3.x-bullet3.x < (bullet3.width+wall3.width)/2) {
          bullet3.velocityX=0; 
          var deformation=0.5 * weight3 * speed3* speed3/(thickness3*thickness3*thickness3);
          if(deformation>10){
            bullet3.shapeColor=color(255,0,0);
          } 
          else{
            bullet3.shapeColor=color(0,204,0)
          }
            }  
            
       
  drawSprites();
}
