"use strict";

// Questão 14:

async function buscarcep() {
    let cep = document.querySelector("#cep").value;
    let enderecoAPI = `https://viacep.com.br/ws/${cep}/json/`;
    let resposta = await fetch(enderecoAPI);
    let objJS = await resposta.json();
    let respostaParagrafo = document.createElement("p");
    respostaParagrafo.innerText = `Cep informado: ${objJS.cep} | Cidade: ${objJS.localidade}`;
    document.querySelector("#reposta-cep").appendChild(respostaParagrafo);
}