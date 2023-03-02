const World = Matter.World;
const Engine = Matter.Engine;

var world, engine

function preload(){
  backgroundImg = loadImage("assets/fundo.jpg")
  titleImg = loadImage('assets/titulonovo.png')
  cardPEImg = loadImage('assets/botaoPE.png')
  cardPImg = loadImage('assets/botaoP.png')
  cardTImg = loadImage('assets/botaoT.png')
  interImg = loadImage('assets/interrogacao.png')
  youImg = loadImage('assets/you.png')
  computerImg = loadImage('assets/computer.png')
  escolhendoImg = loadImage('assets/escolhendo.png')
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  // engine = Engine.create();
  // world = engine.world;
  
  titleGame= createSprite(width/2,200);
  titleGame.addImage(titleImg);
  
  button = createImg("assets/botaoPlay.png");
  button.position(width/2 -275, 200)
  button.mouseClicked(mousePressed)
   
  cardPE = createSprite(650,300)
  cardPE.addImage(cardPEImg)
  cardPE.scale = 0.3
  cardPE.visible = false

  cardP = createSprite(880,300)
  cardP.addImage(cardPImg)
  cardP.scale = 0.3
  cardP.visible = false

  cardT = createSprite(1110,300)
  cardT.addImage(cardTImg)
  cardT.scale = 0.3
  cardT.visible = false

  inter = createSprite(250,250)
  inter.addImage(interImg)
  inter.scale = 0.3
  inter.visible = false
 
  you = createSprite(900,100)
  you.addImage(youImg)
  you.scale = 0.8
  you.visible = false

  computer = createSprite(250,100)
  computer.addImage(computerImg)
  computer.scale = 0.8
  computer.visible = false

  escolhendo = createSprite(900,500)
  escolhendo.addImage(escolhendoImg)
  escolhendo.scale = 0.6
  escolhendo.visible = false

}

function draw() {
  
  background(backgroundImg);
  
 


  drawSprites();
}

function mousePressed() {
  titleGame.remove()
  button.remove()
  cardPE.visible = true;
  cardP.visible = true;
  cardT.visible = true;
  inter.visible = true
  you.visible = true
  computer.visible = true
  escolhendo.visible = true
}





