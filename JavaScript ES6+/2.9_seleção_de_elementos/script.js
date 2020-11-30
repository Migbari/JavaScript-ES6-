// Seleção de elementos DOM 1

// getElementById() Seleciona e retorna elementos DOM

// Seleciona pelo ID
const animaisSection = document.getElementById('animais')
const contatoSection = document.getElementById('contato')

// Retorna null caso não exista 
const naoExiste = document.getElementById('teste')

// Também é possivel efetuar a mesma seleção para 
// classes ou Tags

// Seleciona pela classe, retorna uma HTMLCollection
const gridSection = document.getElementsByClassName('grid-section')
const contato = document.getElementsByClassName('grid-section contato')

// Seleciona todas as UL's, retorna uma HTMLCollection
const ul = document.getElementsByTagName('ul')

// Retorna o primeiro elemento
console.log(gridSection[0]);



// Seletor Geral Único
// querySelector retorna o primeiro elemento que combinar com o seu seletor CSS.

// 1º elemento com animais
const animais = document.querySelector('.animais');   

// retorna Id contato 
const contatos = document.querySelector('#contato');  

// retorna último li
const ultimoItem = document.querySelector('.animais-lista li:last-child');

// retorna link interno. [href="#"]. Símbolo ^ = começa com...
const linksInternos = document.querySelectorAll('[href^="#"]');

// retorna link externo. [href="https://"]. Símbolo ^ = começa com...
const linksExternos = document.querySelector('[href^="https://"]'); 

// retorna 1º elemento ul
const primeiroUl = document.querySelector('ul');

// Busca dentro do Ul apenas 
const navItem = primeiroUl.querySelector('li');


