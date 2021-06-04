class Tnt{
constructor(x,y){
var op={
isStatic:true



}
this.body=Bodies.rect(x,y,50,50,op)
this.img=loadImage('game imgs/tnt.png')
World.add(World,this.Body)

}
display(){
ImageMode(CENTER)
Image(this.img,this.body.position.x,this.body.position.y)}



}