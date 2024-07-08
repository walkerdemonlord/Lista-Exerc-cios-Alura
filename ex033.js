function calcularMedia(a, b, c) {
    return (parseFloat(a) + parseFloat(b) + parseFloat(c)) / 3;
}

function mostrar() {
    let primeiro = document.querySelector('#primeiro').value;
    let segundo = document.querySelector('#segundo').value;
    let terceiro = document.querySelector('#terceiro').value;
    let resultado = document.querySelector('.resposta');

    let media = calcularMedia(primeiro, segundo, terceiro);
    resultado.innerHTML = `A média dos números é ${media.toFixed(2)}`;
    resultado.parentElement.classList.remove('hidden');
}
