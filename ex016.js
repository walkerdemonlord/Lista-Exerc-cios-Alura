let numeroSecreto = Math.floor(Math.random()*11);
let numeroTentado = parseInt(prompt("Digite um número entre 1 e 10"));
const i = 1;

console.log(numeroSecreto);

while (numeroTentado !== numeroSecreto) {

    if (isNaN(numeroTentado) || numeroTentado >= 11 || numeroTentado <= 0) {
        numeroTentado = parseInt(prompt('Valor incorreto. Tente novamente: '));
    }
    else if (numeroTentado < numeroSecreto) {
        numeroTentado = parseInt(prompt('O número secreto é maior. Tente novamente: '));
    }
    else if (numeroTentado > numeroSecreto) {
        numeroTentado = parseInt(prompt('O número secreto é menor. Tente novamente: '));
    }

    i++;

}

document.querySelector('h1').innerHTML = `Parabéns, acertou! Você precisou de ${i} tentativas!`;

