let tabuleiro = [
    ['Água', 'Água', 'Água', 'Navio', 'Água'],
    ['Água', 'Navio', 'Água', 'Água', 'Água'],
    ['Água', 'Água', 'Água', 'Navio', 'Água'],
    ['Água', 'Navio', 'Água', 'Água', 'Água'],
    ['Água', 'Água', 'Água', 'Navio', 'Água']
];


function atirar(linha, coluna) {
    if (tabuleiro[linha][coluna] === 'Navio') {
        console.log('Você acertou um navio!');
        tabuleiro[linha][coluna] = 'Acerto';
    } else {
        console.log('Você atingiu a água.');
        tabuleiro[linha][coluna] = 'Erro';
    }
}

atirar(0, 3);
atirar(3, 5);
atirar(2, 3);
atirar(4, 1);