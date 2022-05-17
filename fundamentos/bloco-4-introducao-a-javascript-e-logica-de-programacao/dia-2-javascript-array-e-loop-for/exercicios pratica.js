let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// exercicio 1

for(let number of numbers) {
    console.log(number)
}

//Exercicio 2

let soma= 0;
let numero = 0;

for (let indice = 0; indice < numbers.length; indice=+1) {
  numero = numbers[index];
  soma = numero + soma;
}
console.log(soma);

//Exercicio 3

let valorMedia = 0;

valorMedia = soma / (numbers.length);

console.log(valorMedia);

//Exercicio 4

if (valorMedia > 20) {
    console.log('valor maior que 20');
  } else {
    console.log('valor menor ou igual a 20');
  }