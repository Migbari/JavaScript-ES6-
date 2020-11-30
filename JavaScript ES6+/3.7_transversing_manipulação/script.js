// Transversing e Manipulação - 1

// Propriedades que retornam uma string contendo o html ou texto. // É possível atribuir um novo valor para as mesmas

element.innerText = 'Novo Texto'

const menu = document.querySelector('.menu')

menu.outerHTML; // todo o html do elemento
meno.innerHTML; // html interno
menu.innerText; // texto, sem tags 

menu.innerText = '<p>Texto</p>' //
menu.innerHTML = '<p>Texto</p>' // passa string = substitui


// Seleciona h1 site ANIMAIS FANTASTICOS
const h1= document.querySelector('h1')

// Seleciona ul .animais lista
const animaisLista = document.querySelector('.animais-descricao');


// Traz os <li> dentro de ul .animais lista
animaisLista.innerHTML 


// Substitui para Novo título e coloca tag <p> dentro de h1
h1.innerHTML = '<p>Novo título</p>'

// Substitui para Novo título e também a tag <h1> para <p>
h1.outerHTML = '<p>Novo título</p>'

// Transversing - Como navegação pelo DOM 6:24
// Como navegar pelo DOM, utilizando suas propriedades e métodos

// retorna <ul>
const lista = document.querySelector('.animais-lista')

// <section> que envolve a <ul> acima
lista.parentElement; 

// <body> que envolve <section> acima 
lista.parentElement.parentElement; 

// <div class="animais-descricao"> - como próximo elemento
lista.nextElementSibling;

// <h1> como elemento anterior
lista.previousElementSibling;

// <li> como elementos filhos de <ul>
lista.children 

// Como retorna HTMLCollection, podemos acessar pelo indice 
lista.children[0]

// último filho 
// lista.children[lista.children.length-1]; 
// lista.children[--lista.children.length]; 

// outra maneira 
lista.querySelectorAll('li'); // todas as LI's
lista.querySelector('li:last-child'); // último filho



// Element vs Node
// Element's represetam um elemento html, ou seja, uma tag. 
// Node representa um nó, e pode ser um elemento (Element), texto,
// comentário, quebra de linha e mais.

lista.FirstChild; // primeiro node child

list.childNodes; // todos os node child 

// Geralmente estamos atrás de um elemento e não de qualquer node em si