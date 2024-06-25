let nome = prompt("Qual é o seu nome? ")
let idade = prompt("E sua idade? ");

if (idade >= 18) {
    document.querySelector('h1').innerHTML = `Olá ${nome}`;
    document.querySelector('h2').innerHTML = `Você é maior de idade`;
} else {
    document.querySelector('h1').innerHTML = `Olá ${nome}`;
    document.querySelector('h2').innerHTML = `Você é menor de idade`;
}

