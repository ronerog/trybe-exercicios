// programa 1 PLUS - adição: Perímetro de um retangulo, quadrado ou triangulo

let forma = 'triangulo'
let lado1 = 8
let lado2 = 6
let lado3 = 5
let lado4 = 0

let soma = ''

switch (forma) {
    case 'triangulo':
        soma = lado1 + lado2 + lado3;
       break;
    
    case 'quadrado':
        soma = lado1 + lado2 + lado3 + lado4
        break;

    case 'retangulo':
        soma = lado1 + lado2 + lado3 + lado4
}

console.log('O perímetro do ' + forma + ' é: ' + soma)


// programa 2 - subtração: Programa para calcular a 

let tipoDeAtenuante = 'menoridade'
let valorDaPenaEmAnos = 10 
const valorDaAtenuante = 1/6
let novaPena = 0
let sub = valorDaPenaEmAnos * 1/6

switch (tipoDeAtenuante) {

    case 'menoridade':
    novaPena = valorDaPenaEmAnos - sub
}

console.log('O novo valor da pena é: ' + novaPena + ' anos.')


// Exercicio1 soma - subtração - multiplicação - divisão = módulo

let a = 10
let b = 5

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

// Exercicio 2 - >

 let a2 = 10
 let b2 = 5

if (a2 > b2){
    console.log(a2 + ' é maior que ' + b2);
  }else {
    console.log(b2 + ' é maior que ' + a2);
  }


//Exercicio 3 - >

const a3 = 10
const b3 = 3
const c = 5

if (a3 > b3 && a3 > c) {
    console.log(a3 + ' é maior que ' + b3 + ' e ' + c);
  } else if (c > b3 && c > a3) {
    console.log(c + ' é maior que ' + b3 + ' e ' + a3);
  } else {
    console.log(b3 + ' é maior que ' + c + ' e ' + a3);
  }

//Exercicio 4 - positivo e negativo

const valor = 2

if (valor > 0) {
  console.log('O numero é positivo');
} else if (valor < 0) {
  console.log('O numero é negativo');
} else {
  console.log('O numero é zero');
}

//Exercicio 5 - operadores e booleanos

const angulo1 = 50;
const angulo2 = 70;
const angulo3 = 60;

if ((angulo1 + angulo2 + angulo3) === 180) {
  console.log(true);
} else if (angulo1 < 0 || angulo2 < 0 || angulo3 < 0) {
  console.log('angulo negativo');
} else {
  console.log(false);
}

// Exercicio 6 - Xadrez

let peça = 'Rei';
let direçao = piece.toLocaleLowerCase();

switch (result) {
  case 'Rei':
    console.log('1 movimento a cada direção');
    break;
  case 'rainha':
    console.log('Qualquer direção');
    break;
  case 'torre':
    console.log('Em linha reta');
    break;
  case 'bishop':
    console.log('Diagonal');
    break;
  case 'Cavalo':
    console.log('Se movimento em L');
    break;
  case 'peão':
    console.log('Se for o orimeiro movimento: uma ou duas casas para frente. Se for do segundo em diante uma em giagonal');
    break;
  default:
    console.log('FATAL');
}

    //Exercicio 7

const nota = '60%'

if (nota >= '90%') {
  console.log('A');
} else if (nota >= '80%') {
  console.log('B');
} else if (nota >= '70%') {
  console.log('C');
} else if (nota >= '60%') {
  console.log('D');
} else if (nota >= '50%') {
  console.log('E');
} else {
  console.log('F');
}

//Exercicio 8

const c1 = 5;
const c2 = 3;
const c3 = 8;

if (c1 % 2 == 0 || c2 % 2 == 0 || c3 % 2 == 0) {
  console.log(true);
} else {
  console.log(false);
}

//Exercicio 9

if (c1 % 2 !== 0 || c2 % 2 !== 0 || c3 % 2 !== 0) {
  console.log(true);
} else {
  console.log(false);
}
