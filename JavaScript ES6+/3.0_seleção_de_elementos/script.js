// Seleção de elementos DOM 2

const primeiraUl = document.querySelector('ul')
console.log(primeiraUl);


// HTMLCollection vs NodeList 
// A diferença está nos métodos e propriedades de ambas. Além disso a NodeList
// retorna com querySelectorAll é estática

const gridSectionHTML = document.getElementsByClassName('grid-section');
const gridSectionNode = document.querySelectorAll('.grid-section');

primeiraUl.classList.add('grid-section')

console.log(gridSectionHTML);
console.log(gridSectionNode);

// HTMLCollection vs NodeList são array-like, parecem uma array mas não são.
// O método de Array forEach() por exemplo, existe apenas no NodeList

// Método Array forEach() com NodeList
const gridSection = document.querySelectorAll('.grid-section');

gridSection.forEach(function(item, index, array){
  item.classList.add('azul');
  console.log(index); // index do item na array
  console.log(array); // o array completo
  });


// Para transformar array-like em uma Array real, utilizando médoto
// Array.from(gridSection)
const arrayGrid = Array.from(gridSectionHTML);
// Exemplo, um método de array é o pop() - exclui o último e retorna
// Testar no Console arrayGrid.pop() 

// ↑ ↑ ↑
// Agr é possível utilizar forEach() no arrayGrid que era nosso um HTMLCollection
arrayGrid.forEach(function(item){
  console.log(item);
})

// Exercícios 

// RETORNAR NO CONSOLE TODAS AS IMAGENS DO SITE
const todasImg = document.getElementsByTagName('img')
console.log(todasImg);

// RETORNAR NO CONSOLE APENAS AS IMAGENS QUE COMEÇAM COM A PALAVRA IMAGEM
const imagensAnimais = document.querySelectorAll('img[src^="img/imagem"]');

// SELECIONE TODOS AS LINHAS INTERNAS (ONDE HREF COMEÇA COM #)
const linksInterno = document.querySelectorAll('[href^="#"]');

// SELECIONA O PRIMEIRO H2 DENTRO DE .ANIMAIS-DESCRICAO
const h2Principal = document.querySelector('.animais-descricao h2');
const h2Outro = h2Principal.querySelector('h2');  

// SELECIONA O ÚLTIMO P DO SITE
const ultimoP = document.querySelector('.copy p'); 

// propriedade length chamada no array like - nodelist
const paragrafos = document.querySelectorAll('p') 

console.log(paragrafos[paragrafos.length - 1])
// console.log(paragrafos[paragrafos.length - 1]) - Outra forma de acessar o último item


