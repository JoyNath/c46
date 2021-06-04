var bg,bgimage
const World=Matter.Word
const Bodies=Matter.Bodies
const Engine=Matter.Engine
var world,engine

function preload(){
  bgimage=loadImage("game imgs/bg1.jpg")
}

function setup(){
  createCanvas(windowWidth,windowHeight)
  engine=Engine.create()
  world=engine.world;
  bg=createSprite(windowWidth-20,windowHeight-30)
  bg.addImage(bgimage)
  bg.scale=2.03
//  bg.velocityX=-2

}
function draw(){
Engine.run()
  background(0)
  //infinite background
  //if(bg.x<(windowWidth-20)/2)
  //bg.x=windowWidth-20
    console.log('X='+bg.x)
    console.log('Y='+bg.y)
  drawSprites()


}
function mouseMoved(){

  bg.x=mouseX
  bg.y=mouseY
}

function mouseClicked(){
  var tntobj
  tntobj=new Tnt(mouseX,mouseY)
  tntobj.display()
}




