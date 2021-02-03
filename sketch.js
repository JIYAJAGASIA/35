var balloon,balloon1,balloon2,balloon3;
var background1;
var database, Height,height,position;
function preload(){
  background1=loadImage("Hot Air Ballon-01.png");
 balloon1=loadAnimation("Hot Air Ballon-02.png");
 balloon2=loadAnimation("Hot Air Ballon-03.png");
 balloon3=loadAnimation("Hot Air Ballon-04.png");

}
function setup() {
  database=firebase.database();
  createCanvas(500,500);
  balloon=createSprite(240, 112, 50, 50);
  balloon.scale=0.4;
  balloon.addAnimation("Hot Air Ballon-01.png","Hot Air Ballon-02.png","Hot Air Ballon-03.png","Hot Air Ballon-04.png")
// balloon.addAnimation("Hot Air Ballon-02.png,Hot Air Ballon-03.png,Hot Air Ballon-04.png"
var balloonPosition=database.ref('balloon/height');
//balloonPosition.on("value", readPosition, showError); 
}

function draw(){
  background(background1);
  text("Use arrow keys to move the hot air balloon!",10,20);
  fill("black");
      if(keyDown(LEFT_ARROW)){
          balloon.x=balloon.x-10;
      }
      else if(keyDown(RIGHT_ARROW)){
        balloon.x=balloon.x+10;
      }
      else if(keyDown(UP_ARROW)){
      balloon.y=balloon.y-10;
      }
      else if(keyDown(DOWN_ARROW)){
       balloon.y=balloon.y+10;
      drawSprites();
  }
 balloon.display();
}

/*function updateHeight(x,y){
  database.ref('ball/height').set({
  'x' : height.x + x,
  'y' : height.y + y
})
}
function readHeight(data){
  height=data.val();
  balloon.x=height.x;
  balloon.y=height.y;
  }

  function showError()
  { 
      console.log("Error in writing to the database");
   }
   */