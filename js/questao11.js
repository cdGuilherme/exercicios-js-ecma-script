"use strict";

// Questão 11a:
let arrayX = [15, 25];
let arrayY = [12, 15, 23, 43];

// Questão 11b:
function questao11b() {
    let yJoin = arrayY.join("-");
    console.log(yJoin);
    alert(yJoin);
}

// Questão 11c:
let arrayZ = [...arrayX, ...arrayY];

// Questão 11d:
function questao11d() {
    let lista = document.querySelector("#questao11d-lista");
    for (const elementoZ in arrayZ) {
        arrayZ[elementoZ] *= 5;
        if (document.querySelector(`#questao11d-lista__item-${elementoZ}`) === null) {
            // Caso não exista um item na lista para o elemento, cria o elemento
            let elementoParagrafo = document.createElement("li");
            elementoParagrafo.id = `questao11d-lista__item-${elementoZ}`;
            elementoParagrafo.innerText = `arrayZ[${elementoZ}]: ${arrayZ[elementoZ]}`;
            lista.appendChild(elementoParagrafo);
        } else {
            // Senão apenas modifique o valor existente
            let elementoParagrafo = document.querySelector(`#questao11d-lista__item-${elementoZ}`);
            elementoParagrafo.innerText = `arrayZ[${elementoZ}]: ${arrayZ[elementoZ]}`;
        }
    }
}

// Questão 11e:
function questao11e() {
    let arrayT = arrayZ.map(function (item) {
        return item * 5;
    });
    console.log(arrayT);
}

// Questão 11f:
function questao11f() {
    let arrayT = arrayZ.map(item => item * 5);
    console.log(arrayT);
}

// Questão 11g:
function questao11g() {
    const arrayZreduce = arrayZ.reduce(function (total, num) {
        return total + num;
    });
    console.log(`${arrayZ.join("+")} = ${arrayZreduce}`);
    alert(`Resultado exibido no console:\n${arrayZ.join("+")} = ${arrayZreduce}`);
}

// Questão 11h:
function questao11h() {
    const valorPesquisa = 15;
    let index = arrayZ.indexOf(valorPesquisa);
    if (index >= 0) {
        console.log(`Valor ${valorPesquisa} encontrado na posição ${index} no array Z`);
        alert(`Resultado exibido no console:\nValor ${valorPesquisa} encontrado na posição ${index} no array Z`);
    } else {
        console.log(`Valor não encontrado`);
        alert(`Resultado exibido no console:\nValor não encontrado`);
    }
}

// Questão 11i:
arrayX.push(0);

// Questão 11j:
function questao11j() {
    console.log(`O array X possui ${arrayX.length} elementos: ${arrayX.join(", ")}`);
    alert(`Resultado exibido no console:\nO array X possui ${arrayX.length} elementos: ${arrayX.join(", ")}`);
}

// Questão 11l:
function questao11l() {
    if (arrayX[0] != undefined) {
        console.log(`Removido o elemento ${arrayX[arrayX.length-1]} do array X`);
        alert(`Resultado exibido no console:\nRemovido o elemento ${arrayX[arrayX.length-1]} do array X`);
        arrayX.pop();
    } else {
        console.log(`Não há mais elementos para remover do array X`);
        alert(`Resultado exibido no console:\nNão há mais elementos para remover do array X`);
    }
}