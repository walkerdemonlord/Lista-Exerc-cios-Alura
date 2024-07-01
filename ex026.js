let idade = prompt("Digite sua idade: ");

/*

if (idade >= 18) {
    console.log("Você é maior de idade.");
} else {
    console.log("Você é menor de idade.");
}

*/

let verificação = idade >= 18 ? "Maior de Idade":"Menor de Idade";
console.log(verificação);

document.querySelector('h1').innerHTML = `${verificação}`;
