// Eventos - 2 

// forEach e Eventos 

// O método addEventListener é adicionado á um único elemento, então é necessário 
// um loop entre elementos de uma lista, para adicionarmos á cada um deles.

// Primeiro, cria uma nodelist que contém as imgs. Nodelist devido a querySelectorAll 
const imgs = document.querySelectorAll('img') 

// Defino a funçao que pega o atributo 'src' das imagens 
function imgSrc(event){
    const src = event.currentTarget.getAttribute('src');
    console.log(src);
}

// Agora chamamos o forEach para adicionar addEventListener em cada img
imgs.forEach((img) =>{
img.addEventListener('click', imgSrc);
});


 // EXERCÍCIO 

 // Quando o usuário clicar nos links internos do site,
 // adicione a classe ativo ao item clicado e remova dos 
 // demais itens caso eles possuam a mesma. Previna
 // o comportamento padrão desses links
 
 const linksInternos = document.querySelectorAll('a[href^="#"]');

 function handleLink(event){ 
    event.preventDefault() 
    event.currentTarget.classList.toggle('ativo')    
}

linksInternos.forEach((link) => {
    link.addEventListener('click', handleLink)
});

// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados

// const elements = document.querySelectorAll('body *');

// function qual(event){
//    console.log(event.currentTarget.remove());
// }

// elements.forEach((elemento) =>{
//     elemento.addEventListener('click', qual);
// })

// Utilize o método remove e remova o que foi clicado no código anterior

// ↓ Basta alterar a linha da funão qual para... 
// console.log(event.currentTarget.remove()

// Se o usuário clicar na tecla (t), aumente todo o texto do site.

const txtParagraf = document.querySelectorAll('p')

function paragrafo (event){
   
    if (event.key === 't')
    event.target.classList.toggle('aumenta'); // é target, pois txtParagraf já seleciona todos os texto <p>

    else 
    event.target.classList.toggle('aumenta');
}

txtParagraf.forEach((adiciona)=>{
    window.addEventListener('keydown', paragrafo)
    adiciona.addEventListener('click', paragrafo); // Aqui adicionou mais de um evento.
});
// ↑  ↑
// No caso acima, como addEventListener não permite dois parametros de ação mas dentro do forEach foi possivel chamar em outra linha  o 'click' e com
// isso ativar a função parágrafo que aumenta o texto. Uma observaçao: O evento click está sendo executado devido ao else, ele entra no forEach e chama paragrafo
// e como evento não é 't' e sim 'click' entra no else como → event.target.classList.toggle('aumenta');
 
// NA CORREÇÃO ...
function handleClick(event){
    if(event.key === 'a') // já ucou 't' no exemplo acima
    document.documentElement.classList.toggle('aumenta'); // document.documentElement = html // document.body = body
}
window.addEventListener('keydown', handleClick);