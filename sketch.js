/*var box1,box2,box3,box4,box5,box6,box7,box8,box9;
var square1,square2,square3,square4,square5,square6,square7,square8,square9;*/
var gameState;

function setup(){
    canvas=createSprite(800,800);
    gameState="start";
}

function draw(){
    background("black");
    
    if (gameState==="start"){
      play();
    }
  
    if (gameState==="page1"){
      page();
    }

    if (gameState==="page2"){
      lines();
    }

    if (gameState==="page3"){
      colour();
    }
    drawSprites();
}

function play(){
      
        textSize(30);
        fill("white");
        text("Get Ready For",100,150);

        textSize(30);
        fill("white");
        text("this EYE-Testing process!!",30,190);

        if(keyDown("UP_ARROW")){
          gameState="page1";
          console.log("check");
         }
        }      
      
 function page(){
  background(200)
  box1=createSprite(110,130,40,40);
  box1.shapeColor="red";

  box2=createSprite(110,190,40,40);
  box2.shapeColor="red";

  box3=createSprite(110,250,40,40);
  box3.shapeColor="red";

  box4=createSprite(180,130,40,40);
  box4.shapeColor="red";

  box5=createSprite(180,190,40,40);
  box5.shapeColor="red";

  box6=createSprite(180,250,40,40);
  box6.shapeColor="orange";

  box7=createSprite(250,130,40,40);
  box7.shapeColor="red";

  box8=createSprite(250,190,40,40);
  box8.shapeColor="red";

  box9=createSprite(250,250,40,40);
  box9.shapeColor="red";

  if (mousePressedOver(box6)){
    gameState="page2";
  }
}

function lines(){
  background("white");
  box1=createSprite(110,130,40,40);
  box1.shapeColor="red";

  box2=createSprite(110,190,40,40);
  box2.shapeColor="red";

  box3=createSprite(110,250,40,40);
  box3.shapeColor="red";

  box4=createSprite(180,130,40,40);
  box4.shapeColor="red";

  box5=createSprite(180,190,40,40);
  box5.shapeColor="red";

  box6=createSprite(180,250,40,40);
  box6.shapeColor="orange";

  box7=createSprite(250,130,40,40);
  box7.shapeColor="red";

  box8=createSprite(250,190,40,40);
  box8.shapeColor="red";

  box9=createSprite(250,250,40,40);
  box9.shapeColor="red";

  if (mousePressedOver(box6)){
    gameState="page3";
  
  }
 }

  function colour(){
  background(200)
  box1=createSprite(110,130,40,40);
  box1.shapeColor="red";

  box2=createSprite(110,190,40,40);
  box2.shapeColor="red";

  box3=createSprite(110,250,40,40);
  box3.shapeColor="red";

  box4=createSprite(180,130,40,40);
  box4.shapeColor="red";

  box5=createSprite(180,190,40,40);
  box5.shapeColor="red";

  box6=createSprite(180,250,40,40);
  box6.shapeColor="orange";

  box7=createSprite(250,130,40,40);
  box7.shapeColor="red";

  box8=createSprite(250,190,40,40);
  box8.shapeColor="red";

  box9=createSprite(250,250,40,40);
  box9.shapeColor="red";
 }