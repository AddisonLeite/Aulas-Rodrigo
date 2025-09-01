/*
===========================================================
Exercícios Práticos - While
===========================================================
*/

// 1. Use um while para imprimir números de 1 a 10.
let numero = 1;
while (numero <= 10) {
  console.log(numero);
  numero++; }
// 2. Use um while para imprimir números pares até 20.
let numero2 = 2;
while (numero <= 20) {
  console.log(numero);
  numero += 2;
}
// 3. Some números de 1 a 100 usando while.
let contador = 1;
let soma = 0;
while (contador <= 100) {
  soma += contador;
  contador++;
}
console.log("A soma dos números de 1 a 100 é:", soma);

// 4. Crie um while que conte de 10 até 1.
let contador2 = 10;
while (contador2 >= 1) {
  console.log(contador2);
  contador2--;}

// 5. Crie um while que peça senha até ser igual a "1234".
let senha = "";
while (senha !== "1234") {
  senha = prompt("Digite a senha:");
  if (senha !== "1234") {
    alert("Senha incorreta. Tente novamente.");
  }
}
alert("Senha correta! Bem-vindo.");

// 6. Crie um while que calcule a tabuada do 5.
let multiplicador = 1;
const numero3 = 5;
while (multiplicador <= 10) {
  let resultado = numero3 * multiplicador;
  console.log(`${numero3} x ${multiplicador} = ${resultado}`);
  multiplicador++;
}

// 7. Crie um while que exiba os caracteres da string "JavaScript".
let texto = "JavaScript";
let indice = 0;
while (indice < texto.length) {
  console.log(texto[indice]);
  indice++;
}

// 8. Use while para calcular o fatorial de 5.
let numero4 = 5;
let fatorial = 1;
let contador3 = 1;
while (contador3 <= numero4) {
  fatorial *= contador3;
  contador3++;
}
console.log(`O fatorial de ${numero4} é: ${fatorial}`);

// 9. Peça para o aluno prever o resultado:
// let i = 0;
// while (i < 3) {
//   console.log(i);
//   i++;
// }


// 10. Crie um while que só termina quando um número aleatório for 7.
let numeroAleatorio;
let tentativas = 0;

while (numeroAleatorio !== 7) {
  numeroAleatorio = Math.floor(Math.random() * 10) + 1; // Gera um número entre 1 e 10
  tentativas++;
  console.log(`Tentativa ${tentativas}: O número gerado foi ${numeroAleatorio}.`);
}

console.log(`\nO número 7 foi encontrado após ${tentativas} tentativa(s)!`);