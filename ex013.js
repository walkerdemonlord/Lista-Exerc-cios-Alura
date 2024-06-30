let pontuação = prompt("Qual sua pontuação no jogo? ");

if (pontuação >= 100) {
    document.querySelector('h1').innerHTML = 'Parabéns, você venceu!';
} 

if (pontuação < 100) {
    document.querySelector('h2').innerHTML = 'Você perdeu. Tente novamente!';
}

else {
    document.querySelector('p.parágrafo').innerHTML = pontuação + ' não é uma pontuação.';
}