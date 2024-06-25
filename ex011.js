let diaDaSemana = prompt("Qual o dia da semana? ");

if (diaDaSemana === "Sábado" || diaDaSemana === "Domingo") {
    document.querySelector('h1').innerHTML = 'Bom fim de semana!';
} else {
    document.querySelector('h2').innerHTML = 'Boa semana!';
}