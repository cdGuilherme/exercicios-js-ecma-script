"use strict";

// Questão 14:

async function buscarcep() {
    let cep = document.querySelector("#cep").value;
    console.log(`Buscando a cidade para o CEP: ${cep}, por favor aguarde!`);
    alert(`Buscando a cidade para o CEP: ${cep}, por favor aguarde!`);
    let enderecoAPI = `https://viacep.com.br/ws/${cep}/json/`;
    let resposta = await fetch(enderecoAPI);
    let objJS = await resposta.json();
    let respostaParagrafo = document.createElement("p");
    respostaParagrafo.innerText = `Cep informado: ${objJS.cep} | Cidade: ${objJS.localidade}`;
    document.querySelector("#reposta-cep").appendChild(respostaParagrafo);
}