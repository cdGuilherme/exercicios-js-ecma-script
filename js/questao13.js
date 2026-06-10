"use strict";

// Questão 13:

// let mapIdInd = idades.map((idade, index) => {
//     if (idade > 10)
//     return index;
// });

let idades = [1, 2, 3, 10, 11, 20, 30, 40, 50];

let mapIdInd = [];

function indexIdades(arrayDestino, arrayAtual) {
    for (let index = 0; index < arrayAtual.length; index++) {
        let idade = arrayAtual[index];
        if (idade > 10) {
            arrayDestino.push(index);
        } else {
            arrayDestino.push(undefined);
        }
    }
}

indexIdades(mapIdInd, idades);

function questao13() {
    console.log(mapIdInd);
    alert(`Resultado exibido no console:\n${mapIdInd}`);
}