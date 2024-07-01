let aleatório1 = (Math.random() * 10 + 1).toFixed(2);
let aleatório2 = (Math.random() * 100 + 1).toFixed(2);
let aleatório3 = (Math.random() * 1000 + 1).toFixed(2);

console.log(`Aleatórios foram: ${Math.floor(parseFloat(aleatório1))}; ${aleatório2} e ${aleatório3}.`);
document.querySelector('h1').innerHTML = `Aleatórios foram: ${Math.floor(parseFloat(aleatório1))}; ${aleatório2} e ${aleatório3}.`;

/* Revisão e Correção
Há um pequeno problema: aleatório1 é convertido para uma string ao usar .toFixed(2), e Math.floor não funciona 
corretamente em strings. Uma conversão explícita de volta para número é necessária antes de usar Math.floor.

console.log(`Aleatórios foram: ${Math.floor(parseFloat(aleatório1))}; ${aleatório2} e ${aleatório3}.`);
document.querySelector('h1').innerHTML = `Aleatórios foram: ${Math.floor(parseFloat(aleatório1))}; ${aleatório2} e ${aleatório3}.`;

*/