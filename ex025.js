let valor1 = parseInt(prompt("Digite o primeiro número: "));
let valor2 = parseInt(prompt("Digite o segundo número: "));

var resultadoSoma = valor1 + valor2;

if (valor2 > valor1) {
    var resultadoSubtração = valor2 - valor1;
} else {
    var resultadoSubtração = valor1 - valor2;
}

console.log(`A soma de ${valor1} e ${valor2} é igual a ${resultadoSoma}.`);
console.log(resultadoSubtração);

document.querySelector('h1').innerHTML = `A soma de ${valor1} e ${valor2} é igual a ${resultadoSoma}.`;
