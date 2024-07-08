const primeiro = document.getElementById('primeiro');
const segundo = document.getElementById('segundo');
const resposta = document.querySelector('.hidden');
const texto = document.querySelector('.resposta');

function mostrar() {

    const a = parseFloat(primeiro.value);
    const b = parseFloat(segundo.value);

        if (a > b) {
            texto.textContent = `${a} é maior que ${b}`;
            resposta.classList.remove('hidden');
        } else if (b > a) {
            texto.textContent = `${b} é maior que ${a}`;
            resposta.classList.remove('hidden');
        } else {
            texto.textContent = `${a} é igual a ${b}`;
            resposta.classList.remove('hidden');
        }
        
    }