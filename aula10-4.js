function somarMatrizes(tarefa1, tarefa2) {
    for (let i = 0; i < matriz1.length; i++) {
        let somaLinha = [];
        for (let j = 0; j < matriz1[i].length; j++) {
            somaLinha.push(matriz1[i][j] + matriz2[i][j]);
        }
        console.log(somaLinha.join(' '));
    }
}

let tarefa1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

let tarefa2 = [
    [9, 8, 7],
    [6, 5, 4],
    [3, 2, 1]
];

somarMatrizes(tarefa1, tarefa2);