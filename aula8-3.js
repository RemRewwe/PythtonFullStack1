// Cálculo de Média de Notas: Peça ao usuário que insira 4 notas (de 0 a 10). Calcule a média das notas e exiba o resultado. Se a média for maior ou igual a 7, exiba "Aprovado". Caso contrário, exiba "Reprovado".

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function notaFinal(nota1, nota2, nota3, nota4) {
    let = nota = nota1 + nota2 + nota3 + nota4 /2;
    
    if (nota >= 7) {
        return "Aprovado";
    } else if (nota < 7){
        return "Reprovado";
    }
}

rl.question("Digite a sua nota: ", (nota1) => {
    rl.question("Digite a sua outra nota: ", (nota2) => {
        rl.question("Digite a sua outra nota: ", (nota3) => {
            rl.question("Digite a sua outra nota: ", (nota4) => {
 
 
 
 
        nota1 = parseFloat(nota1);
        nota2 = parseFloat(nota2);
        nota3 = parseFloat(nota3);
        nota4 = parseFloat(nota4);


        let resultado = notaFinal(nota1, nota2, nota3, nota4);
        console.log("media:", resultado);

        rl.close();
    });
})})})

function somaParesNoIntervalo() {
    let inicio = parseInt(prompt("Digite o início do intervalo:"));
    let fim = parseInt(prompt("Digite o fim do intervalo:"));
    let soma = 0;
    for (let i = inicio; i <= fim; i++) {
        if (i % 2 === 0) {
            soma += i;
        }
    }
    console.log("Soma dos números pares:", soma);
}

function verificarPalindromo() {
    let texto = prompt("Digite uma palavra ou frase:").toLowerCase().replace(/ /g, "");
    let textoInvertido = texto.split("").reverse().join("");
    if (texto === textoInvertido) {
        console.log("É palíndromo");
    } else {
        console.log("Não é palíndromo");
    }
}

// Chamada da função
verificarPalindromo();

function contarDigitos() {
    let numero = prompt("Digite um número inteiro positivo:");
    if (/^\d+$/.test(numero)) {
        console.log("Número de dígitos:", numero.length);
    } else {
        console.log("Entrada inválida. Digite um número inteiro positivo.");
    }
}

// Chamada da função
contarDigitos();