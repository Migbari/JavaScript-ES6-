// Dimensões e Distâncias - 1 


// Dos métodos Element e HTMLElement temos as propriedades Heigth e Width. A maior parte é Read Only

const section = document.querySelector('.animais');
section.clientHeight; // height + padding
section.offsetHeight; // heigth + padding + border 
section.scrollHeight; // heigth total, mesmo dentro do scroll
// Mesma coisa para Width, clientWidth...

const listaAnimais = document.querySelector('.animais-lista')
listaAnimais.clientHeight;  // 370
listaAnimais.scrollHeight;  // 656 mobile, 2256 web - área total do elemento com scroll - 

const height = listaAnimais.scrollHeight; // guardou na variável
console.log(height);



// É possível verificar a distância entre o canto esquerdo do elemento e o canto esquerdo da página
// Assim como o topo do elemento ao topo da página 

// offsetTop e offsetLeft

const animaisTop = listaAnimais.offsetTop;
console.log(animaisTop); // 173

const raposah2 = document.querySelector('h2');
const h2left = raposah2.offsetLeft;
console.log(h2left);     // 130
// ↑ ↓
// getBoundingClientReact() - retorna o objeto com valores width e height, distancia dos elementos e mais
const rect = raposah2.getBoundingClientRect();  // Em termos simples, retorna as cordenadas
console.log(rect);                             
console.log(rect.height);
console.log(rect.width);
console.log(rect.top);



// Window - para verificar tamanho da janela

window.innerWidth;  // width do janela
window.outerWidth;  // soma dev tools também 
window.innerHeight; // height da janela
window.outerHeight  // soma a barra de endereço

window.pageYOffset; // distancia total do scroll horizontal
window.pageXOffset; // distancia total do scroll vertical 

if (window.innerWidth < 767){
    console.log('tela mobile');
} 
else{
    console.log('tela web');
}



// innerWidth não é muito viável pois o valor pode mudar dependendo do browser
// matchMedia() é mais utilizado para verificar a largura 

const small = window.matchMedia('(max-width: 600px)'); // Passa como media queries do css

if(small.matches){                                     // matches é propriedade true or false
    console.log('Tela MENOR que 600px');
} else{
    console.log('Tela MAIOR que 600px');
}

// Dica
// 1 - Selecione o elemento no inspetor (dom)
// 2 - Abra o console e digite $0 para selecionar o mesmo 
// 3 - Os elementos selecionados anteriormente são $1, $2 ...