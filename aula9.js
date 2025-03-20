// arrays em javascript são estruturas de dados que permitem armazenar
let frutas = ["Maçã", "Banana", "Laranja"];
console.log(frutas);

frutas.push("Laranja");
console.log(frutas);

//funções/comandos de Array:

//push: Adiciona um ou mais elementos ao final do array.

//para imprimir o que eu quero na lista eu uso console.log(frutas[numero]) com o 0 sendo o primeiro

//length é o substituto de count no javascript

console.log(frutas.length);

//copy: para copiar um array, podemos usar o método slice

let copiaFrutas = frutas.slice();
console.log(copiaFrutas);

//random: para selecionar um elemento aleatorio de um array

let randomIndex = Math.floor(Math.random() * frutas.length);
console.log(frutas[randomIndex]);

//range: javascript não tem uma função range nativa

function range(start, end) {
    return Array.from({ lenghth: end - start + 1 }, (_, i) => start + i);
}

console.log(range(1, 5));

// asort: em javascript, podemos usar sort() para ordenar arrays

let num = [3, 1, 4, 1, 5, 9];
num.sort((a, b) => a - b);
console.log(num);

//demonstração
let numeros = [5, 3, 8, 1, 9];

//ordenar o array
numeros.sort((a, b) => a - b);
console.log("Ordenado:", numeros);

//adicionar um novo número
numeros.push(7);
console.log ("após push:", numeros);

// selecionar um número aleatório
let randomNum = numeros[Math.floor(Math.random() * numeros.length)];
console.log("Número aleatório:", randomNum);