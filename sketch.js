//Create variables here
var dog,happyDog,database,food,foodStock,image,Ref
function preload()
{
  dogImg=loadImage("images/dogImg.png")
  happyImage=loadImage("images/dogImg1.png")
	//load images here
}

function setup() {
	createCanvas(500, 500);
  dog =createSprite(200,200,20,20)
  dog.addImage(dogImg);
  dog.scale=0.1
  database=firebase.database()
  foodStock=database.ref('food')
  foodStock.on("value",readStock);
  
}


function draw() {  
  background(46,139,87)
  textSize(50)
stroke(3)
  text("foodStock",150,100)
  if(keyWentDown(UP_ARROW)){
    writeStock(food)
    dog.addImage(happyImage)
  }
drawSprites();


  //add styles here

}


function readStock(data){
food=data.val();
}
function writeStock(x){
  if (x<=0){
    x=0;
  }else{
    x=x-1
  }
  database.ref('/').update({
    food :x
  })
}
