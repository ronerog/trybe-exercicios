// O fatorial é representado pelo sinal !
// 4! = 4 x 3 x 2 x 1 = 24

//exercicio 1

let numero = 10;
let fator = 1;

for (let indice = numero; indice > 0; indice -= 1) {
  fator = fator * indice;
}
console.log(fator);

//exercicio 2

let word = 'tryber';
let result = ''

for (let indice = word.length - 1; indice >= 0; indice--) {
    result += word[indice]
}
 console.log(result)

//exercicio 3

// Maior Palavra

let array = ['java', 'javascript', 'python', 'html', 'css']
let tamanhoMaior = ''
let palavra = ''

for (let indice = 0; indice < array.length; indice++) {
        palavra = array[indice]
    if (palavra.length > tamanhoMaior.length) {
        tamanhoMaior = palavra
    }
}   
console.log('A palavra com maior tamanho é: '+ tamanhoMaior)

// Menor palavra

let tamanhoMenor = ''

for (let indice = 0; indice < array.length; indice++) {
        palavra = array[indice]
    if (tamanhoMaior.length > palavra.length) {
        tamanhoMenor = palavra
    }
}   
console.log('A palavra com menor tamanho é: '+ tamanhoMenor)