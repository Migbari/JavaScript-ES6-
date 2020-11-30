// Node

// Toda tag Html é representada pelo objeto Element e por isso herda os seus 
// métodos e propriedades. Element é um tipo de objeto Node. 

// Selecionamos o h1 do documento html através do queryselector()
const title = document.querySelector('h1')
console.log(title);    // Mostramos no console

// classList - Mostra as classes do elemento 
console.log(title.classList); 

// Para acessar e mostra uma específica classe do elemento 'h1' 
title.classList[1];   // outro_titulo no console

// Exemplos de outras propriedades

title.innerText;  // Retorna o texto;
title.classList;  // Retorna as classes;
title.id;         // Retorna Id
title.offsetHeigth;  // Retorna a altura do elemento;

// title.addEventListener('click', callback);
// ativa a função callback

// Criamos uma variável que agora contém 'h2'
const primeira = document.querySelector('h2');

// adicionamos uma função callback que é ativada no evento 'click'
primeira.addEventListener('click', 
  function(){
  console.log('Clicou em', primeira.innerText);
  // Chama o texto cada vez que clica
})


// Exercício 

// Retorne a URL da página atual utilizando o objeto window
console.log(window.location.href);

// Veficado na internet, é possível trazer parte de uma URL
var url = window.location.href; 
// Método split() - pt = divisão. Transforma 5500 no ponto referência.
url = url.split('5500');  
url = url[1];            // após 5500 da url
alert(url);
// alert (url.split('5500') [0]);  !!!  Antes de 5500 da url - REDUZIDO


// Seleciona o primeiro elemento da página que possua a classe ativo
const retorna = document.querySelector('.ativa');
console.log(retorna);
// Por padrão querySelector seleciona o primeiro element localizado

const ativa = document.querySelectorAll('.ativa');
ativa[0] // h1          // Acessa como se fosse array 
ativa[1] // h2

// Retorne a linguagem do navegador
// Lembrando... Não é necessário window, mas também funciona
console.log(navigator.language);

// Retorna a largura da janela
const largura = window.innerWidth;
console.log(largura);
