// 1

let matriz1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

let matriz2 = [
    [1, 1, 1],
    [1, 1, 1],
    [1, 1, 1]
];

function somarMatrizes(matriz1, matriz2) {
    let resultado = [];
    for (let i = 0;  i < 3; i++) {
        let resultado2 = [];
        for (let j = 0; j < 3; j++) {

            resultado2.push(matriz1[i][j] + matriz2[i][j]);
        }
        resultado.push(resultado2)
    }

    return resultado;
}

let somaFinal = somarMatrizes(matriz1, matriz2);
console.log(somaFinal);
