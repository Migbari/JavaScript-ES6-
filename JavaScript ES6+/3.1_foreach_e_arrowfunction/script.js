// ForEach e Arrow Function

// Constantemente vamos selecionar uma lista de itens do dom. A melhor forma para interagirmos com os mesmo é utilizando 
// o método forEach

// Retorna NodeList 
// Primeiro parãmetro é SEMPRE o callback - função ativada em cada item
const imgs = document.querySelectorAll('img');
imgs.forEach(function(item){
 console.log(item);
});

// forEach é um método de array-like. Caso não seja array-like, é possível transformá-los em array

// HTMLCollection
const titulos = document.getElementsByClassName('titulo'); 
const titulosArray = Array.from(titulos);

// Array
titulosArray.forEach(function(item){
console.log(item);
});

// Arrow Funcion - Trata-se de uma abreviação da palavra function. Basta adicionar => após os argumentos.

const foto = document.querySelectorAll('img');
foto.forEach((item) => {
 console.log(item);
});

// Argumento único não precisa de parênteses 
foto.forEach( item => {
  console.log(item);
});  
// ↓ ↑ 
// Quando há uma linha de código, é possível tirar as chaves 
foto.forEach( item => console.log(item));

// Multiplos argumentos precisa 
foto.forEach( (item, index) => {
  console.log(item, index);
 });

// Sem argumento precisa dos parênteses
let i = 0;
 foto.forEach( () => {
  console.log(i++);
 });
 // foto3.forEach(() => console.log(i++));

 // EXERCÍCIO

// Mostre no console cada paragrafo do site 
const paragrafos = document.querySelectorAll('p');

// Mostre o texto dos parágragos 
paragrafos.forEach((item) => {
  console.log(item.innerText); 
});

