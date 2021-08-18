var bgImg;
var snack,chai,tea;
var a,a1,a2,a3,a4,a5,a6,a7a8,a9,a10,a11,a12,a13,a14,a15,a16,a17,a18,a19,a20,a21,a22,a23,a24,a25,a26,a27,a28,a29,a30,a31;

function preload()
{
 bgImg = loadImage("bg.jpg");
 snack = loadImage("snack.png");
}

function setup() {
  createCanvas(1300,750);
  
}

function draw() {
  background(bgImg);
 
 textSize(40);
 fill("black");
 stroke("black");
 textFont("algerian");
 text("PRESS ENTER FOR YOUR ORDER",350,80);

 if(keyDown(ENTER)){
  chai = createSprite(700,370,1500,800);
  tea = createSprite(625,330,100,100);
  tea.addImage(snack);
  tea.scale=2;
  
  a = createSprite(20,10,20,20);
 a.velocityY=5;
 a.shapeColor="red";
 a1 = createSprite(60,10,20,20);
 a1.velocityY=3;
 a1.shapeColor="yellow";
 a2 = createSprite(100,10,20,20);
 a2.velocityY=8;
 a2.shapeColor="lime";
 a3 = createSprite(140,10,20,20);
 a3.velocityY=2;
 a3.shapeColor="magenta";
 a4 = createSprite(180,10,20,20);
 a4.velocityY=3;
 a4.shapeColor="cyan";
 a5 = createSprite(220,10,20,20);
 a5.velocityY=4;
 a5.shapeColor="orange";
 a6 = createSprite(260,10,20,20);
 a6.velocityY=2.5;
 a6.shapeColor="lime";
 a7 = createSprite(300,10,20,20);
 a7.velocityY=7;
 a7.shapeColor="red";
 a8 = createSprite(340,10,20,20);
 a8.velocityY=3;
 a8.shapeColor="purple";
 a10 = createSprite(380,10,20,20);
 a10.velocityY=5;
 a10.shapeColor="yellow";
 a11 = createSprite(420,10,20,20);
 a11.velocityY=6;
 a11.shapeColor="green";
 a12 = createSprite(460,10,20,20);
 a12.velocityY=2;
 a12.shapeColor="black";
 a13 = createSprite(500,10,20,20);
 a13.velocityY=5;
 a13.shapeColor="orange";
 a14 = createSprite(540,10,20,20);
 a14.velocityY=7;
 a14.shapeColor="yellow";
 a15 = createSprite(580,10,20,20);
 a15.velocityY=3;
 a15.shapeColor="lime";
 a16 = createSprite(620,10,20,20);
 a16.velocityY=4;
 a16.shapeColor="magenta";
 a17 = createSprite(660,10,20,20);
 a17.velocityY=3;
 a17.shapeColor="white";
 a18 = createSprite(700,10,20,20);
 a18.velocityY=2.5;
 a18.shapeColor="darkblue";
 a19 = createSprite(740,10,20,20);
 a19.velocityY=8;
 a19.shapeColor="skyblue";
 a20 = createSprite(780,10,20,20);
 a20.velocityY=2;
 a20.shapeColor="red";
 a21 = createSprite(820,10,20,20);
 a21.velocityY=6;
 a21.shapeColor="yellow";
 a22 = createSprite(860,10,20,20);
 a22.velocityY=3;
 a22.shapeColor="orange";
 a23 = createSprite(900,10,20,20);
 a23.velocityY=4;
 a23.shapeColor="cyan";
 a24 = createSprite(940,10,20,20);
 a24.velocityY=7.5;
 a24.shapeColor="green";
 a25 = createSprite(980,10,20,20);
 a25.velocityY=3;
 a25.shapeColor="brown";
 a26 = createSprite(1020,10,20,20);
 a26.velocityY=6;
 a26.shapeColor="darkblue";
 a27 = createSprite(1060,10,20,20);
 a27.velocityY=4;
 a27.shapeColor="yellow";
 a28 = createSprite(1100,10,20,20);
 a28.velocityY=3;
 a28.shapeColor="red";
 a29 = createSprite(1140,10,20,20);
 a29.velocityY=8;
 a29.shapeColor="lime";
 a30 = createSprite(1180,10,20,20);
 a30.velocityY=2;
 a30.shapeColor="black";
 a31 = createSprite(1220,10,20,20);
 a31.velocityY=4.5;
 a31.shapeColor="white";
 a32 = createSprite(1260,10,20,20);
 a32.velocityY=6;
 a32.shapeColor="cyan";
 }

  drawSprites();

  if(keyCode===ENTER){
  textSize(40);
  fill("white");
  stroke("black");
  text("THANKS FOR YOUR ORDER!  HOPE YOU ENJOY YOUR DAY!",100,80);
  }
}

