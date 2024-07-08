function calcQuadrado() {
    const numero = document.getElementById('quadrado').value;
    const resultado = numero ** 2;
    const paragrafo = document.querySelector('.hidden2');
    paragrafo.textContent = `O quadrado de ${numero} é ${resultado}`;
    paragrafo.classList.remove('hidden2');
}
