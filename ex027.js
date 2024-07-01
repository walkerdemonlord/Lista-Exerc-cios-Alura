let numero = parseFloat(prompt('Digite um número: '));
let mensagem = '';

if (isNaN(numero)) {
    mensagem = 'Por favor, digite um número válido.';
} else if (numero === 0) {
    mensagem = 'O número é zero.';
} else if (numero < 0) {
    mensagem = `O número ${numero} é negativo.`;
} else {
    mensagem = `O número ${numero} é positivo.`;
}

console.log(mensagem);
document.querySelector('h2').innerHTML = mensagem;
