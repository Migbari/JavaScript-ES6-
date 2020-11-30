// Transversing e Manipulação - 2

// É possível mover elementos no DOM com métodos de NODE

const sectionFaq = document.querySelector('.faq')
const faqLista = document.querySelector('.faq-lista')
const faqTitulo = document.querySelector('.faq-titulo');

const sectionAnimais = document.querySelector('.animais');
const animaisDesc = document.querySelector('.animais-descricao')
const animaisTitulo = document.querySelector('.animais-titulo')

const tituloCont = document.querySelector('.titulo-contato')
const contato = document.querySelector('.contato')
const mapa = document.querySelector('.mapa')

// Pegue a sectionFaq e insira faqLista acima de faqTitulo
sectionFaq.insertBefore(faqLista, faqTitulo)

// Pegue a sectionAnimais e insira animasDesc acima de animaisTitulo
sectionAnimais.insertBefore(animaisDesc, animaisTitulo)

// Torna titulo filho de contato
contato.appendChild(tituloCont) 

// Remove o titulo ↑ ↑ filho de contato
// contato.removeChild(tituloCont)

// Substitui tituloCont pelo por mapa 
contato.replaceChild(mapa, tituloCont)


// CRIAR ELEMENTOS NO JAVASCRIPT - createElement();
const novoH2 = document.createElement('h2');
novoH2.innerText = 'Titulo pelo createElement';
novoH2.classList.add('new_titulo');
mapa.appendChild(novoH2)


// PARA CLONAR UM ELEMENTO 
cloneH2 = novoH2.cloneNode(true) // true para clone dos filhos tbm
cloneH2.classList.add('azul') // add classe apenas ao clone 
mapa.appendChild(cloneH2);

// EXERCICIOS

// Duplique o menu e adicione ele em copy

const menu = document.querySelector('.menu')
const menuCp = menu.cloneNode(true)
const copy = document.querySelector('.copy')

copy.appendChild(menu)


// Selecione o primeiro DT da dl de Faq
const firstDt = document.querySelector('dt')
// const faq = document.querySelector('.faq')
// const firstDt = faq.querySelector('dt')


// Selecione o DD referente ao primeiro DT
const firstDd = document.querySelector('dd')
// const firstDd = firstDt.nextElementSibling();


// Colocar conteúdo de animais em faq
const faq = document.querySelector('.faq')
const animais = document.querySelector('.animais')

faq.innerHTML = animais.innerHTML; 

// Conteúdo html de .faq em .animais
// animais.innerHTML = faq.innerHTML  