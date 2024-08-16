let listaDeCompras = [];

function adicionar() {
    let input = document.getElementById('input').value;
    if (input) { // Verifica se o input não está vazio
        listaDeCompras.push(input);
        renderizarLista();
        document.getElementById('input').value = ''; // Limpa o campo de input
    }
}

function renderizarLista() {
    let listaUl = document.getElementById('listaDeCompras');
    listaUl.innerHTML = ''; // Limpa a lista antes de renderizar

    listaDeCompras.forEach(function(item) {
        let li = document.createElement("li");
        li.textContent = item;
        listaUl.appendChild(li);
    });
}
