// 1 - observação: não testem os codigos todos juntos, eu inicialmente queria fazer com que eles não entrassem em conflito, mas como eu tava meio sem tempo eu desisti de
// fazer isso, então caso queiram testar eles testem eles separados

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

// 2

function trocarOrdem(matriz3) {
    let resultado3 = [];

    for (let i = 0; i < 3; i++) {
        resultado3[i] = [];
        for (let j = 0; j < 3; j++) {
            resultado3[i][j] = matriz3[j][i];
        }
    }

    return resultado3;
}

const matriz3 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

const troca = trocarOrdem(matriz3);
console.log(troca);

// 3

function multiplicarMatriz(matriz4, matriz5) {
    let resultado4 = [
        [0, 0],
        [0, 0]
    ];

    for (let i = 0; i < 2; i++) {
        for (let j = 0; j < 2; j++) {
            for (let  k = 0; k < 2; k++) {
                resultado4[i][j] += matriz4[i][k] * matriz5[k][j];
            }
        }
    }

    return resultado4;
}

let matriz4 = [
    [1, 2],
    [3, 4]
];

let matriz5 = [
    [5, 6],
    [7, 8]
];

let resultado4 = multiplicarMatriz(matriz4, matriz5);

console.log(resultado4);

//4 - precisar ser testado novamente e descobrir o problema

// Função para inicializar o tabuleiro
let tabuleiro = [
  [' ', ' ', ' '],
  [' ', ' ', ' '],
  [' ', ' ', ' ']
];


function exibirTabuleiro() {
  console.log(tabuleiro[0].join(' | '));
  console.log('--+---+--');
  console.log(tabuleiro[1].join(' | '));
  console.log('--+---+--');
  console.log(tabuleiro[2].join(' | '));
  console.log('\n');
}

// Função para verificar se alguém venceu
function verificarVencedor() {
  
  for (let i = 0; i < 3; i++) {
    // Verifica linhas
    if (tabuleiro[i][0] !== ' ' && tabuleiro[i][0] === tabuleiro[i][1] && tabuleiro[i][1] === tabuleiro[i][2]) {
      return tabuleiro[i][0];
    }
    // Verifica colunas
    if (tabuleiro[0][i] !== ' ' && tabuleiro[0][i] === tabuleiro[1][i] && tabuleiro[1][i] === tabuleiro[2][i]) {
      return tabuleiro[0][i];
    }
  }

  // Verifica diagonais
  if (tabuleiro[0][0] !== ' ' && tabuleiro[0][0] === tabuleiro[1][1] && tabuleiro[1][1] === tabuleiro[2][2]) {
    return tabuleiro[0][0];
  }
  if (tabuleiro[0][2] !== ' ' && tabuleiro[0][2] === tabuleiro[1][1] && tabuleiro[1][1] === tabuleiro[2][0]) {
    return tabuleiro[0][2];
  }

  return null; // Nenhum vencedor
}

// Função para verificar se o tabuleiro está cheio (empate)
function verificarEmpate() {
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (tabuleiro[i][j] === ' ') {
        return false; // Ainda há espaços vazios
      }
    }
  }
  return true; // Tabuleiro cheio
}

// Função principal para o jogo
function jogar() {
  let jogadorAtual = 'X';
  let vencedor = null;

  while (!vencedor && !verificarEmpate()) {
    exibirTabuleiro();
    const linha = prompt(`Jogador ${jogadorAtual}, escolha a linha (0-2): `);
    const coluna = prompt(`Jogador ${jogadorAtual}, escolha a coluna (0-2): `);

    if (tabuleiro[linha][coluna] === ' ') {
      tabuleiro[linha][coluna] = jogadorAtual;
      vencedor = verificarVencedor();
      jogadorAtual = (jogadorAtual === 'X') ? 'O' : 'X'; // Alterna entre os jogadores
    } else {
      console.log("Essa posição já está ocupada. Tente novamente.");
    }
  }

  exibirTabuleiro();

  if (vencedor) {
    console.log(`Jogador ${vencedor} venceu!`);
  } else {
    console.log("Empate!");
  }
}

jogar();

// 5

function encontrar(matriz, numero) {
  for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
      if (matriz[i][j] === numero) {
        return { linha: i, coluna: j };
      }
    }
  }
  return null; // Se o número não for encontrado
}

const matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

console.log(encontrar(matriz, 3));
console.log(encontrar(matriz, 10));

// 6

function matrizI() {
  let matriz = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
  ];

  for (let i = 0; i < 3; i++) {
    matriz[i][i] = 1;
  }

  return matriz;
}

console.log(matrizI());

// 7

function rotacionarMatriz(matriz) {
  const resultado = [];
  
  for (let i = 0; i < 3; i++) {
    resultado[i] = [];
    for (let j = 0; j < 3; j++) {
      resultado[i][j] = matriz[2 - j][i];
    }
  }

  return resultado;
}

const matrizOriginal = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

const matrizRotacionada = rotacionarMatriz(matrizOriginal);
console.log(matrizRotacionada);

// 8

function somarBordas(matriz) {
  if (matriz.length !== 3 || matriz[0].length !== 3) {
    console.error("A matriz precisa ser 3x3");
    return;
  }

  let soma = 0;
  
  soma += matriz[0][0] + matriz[0][1] + matriz[0][2];
  
  soma += matriz[2][0] + matriz[2][1] + matriz[2][2];
  
  soma += matriz[1][0] + matriz[1][2];
  
  return soma;
}

const matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

console.log(somarBordas(matriz));
