// Cálculo de Média de Notas: Peça ao usuário que insira 4 notas (de 0 a 10). Calcule a média das notas e exiba o resultado. Se a média for maior ou igual a 7, exiba "Aprovado". Caso contrário, exiba "Reprovado".

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function notaFinal(nota1, nota2) {
    let = nota = nota1 + nota2 /2;
    
    if (nota >= 7) {
        return "Aprovado";
    } else if (nota < 7){
        return "Reprovado";
    }
}

rl.question("Digite a sua nota: ", (nota1) => {
    rl.question("Digite a sua outra nota: ", (nota2) => {
 
        nota1 = parseFloat(nota1);
        nota2 = parseFloat(nota2);


        let resultado = notaFinal(nota1, nota2);
        console.log("media:", resultado);

        rl.close();
    });
});

