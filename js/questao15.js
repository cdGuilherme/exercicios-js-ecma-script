"use strict";

// Questão 15:

function questao15() {
    let quantidade = Number(document.querySelector("#quantidade").value);
    let valorUnit = Number(document.querySelector("#valor").value);
    let total = quantidade * valorUnit;
    total = total.toFixed(2);
    let resultadoParagrafo = document.createElement("p");
    resultadoParagrafo.innerText = `(Quantidade: ${quantidade}) x (Valor Unitário: ${valorUnit}) = (Total: ${total})`;
    document.querySelector("#resposta-valor-total").appendChild(resultadoParagrafo);
}