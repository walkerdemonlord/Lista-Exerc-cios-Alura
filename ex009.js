let idade = prompt("Qual é a sua idade? ");
let nome = prompt("Qual é o seu nome? ");

document.querySelector('h1').innerHTML = `Olá ${nome}!`;
document.querySelector('h2').innerHTML = `Você tem ${idade} anos de idade`;