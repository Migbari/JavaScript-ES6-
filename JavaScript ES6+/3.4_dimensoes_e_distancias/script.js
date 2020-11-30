// Dimensões e Distâncias - 2 

// EXERCÍCIOS 

// Verifique a distância da primeira imagem em relação ao topo da página
const img = document.querySelector('img');
console.log(img.offsetTop);

// Retorne a soma da largura de todas as imagens
function somaImagem(){
    const imgs = document.querySelectorAll('img') // Seleciona todas as imgs
    let soma = 0;                                 // variavel para somar
    imgs.forEach((img) => {
        soma += img.offsetWidth;
    });
    console.log(soma);
    
}
window.onload = function () {
    somaImagem()
}

// Verifique se os links da página possuem o minimo recomendado para telas utilizadas com o dedo
// 48px/48px de acordo com google

const links = document.querySelectorAll('a'); // Selecionei todos os elementos

links.forEach((link) => {
const larg = link.offsetWidth
const altu = link.offsetHeight;

if(larg > 48 && altu > 48){
    console.log('Links com acessibilidade');
}else{
 console.log('Links sem acessibilidade');
    }
});

// Se o browser menor que 720px adiciona classe menu-mobile 
const browserSmall = window.matchMedia('(max-width: 720px)').matches;
if(browserSmall){
    const menu = document.querySelector('.menu');
    menu.classList.add('menu-mobile');
}







