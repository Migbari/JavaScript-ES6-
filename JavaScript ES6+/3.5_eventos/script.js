// Evento - 1 


// Uma função anonima dificulta o processo de localizar o erro após debugar ↓
const img = document.querySelector('img')

// addEventListener (event, callback, oprions) - argumentos
img.addEventListener('click', function(){
    console.log('Clicou / função anônima');
});

// Como boa prática, é bom declarar o nome da função e chamar normalmente no segundo argumento do evento ↓
img.addEventListener('click', Diretamente);
function Diretamente() {
    console.log('Clicou / função declarada ');
};

// Com arrow function funciona normalmente. 
img.addEventListener('click', () =>{
    console.log('Clicou / arrow aunction');
});

// Uma função callback tem como primeiro parâmetro um evento
// esse evento retorna um objeto com propriedades e métodos. 
img.addEventListener('click', exemploEvent);
function exemploEvent(event){
    console.log('CallBack retorna evento', event);
}

const FotosAnimais = document.querySelector('.animais-lista')

FotosAnimais.addEventListener('click', callback);

function callback(event){
    const currentTarget = event.currentTarget; // currentTarget - alvo atual - retorna ul
    const target = event.target;   // onde o clique ocorreu - retorna a img clicada
    const type = event.type;       // tipo de evento - click
    const path = event.path;       // path - caminho 
    console.log('Algumas propriedades do objeto de event \n',
        'retorna ul →', currentTarget, '\n retorna img →', target, '\n retorna caminho ↓', path, '\n retorna tipo →', type);
}



// event.preventDefalut () - Previne/Impede o comportamento padrão do evento no browser.
// No caso de um link externo, por exemplo, irá previnir que o link seja ativado

const linkExterno = document.querySelector('a[href^="https"]');

function linkPrevine(event){
    event.preventDefault();
    console.log('Clica mas não sai da página');

    // No caso de EVENTOS, Este this sempre faz referencia ao elemento que possui o addEventListener
    console.log(this);
    console.log(this.getAttribute('href')); // get no atributo/href do linkExterno/<a>
}
linkExterno.addEventListener('click', linkPrevine);


// Outro exemplo 

// Lembrando que já declaramos img - linha 05
// const img = document.querySelector('img')
function exemploThis (comThis){
    console.log(this);
    console.log(comThis.currentTarget);    // Geralmente igual ao event.currentTarget - Possui mesmos métodos de this = getAttribute('src')
    console.log(this.getAttribute('src')); // É igual no console = img.getAttribute('src'));
}
img.addEventListener('click', exemploThis)


// Existem diversos eventos como click, scroll, resize, keydownm keyup, mouseenter, etc.
// Eventos podem ser adicionados a diferentes elementos, como o window e document também

const h1 = document.querySelector('h1');
function h1Clique(event) {
    console.log(event.type, event);
}
/*   APENAS PARA NÃO DISPARAR OS EVENTOS 

h1.addEventListener('click', h1Clique)       // click
h1.addEventListener('mouseenter', h1Clique)  // mouse hover
h1.addEventListener('mousemove', h1Clique)   // mouse hover
window.addEventListener('scroll', h1Clique)  // rolagem
window.addEventListener('resize', h1Clique)  // redimensionar
window.addEventListener('keydown', h1Clique) // redimensionar

*/

// Keyboard - Você pode adicionar atalhos para facilitar a navegação 
// no seu site através de eventos do keyboard

// Callback inclui ou exclui a classe no body.
function handleKeyboard(event) {
    if (event.key === 'a') 
        document.body.classList.toggle('azul')   // toggle - alternancia
    
    else if(event.key === 'v')
        document.body.classList.toggle('vermelho') // toggle - alternancia
}
// Adicionam evento ao elemento window e ativa callback
window.addEventListener('keydown', handleKeyboard)


