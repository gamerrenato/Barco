
function preload(){
seaImg = loadImage("sea.png");
shipImg1 = loadAnimation(//liste os nomes dos arquivos das imagens que você deseja adicionar);
}

function setup(){
  createCanvas(400,400);
  
}

function draw() {
  background("blue");
  spriteName.addImage(seaImg);
  //código para redefinir o plano de fundo
  if(sea.x < 0){
    sea.x = sea.width/2;
  } 
  
  drawSprites();

 
}
