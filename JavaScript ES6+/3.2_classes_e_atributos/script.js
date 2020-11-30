// Classes e Atributos

// ClassList - Retorna uma lista com as classes do elemento. Permite adicionar, remover e verificar se contém
// Aqui ↓ estou manipulando a classe menu dentro da nav

const menu = document.querySelector('.menu');

menu.className;                        // string 
menu.classList;                        // lista de classes
menu.classList.add('ativo');           // adiciona classe ativo
menu.classList.add('ativo', 'mobile'); // duas classes 
menu.classList.remove('mobile');       // remove
menu.classList.toggle('ativo');        // adiciona ou remove classe - encontrou? = exclui, ñ encontrou? = adiciona 
menu.classList.contains('ativo');      // true or false - checa se existe a classe
menu.classList.replace('ativo', 'inativo'); // adiciona ou remove a classe
 


// Adicionando ou removendo com ClassName 
menu.className = menu.className + ' novaclasse' // Com espaço não gruda em outra classe
menu.className += ' outraclasse'                // Expressão abreviada



// Attributes - Retorna um array-like com os atributos do elemento.
const animais = document.querySelector('.animais');

animais.attributes;       // retorna todos os atributos como id, class, alt, etc 
animais.attributes[0];     // retorna o primeiro atributo 

console.log(animais.attributes); 
console.log(animais.attributes.class);          // [0]
console.log(animais.attributes.id);             // [1]
console.log(animais.attributes['data-texto']);  // [2] animais.attributes.data-texto - não aceita hífen 



// getAttribute e setAttribute - Métodos que retornam ou definem de acordo com o atributo selecionado

const img = document.querySelector('img');

img.getAttribute('src');                  // valor do src
img.setAttribute('alt', 'alt da imagem'); // adiciona alt e inclui valor ou muda o alt se existir
img.hasAttribute('id');                   // true or false
img.removeAttribute('alt');               // remove o alt
img.hasAttributes();                      // true / false se tem algum atributo


// EXERCICIOS

// Adiciona a classe ativo a todos os itens do menu


const itensMenu = document.querySelectorAll('.menu a');
// adiciona a cada interação no a/link
itensMenu.forEach((item) => {
  item.classList.add('ativo');
});


// Remove a classe ativa de todos os itens do menu e mantenha a penas na primeira 
itensMenu.forEach((item) => {
  item.classList.remove('ativo');
});
itensMenu[0].classList.add('ativo');


// Verifique se as imagens possuem o atributo alt 
const imgs = document.querySelectorAll('img');

imgs.forEach((img) => {
  const possuiAtributo = img.hasAttribute('alt');
  console.log(img, possuiAtributo);
});

// Modifique a href do link externo do menu 
const link = document.querySelector('a[href^="http"]');
link.setAttribute('href', 'https://www;google.com/');
console.log(link)