/*
===========================================================
Exercícios Práticos - Do...While
===========================================================
*/

// 1. Use do...while para imprimir números de 1 a 5.
let numero = 1;
do {
  console.log(numero);
  numero++;
} while (numero <= 5);

// 2. Use do...while para pedir senha até ser "1234".
let senha;
do {
  senha = prompt("Digite a senha:");
  if (senha !== "1234") {
    alert("Senha incorreta. Tente novamente.");
  }
} while (senha !== "1234");
alert("Senha correta! Bem-vindo.");

// 3. Use do...while para imprimir pares até 20.
let numero2 = 2;
do {
  console.log(numero2);
  numero2 += 2;
} while (numero2 <= 20);

// 4. Use do...while para exibir uma mensagem pelo menos uma vez, mesmo que a condição seja falsa.
let condicao = false;
do {
  console.log("Esta mensagem será exibida pelo menos uma vez.");
} while (condicao);

// 5. Crie um do...while que conte de 10 até 1.
let contador = 10;
do {
  console.log(contador);
  contador--;
} while (contador >= 1);

// 6. Crie um do...while que exiba os caracteres de uma string.
let texto = "Hello";
let indice = 0;
do {
  console.log(texto[indice]);
  indice++;
} while (indice < texto.length);

// 7. Use do...while para calcular soma de 1 a 100.
let contador2 = 1;
let soma = 0;
do {
  soma += contador2;
  contador2++;
} while (contador2 <= 100);
console.log("A soma dos números de 1 a 100 é:", soma);

// 8. Use do...while para gerar números aleatórios até sair 0.
let numeroAleatorio;
let tentativas = 0;
do {
  numeroAleatorio = Math.floor(Math.random() * 11); // Gera um número entre 0 e 10
  tentativas++;
  console.log(`Tentativa ${tentativas}: O número gerado foi ${numeroAleatorio}.`);
} while (numeroAleatorio !== 0);
console.log(`\nO número 0 foi encontrado após ${tentativas} tentativa(s)!`);

// 9. Peça para o aluno prever o resultado:
// let i = 0;
// do {
//   console.log(i);
//   i++;
// } while (i < 3);


// 10. Crie um do...while que calcule o fatorial de 6.
let numero3 = 6;
let fatorial = 1;
let contador3 = 1;

if (numero3 === 0) {
  fatorial = 1;
} else {
  do {
    fatorial *= contador3;
    contador3++;
  } while (contador3 <= numero3);
}
console.log(`O fatorial de ${numero3} é: ${fatorial}`);