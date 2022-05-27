let father = document.getElementById('pai')
let section = document.createElement('section')
father.appendChild(section)

section.classList.add('Irmao')

let here = document.getElementById('elementoOndeVoceEsta')
let soon = document.createElement('h1')
here.appendChild(soon)

soon.classList.add('filho1')

let text = document.getElementsByClassName('filho1')
for ( i of text) {
    text[0].innerText = 'Olá'
}

let neto = document.getElementById('primeiroFilhoDoFilho')
let bisneto = document.createElement('div')
neto.appendChild(bisneto)

bisneto.id = 'bisneto'

let bis = document.getElementById('bisneto')
bis.innerText = 'Sou o bisneto'

console.log(bis.parentNode.parentNode.nextElementSibling)

//REMOVEa