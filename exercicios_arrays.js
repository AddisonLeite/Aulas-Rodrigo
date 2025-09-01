/*
===========================================================
Exercícios Práticos - Arrays
===========================================================
*/

// 1. Crie um array com 5 elementos e exiba o terceiro.
const mercadorias = ["Arroz", "Feijão", "Óleo","Ovo", "Carne"];
console.log (mercadorias)
// 2. Adicione um elemento ao final do array.
mercadorias.push("Refrigerantes");
console.log (mercadorias);
// 3. Remova o primeiro elemento do array.
mercadorias.shift();
console.log (mercadorias);
// 4. Use map para transformar todos os elementos em strings maiúsculas.
const mercadoriasMaiusculos = mercadorias.map(nome => nome.toUpperCase());
console.log(mercadoriasMaiusculos)
// 5. Use filter para criar um novo array apenas com números pares.
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numerosPares = numeros.filter(numero => numero % 2 === 0);
console.log(numerosPares)
// 6. Use reduce para somar todos os números de um array.
const somaNumeros = numeros.reduce((total, n) => total + n, 0);
console.log(somaNumeros);
// 7. Use find para encontrar o primeiro elemento maior que 10.
const numeros2 = [5, 8, 12, 4, 15, 6];
const primeiroMaiorQueDez = numeros2.find(numero => numero > 10);
console.log(primeiroMaiorQueDez); 
// 8. Ordene um array de números em ordem crescente.
const numerosDesordenados = [40, 1, 5, 200, 10];
numerosDesordenados.sort((a, b) => a - b);
console.log(numerosDesordenados); 
// 9. Inverta a ordem dos elementos de um array.
const letras = ['a', 'b', 'c', 'd'];
letras.reverse();
console.log(letras);
// 10. Faça a troca de valores entre dois índices usando destructuring.
const array = [10, 20, 30, 40, 50];
// Troca os valores dos índices 1 e 3
[array[1], array[3]] = [array[3], array[1]];
console.log(array); 