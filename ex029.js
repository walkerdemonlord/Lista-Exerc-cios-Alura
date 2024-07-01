let nota1 = parseFloat(prompt("Digite a primeira nota: "));
let nota2 = parseFloat(prompt("Digite a segunda nota: "));
let resultado = "";
const media = ((nota1 + nota2)/2).toFixed(2);

/*
if (media >= 7.00) {
    console.log(`Com ${media} você foi aprovado!`);
} else {
    console.log(`Com ${media} você foi reprovado!`);
}
*/

resultado = media >= 7.00? "Aprovado":"Reprovado";
console.log(resultado);


