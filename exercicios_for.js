/*
===========================================================
Exercícios Práticos - For
===========================================================
*/

// 1. Use um for para imprimir números de 1 a 10.
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// 2. Use um for para imprimir números pares de 0 a 20.
for (let a=0; a<=20; a += 20){
    console.log(a)
}

// 3. Use um for para imprimir números ímpares de 1 a 15.
for (let b= 1; b <= 15; b += 2){
    console.log(b)
}

// 4. Calcule a soma dos números de 1 a 100 usando for.
let soma = 0;
for (let c = 1; c <= 100; c++) {
    console.log ("A soma dos números de 1 a 100 é:", soma)
}

// 5. Crie um array com 5 frutas e percorra com for exibindo cada uma.
const frutas = ["Maça", "Uva", "Pera", "Morango", "Banana"];
for (let d = 1; i < frutas.length; i++){
    console.log(frutas[d]);
}

// 6. Crie um for que mostre a tabuada do 7.
const numero = 7;
for (let e = 1; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`);
}

// 7. Use um for para percorrer uma string e exibir cada caractere.
const texto = "Olá, mundo!";
for (let i = 0; i < texto.length; i++) {
  console.log(texto[i]);
}

// 8. Use um for decrescente para contar de 10 até 1.
for (let i = 10; i >= 1; i--) {
  console.log(i);
}

// 9. Peça para o aluno prever o resultado:
// for (let i = 0; i < 5; i++) {
//   console.log("i =", i);
// }


// 10. Crie um for que calcule o fatorial de 5.
let fatorial = 1;
const numeroFatorial = 5;
for (let i = 1; i <= numeroFatorial; i++) {
  fatorial *= i;
}
console.log(`O fatorial de ${numeroFatorial} é:`, fatorial);
