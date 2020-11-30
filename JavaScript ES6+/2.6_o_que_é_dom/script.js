// Document Object Model (DOM)

// É uma interface que representa documentos HTML e XML através
// de objetos. Com ela é possivel manipular a estrutura, estilo e 
// conteúdo destes documentos.

console.log(window);
// window é o objeto global do broser
// possui diferentes métodos e propriedades 

// window.innerHeight // retorna a altura do browser
// Ao inspecionar elemento com o Chrome, você está vendo a representação oficial
// do DOM.

// Window e Document
// São os objetos principais do DOM, boa parte da manipulação é feita
// através dos seus métodos e propriedades.

window.alert('Isso é um alerta');
alert('Isso é um alerta Dois'); // Funciona

document.querySelector('h1'); // Seleciona o primeiro h1
// document.body;             // Retorna o body

