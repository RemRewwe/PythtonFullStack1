let preco = 150.0;
let desconto = 20;
let precoFinal = preco - (preco * desconto / 100);
console.log("Preço final após desconto:", precoFinal);

let peso = 70;
let altura = 1.75;
let imc = peso / (altura ** 2);
console.log("Seu IMC é:", imc);

let idade = 22;
let temExperiencia = true;
let elegivel = idade >= 18 && temExperiencia;
console.log("Elegível para o concurso?", elegivel);

let nivelAcesso = 2;
if (nivelAcesso === 3) {
    console.log("Acesso total");
} else if (nivelAcesso === 2) {
    console.log("Acesso parcial");
} else {
    console.log("Acesso restrito");
}

let celsius = 79;
let fahrenheit = (celsius * 9/5) + 32;
console.log("Temperatura em Fahrenheit:", fahrenheit);

let numero = 7;
if (numero % 2 === 0) {
    console.log("O número é par");
} else {
    console.log("O número é ímpar");
}

let peso2 = 8;
let frete;
if (peso2 <= 5) {
    frete = 10.0;
} else if (peso2 <= 10) {
    frete = 20.0;
} else {
    frete = 30.0;
}
console.log("Valor do frete:", frete);
