let numero = parseInt(prompt('Digite o número inteiro: '));
let resultado = document.querySelector('h1');

function dobroDoNumero (a) {
    return a * 2;
}

let dobro = dobroDoNumero (numero);
resultado.innerHTML = `O dobro de ${numero} é ${dobro}`;


