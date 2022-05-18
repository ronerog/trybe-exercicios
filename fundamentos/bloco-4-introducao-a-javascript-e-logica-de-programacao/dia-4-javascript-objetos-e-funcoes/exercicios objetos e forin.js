// exercicio 1

let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

console.log('Bem-vinda, ' + info.personagem + '!')

// exercicio 2

info['recorrente'] = 'Sim'

console.log(info)

// exercicio 3

for(let key in info) {
  console.log(key)
}

// exercicio 4

for(let key in info) {
  console.log(info[key])
}

// exercicio 5

info['personagem'] = 'Margarida e Tio Patinhas'
info['origem'] = "Pato Donald e Christmas on Bear Mountain, Dell's Four Color Comics #178"
info['nota'] = 'Namorada do personagem principal nos quadrinhos do Pato Donald e O último MacPatinhas'
info['recorrente'] = 'Sim'

for(let key in info) {
  console.log(info[key])
}

// exercicio 6

let leitor = {
  nome: 'Julia',
  sobrenome: 'Pessoa',
  idade: 21,
  livrosFavoritos: [
    {
      titulo: 'O Pior Dia de Todos',
      autor: 'Daniela Kopsch',
      editora: 'Tordesilhas',
    },
  ],
};

console.log('O livro favorito de Julia Pessoa se chama ' + leitor.livrosFavoritos[0].titulo)

// exercicio 7

leitor.livrosFavoritos.push({
  titulo: 'Harry Potter e o Prisioneiro de Azkaban',
  autor: 'JK Rowling',
  editora: 'Rocco',
});

console.log(leitor)

//exercicio 8

console.log(leitor.nome + ' tem 2 livros favoritos: ' + leitor.livrosFavoritos[0].titulo + ' e ' + leitor.livrosFavoritos[1].titulo)