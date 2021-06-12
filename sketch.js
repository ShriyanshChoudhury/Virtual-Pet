//Create variables here
var dog 
var happyDog
var database
var FoodS
var foodStock
var Dog1Img
var Dog2Img
function preload(){
Dog1Img=loadImage("Dog.png")
Dog2Img=loadImage("happydog.png")

}

function setup() {
database = firebase.database();
createCanvas(500,500);
 dog = createSprite (250,250,10,10)
 dog.addImage(Dog1Img)
 dog.scale=0.15
 
 foodStock=database.ref('Food')
 foodStock.on("value",readStock);
 
  
}


function draw() {  
  background(46,139,87)

  if(keyWentDown(UP_ARROW)){
  writeStock(FoodS);
  dog.addImage(Dog2Img);
  }


  drawSprites();
  textSize(20)
  fill ("white")
  stroke ("black")
  text("Press Up Arrow to Feed The Dog",200,50)
  text("Food Remaining:"+FoodS,170,200)
}

function readStock(data){
  FoodS=data.val();
}

function writeStock(x){
 if (x<=0){
  x = 0

 }
 else {
  x=x-1
 }
  database.ref('/').update({
   Food:x 
  })

}

