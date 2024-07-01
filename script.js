function increase()
{
    contagem += 1;
    display.textContent = contagem;
}

function decrement()
{
    contagem -= 1;
    display.textContent = contagem;
}

function zera()
{
    contagem = 0;
    display.textContent = contagem;
}

const display = document.getElementById("numero");
const aumenta = document.getElementById("aumentar");
const diminui = document.getElementById("diminuir");
const resetar = document.getElementById("reset");
let contagem = 0;
aumenta.onclick = increase;
diminui.onclick = decrement;
resetar.onclick = zera;
