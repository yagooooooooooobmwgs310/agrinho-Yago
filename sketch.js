let campocidade;
let xjogador = [150, 60, 120, 135];
let yjogador = [85, 150, 225, 150];
let jogador = ["🍑", "🍑", "🍑", "🍑"];
let quantidade = jogador.length;


function preload(){
   campocidade = loadImage ('campocidade.jpg');
 
}

function setup() {
  createCanvas(600, 800);
 
  
}

function draw() {
  background(220);
  image (campocidade, 0,0,600,800)
 
  
  desenhaJogadores();
  desenhaLinhaChegada();
  verificaVencedor();
}
function desenhaJogadores() {
  textSize(40);
  for (let i = 0; i < quantidade; i++) {
    text(jogador[i], xjogador[i], yjogador[i]);
  }

  //text(jogador[1], xjogador[1], yjogador[1]);
  // text(jogador[2], xjogador[2], yjogador[2]);
}

  function desenhaLinhaChegada() {
  fill("white");
  rect(0,350, 600, 10);
  fill("rgb(79,218,34)");
  //for (let yAtual = 0; yAtual < 400; yAtual += 20) {
   // rect(340, yAtual, 10, 10);
  //}

}
function verificaVencedor() {
  for (let i = 0; i < quantidade; i++) {
    if (yjogador[i] > 300) {
      fill ("#F0DA12");
      text(jogador[i] + "viva a conexão campo cidade!!", 50, 200, 300);
      noLoop();
    }
  }
}

let teclas = ["a", "s", "d", "f"];
function keyReleased() {
  for (let i = 0; i < quantidade; i++) {
    if (key === teclas[i]) {
      yjogador[i] += random(20);
    }
  }
}
