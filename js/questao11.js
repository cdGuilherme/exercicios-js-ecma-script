"use strict";

// Questão 11a:
let arrayX = [15, 25];
let arrayY = [12, 15, 23, 43];
function questao11a() {
    console.log(`array X: [${arrayX.join(", ")}]\narray Y: [${arrayY.join(", ")}]`);
    alert(`Console:\narray X: [${arrayX.join(", ")}]\narray Y: [${arrayY.join(", ")}]`);
}

// Questão 11b:
function questao11b() {
    let yJoin = arrayY.join(" - ");
    console.log(yJoin);
    alert(yJoin);
}

// Questão 11c:
let arrayZ = [...arrayX, ...arrayY];
function questao11c() {
    console.log(`array Z: [${arrayZ.join(", ")}]`);
    alert(`Console:\narray Z: [${arrayZ.join(", ")}]`);
}

// Questão 11d:
function questao11d() {
    let lista = document.querySelector("#questao11d-lista");
    let novaArrayZ = [...arrayZ];
    for (const elementoZ in arrayZ) {
        novaArrayZ[elementoZ] *= 5;
        if (document.querySelector(`#questao11d-lista__item-${elementoZ}`) === null) {
            // Caso não exista um item na lista para o elemento, cria o elemento
            let elementoParagrafo = document.createElement("li");
            elementoParagrafo.id = `questao11d-lista__item-${elementoZ}`;
            elementoParagrafo.innerText = `arrayZ[${elementoZ}]: ${novaArrayZ[elementoZ]}`;
            lista.appendChild(elementoParagrafo);
        } else {
            // Senão apenas modifique o valor existente
            let elementoParagrafo = document.querySelector(`#questao11d-lista__item-${elementoZ}`);
            elementoParagrafo.innerText = `arrayZ[${elementoZ}]: ${novaArrayZ[elementoZ]}`;
        }
    }
}

// Questão 11e:
function questao11e() {
    let arrayT = arrayZ.map(function (item) {
        return item * 5;
    });
    console.log(`arrayT = [${arrayT.join(", ")}]`);
    alert(`Console:\narrayT = [${arrayT.join(", ")}]`);
}

// Questão 11f:
function questao11f() {
    let arrayT = arrayZ.map(item => item * 5);
    console.log(`arrayT = [${arrayT.join(", ")}]`);
    alert(`Console:\narrayT = [${arrayT.join(", ")}]`);
}

// Questão 11g:
function questao11g() {
    const arrayZreduce = arrayZ.reduce(function (total, num) {
        return total + num;
    });
    console.log(`${arrayZ.join("+")} = ${arrayZreduce}`);
    alert(`Console:\n${arrayZ.join("+")} = ${arrayZreduce}`);
}

// Questão 11h:
function questao11h() {
    const valorPesquisa = 15;
    let index = arrayZ.indexOf(valorPesquisa);
    if (index >= 0) {
        console.log(`arrayZ = [${arrayZ.join(", ")}]\nValor ${valorPesquisa} encontrado na posição ${index} no array Z`);
        alert(`Console:\narrayZ = [${arrayZ.join(", ")}]\nValor ${valorPesquisa} encontrado na posição ${index} no array Z`);
    } else {
        console.log(`Valor não encontrado`);
        alert(`Console:\nValor não encontrado`);
    }
}

// Questão 11i:
function questao11i() {
    arrayX.push("ZERO");
    console.log(`Adicionado o valor "ZERO" no final da array X\narrayX = [${arrayX.join(", ")}]`);
    alert(`Console:\nAdicionado o valor "ZERO" no final da array X\narrayX = [${arrayX.join(", ")}]`);
}

// Questão 11j:
function questao11j() {
    console.log(`O array X possui ${arrayX.length} elementos: ${arrayX.join(", ")}`);
    alert(`Console:\nO array X possui ${arrayX.length} elementos: ${arrayX.join(", ")}`);
}

// Questão 11l:
function questao11l() {
    if (arrayX[0] != undefined) {
        console.log(`Removido o elemento ${arrayX[arrayX.length - 1]} do array X`);
        alert(`Console:\nRemovido o elemento ${arrayX[arrayX.length - 1]} do array X`);
        arrayX.pop();
    } else {
        console.log(`Não há mais elementos para remover do array X`);
        alert(`Console:\nNão há mais elementos para remover do array X`);
    }
}