//exemplo:
let matriz1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

let matriz2 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(matriz2[1][2]);


for (let i = 0; i < matriz2.length; i++) {
    for (let j = 0; j < matriz2[i].length; j++) {
        console.log(`Elemento na linha ${i}, coluna ${j}: ${matriz2[i][j]}`);
    }
}

//como fazer conta com isso, exemplo: let somaReferencia = matriz[0][0] + matriz[0][1] + matriz[0][2];
//for (let i = 0; i < 3; i++)