// exercicio 1

function verificaPalindromo(nome) {
    if (nome === nome.split('').reverse().join('')) {
        return true
    } else {
        return false
    }
}
console.log(verificaPalindromo('arara'))
console.log(verificaPalindromo('desenvolvimento'));

//exercicio 2

function indiceDoMaior(numeros) {
  let indiceMaior = 0;
  for (let indice in numeros) {
    if (numeros[indiceMaior] < numeros[indice]) {
      indiceMaior = indice;
    }
  }
  return indiceMaior;
}

console.log(indiceDoMaior([2, 3, 6, 7, 10, 1]));

// exercicio 3

function indiceDoMenor(numeros) {
    let indiceMenor = 0;
    for (let indice in numeros) {
      if (numeros[indiceMenor] > numeros[indice]) {
        indiceMenor = indice;
      }
    }
    return indiceMenor;
}

console.log(indiceDoMenor([2, 4, 6, 7, 10, 0, -3]))

// exercicio 4

function maiorNome (nomes) {
    let maior = nomes[0]
    for (let i = 0; i < nomes.length; i++) {
        if (nomes[i].length > maior.length) {
            maior = nomes[i]
        }
    }
    return maior

}

console.log(maiorNome(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']))


//exercicio 5 

function maisRepetido(numeros) {
    let contRepetido = 0;
    let contNumero = 0;
    let indexNumeroRepetido = 0;
    for (let index in numeros) {
      let verificaNumero = numeros[index];
      for (let index2 in numeros) {
        if (verificaNumero === numeros[index2]) {
          contNumero += 1;
        }
      }
      if (contNumero > contRepetido) {
        contRepetido = contNumero;
        indexNumeroRepetido = index;
      }
      contNumero = 0;
    }
    return numeros[indexNumeroRepetido];
}
    console.log(maisRepetido([2, 3, 2, 5, 8, 2, 3]))

    // exercicio 6

    function somaTodosNumeros(numeros) {
        let total = 0;
        for (let index = 1; index <= numeros; index += 1) {
          total = total + index;
        }
        return total;
      }
      console.log(somaTodosNumeros(5))

      // exercicio 7

      function verificaFimPalavra(palavra, fimPalavra) {
        let inversoPalavra = palavra.split('').reverse().join('');
        let inversoFimPalavra = fimPalavra.split('').reverse().join('');
        let result;
      
        for (let index = 0; index < inversoFimPalavra.length; index += 1) {
          if (inversoPalavra[index] !== inversoFimPalavra[index]) {
            result = false;
            break;
          } else {
            result = true;
          }
        }
        
        return result;
      }
      
      console.log(verificaFimPalavra('trybe', 'be')); //true
      console.log(verificaFimPalavra('joaofernando', 'fernan')); //false