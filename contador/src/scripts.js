const painelNumero = document.querySelector('.number-painel');
let number = 0;

function incrementar() {
    number++
    painelNumero.innerHTML = number;
    if (number >= 0) {
        painelNumero.style.color = 'white';
    }
}

function decrementar() {
    number--
    painelNumero.innerHTML = number;
    if (number < 0) {
        painelNumero.style.color = 'red';
    }
}




