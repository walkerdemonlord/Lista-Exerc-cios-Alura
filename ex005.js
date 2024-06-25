let saldoDisponivel = 1000;
let multiplicador = 2;
let resultado = saldoDisponivel*multiplicador;

document.querySelector('h1').innerHTML = `O resultado de ${saldoDisponivel} x ${multiplicador} é: `;
document.querySelector('h2').innerHTML = `Resultado: ${resultado}`;