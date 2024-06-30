let numero = parseInt(prompt('Digite um número: '));
let contagemAcrescida = 0;

while ( contagemAcrescida <= numero) {
    console.log(contagemAcrescida);
    contagemAcrescida++;
}


/*document.addEventListener('DOMContentLoaded', function() {
    let numero = parseInt(prompt('Digite um número: '));
    let contagemAcrescida = 0;
    let listaNumeros = document.getElementById('numeros-lista');

    while (contagemAcrescida <= numero) {
        let itemLista = document.createElement('li');
        itemLista.textContent = contagemAcrescida;
        listaNumeros.appendChild(itemLista);
        contagemAcrescida++;
    }
});
*/