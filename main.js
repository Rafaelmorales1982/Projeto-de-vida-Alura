const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");
const contadores = document.querySelectorAll(".contador");
//console.log(botoes);

for (let i = 0; i < botoes.length; i++) {
  botoes[i].onclick = function () {
    for (let j = 0; j < botoes.length; j++) {
      botoes[j].classList.remove("ativo");
      textos[j].classList.remove("ativo");
    }
    botoes[i].classList.add("ativo");
    textos[i].classList.add("ativo");
  };
  
}

const tempoObjetivo1 = new Date("2024-10-05T00:00:00")/**Programar termina o tempo */
let tempoAtual = new Date(); /**Pega o tempo e a data  atual do sistema para subtrair com o tempoObjetivo1*/

contadores[0].textContent = tempoObjetivo1 - tempoAtual;