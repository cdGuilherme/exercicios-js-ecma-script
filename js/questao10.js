"use strict";

// Questão 10a:
function questao10a() {
    let x = Number(prompt("Digite o valor X:"));
    let y = Number(prompt("Digite o valor Y:"));
    let resultado = Math.pow(x, y);
    console.log(`${x}^${y} = ${resultado}`);
    alert(`Resultado exibido no console:\n${x}^${y} = ${resultado}`);
}

// Questão 10b:
function questao10b() {
    let array = [];
    array[0] = Number(prompt("Digite o primeiro valor da array:"));
    array[1] = Number(prompt("Digite o segundo valor da array:"));
    array[2] = Number(prompt("Digite o terceiro valor da array:"));
    let resultado = Math.min(...array);
    console.log(`O menor valor digitado é: ${resultado}`);
    alert(`Resultado exibido no console:\nO menor valor digitado é: ${resultado}`);
}

// Questão 10c:
let dados = {
    marca: "HP",
    modelo: "V15",
    config: {
        memoria: 8,
        processador: "i7"
    },
    entradas: [1, 2, 3]
};

// Questão 10c1:
function questao10c1() {
    let { modelo, config: { processador } } = dados;
    console.log(`Valor da variável modelo: ${modelo}\nValor da variável processador: ${processador}`);
    alert(`Console:\nValor da variável modelo: ${modelo}\nValor da variável processador: ${processador}`);
}

// Questão 10c2:
function questao10c2() {
    let { modelo, config: { processador } } = dados;
    modelo = "V20";
    processador = "i9";
    console.log(`Valor da variável modelo: ${modelo}\nValor da variável processador: ${processador}`);
    alert(`Console:\nValor da variável modelo: ${modelo}\nValor da variável processador: ${processador}`);
}

// Questão 10c3:
function questao10c3() {
    console.log(`Marca do equipamento: ${dados.marca}\nProcessador: ${dados.config.processador}\nSegundo elemento do array entradas: ${dados.entradas[1]}`);
    alert(`Console:\nMarca do equipamento: ${dados.marca}\nProcessador: ${dados.config.processador}\nSegundo elemento do array entradas: ${dados.entradas[1]}`);
}

// Questão 10d:
dados.exibir = function () {
    alert(`O equipamento é um ${dados.marca} ${dados.modelo} com processador ${dados.config.processador}`);
}
function questao10d() {
    dados.exibir();
}

// Questão 10e:
let novoEquip = {
    ...dados,
    valorVenda: 1600.00,
    qtdEstoque: 8
}