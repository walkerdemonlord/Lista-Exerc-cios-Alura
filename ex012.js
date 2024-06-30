let numero = prompt('Digite qualquer número natural: ');

if (numero > 0) {
    document.querySelector('h1').innerHTML = 'O número ' + numero + ' é positivo.';
}

if (numero < 0) {
    document.querySelector('h2').innerHTML = 'O número ' + numero + ' é negativo.';
}

else {
    document.querySelector('p.parágrafo').innerHTML = 'Esse número é zero!';
}

