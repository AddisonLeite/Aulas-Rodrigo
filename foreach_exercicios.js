/*
===========================================================
Exercícios Práticos - forEach
===========================================================
*/

// 1. Crie um array com 5 nomes e exiba cada nome no console usando forEach.
const nomes = ["Ana", "Bruno", "Carlos", "Diana", "Eduardo"];

nomes.forEach(nome => {
  console.log(nome);
});
// 2. Crie um array com números e exiba o dobro de cada um usando forEach.
const numeros = [2, 5, 8, 10];

numeros.forEach(numero => {
  console.log(numero * 2);
});
// 3. Crie um array com frutas e exiba a posição (índice) de cada fruta usando forEach.
const frutas = ["Maçã", "Banana", "Morango", "Uva"];

frutas.forEach((fruta, indice) => {
  console.log(`Fruta: ${fruta}, Posição: ${indice}`);
});
// 4. Some todos os números de um array usando forEach e exiba o resultado.
const numeros2 = [10, 20, 30, 40, 50];
let soma = 0;

numeros2.forEach(numero => {
  soma += numero;
});

console.log("A soma total é:", soma);
// 5. Conte quantas palavras em um array possuem mais de 5 letras usando forEach.
const palavras = ["Olá", "Mundo", "JavaScript", "programação", "sol"];
let contador = 0;

palavras.forEach(palavra => {
  if (palavra.length > 5) {
    contador++;
  }
});

console.log("Número de palavras com mais de 5 letras:", contador);
// 6. Crie um array de objetos (nome, idade) e exiba apenas os nomes usando forEach.
const pessoas = [
  { nome: "Julia", idade: 25 },
  { nome: "Pedro", idade: 30 },
  { nome: "Sofia", idade: 22 }
];

pessoas.forEach(pessoa => {
  console.log(pessoa.nome);
});
// 7. Crie um array de preços e exiba apenas os que forem maiores que 50 usando forEach.
const precos = [25.50, 75.00, 49.99, 120.30, 50.00];

precos.forEach(preco => {
  if (preco > 50) {
    console.log(preco);
  }
});
// 8. Crie um array de strings e exiba todas em letras maiúsculas usando forEach.
const strings = ["web", "desenvolvimento", "front-end"];

strings.forEach(str => {
  console.log(str.toUpperCase());
});
// 9. Crie um array de números e exiba apenas os pares usando forEach.
const numeros4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

numeros4.forEach(numero => {
  if (numero % 2 === 0) {
    console.log(numero);
  }
});
// 10. Crie um array de notas e exiba “Aprovado” para notas >= 7 e “Reprovado” para as demais usando forEach.
const notas = [8.5, 6.0, 9.2, 5.5, 7.0];

notas.forEach(nota => {
  if (nota >= 7) {
    console.log("Aprovado");
  } else {
    console.log("Reprovado");
  }
});