function preload(){
shivaI = loadImage("b.png")
priyaI = loadImage("g.png")
snowfall = loadAnimation("Screenshot 2021-04-07 at 20.10.15.png","Screenshot 2021-04-07 at 20.10.00.png","Screenshot 2021-04-07 at 20.09.47.png","Screenshot 2021-04-07 at 20.09.32.png");
}function setup() {
canvas = createCanvas(800,800)
background = createSprite(290,200,500,500)
background.addAnimation("falling", snowfall);
background.scale = 2
shiva = createSprite(550,550,90,90)
shiva.addImage(shivaI)
shiva.scale = 0.3
priya = createSprite(250,550,80,80)
priya.addImage(priyaI)
priya.scale = 0.3;
}

function draw() {
  function keyPressed(){
    if(keyCode===LEFT_ARROW){
    shiva.velocityX=-5
    }
    if(keyCode===RIGHT_ARROW){
      shiva.velocityX=5
      }
      if(keyCode===DOWN_ARROW){
        priya.velocityX=-5
        }
        if(keyCode===UP_ARROW){
          priya.velocityX=5
          }
    }
  drawSprites();
}