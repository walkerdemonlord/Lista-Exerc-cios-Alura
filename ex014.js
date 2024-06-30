let saldo = 5000;
let proprietarioDaConta = prompt("Qual é o seu nome? ");

if (proprietarioDaConta === "Walker") {
    saldo = saldo.toFixed(2);
    document.querySelector('p.parágrafo').innerHTML = proprietarioDaConta + ' seu saldo é de: ' + saldo;
} else {
    document.querySelector('p.parágrafo').innerHTML = proprietarioDaConta + ' não está cadastrado.';
}