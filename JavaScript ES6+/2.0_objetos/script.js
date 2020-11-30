// Objetos - 2

// Criar um Objeto - Para criar um objeto utiliza-se {}
var carro = {};
var pessoa = {};

console.log(typeof carro) // 'object'

// Dot Notation Get
// Acesse a propriedade de um objeto utilizando o ponto '.'

var menu = {
    width: 800,
    heigth: 50,
    backgroundColor: 'lilás'
}
// Podemos atribuir uma propriedade à uma variável
var bg = menu.backgroundColor; // 'lilás'



// Dot Notation Get 

// Use ponto '.' para acessar a propriedade de um objeto
var menu = {
    width: 800,
    heigth: 50,
    backgroundColor: '#84E',
}
menu.backgroundColor = '#000'; // Alterou a propriedade backgroundColor
// Podemos atribuir uma propriedade a uma variável
var bg = menu.backgroundColor; // '#84E'

// É possível adicionar uma nova propriedade dentro do objeto
menu.color = 'blue';

// Assim como um novo método
// No console - menu.esconder() mostra Escondi'
menu.esconder = function(){
    console.log('Escondi');
}

// This irá fazer referência ao próprio objeto
var heigth = 120;
var teste = {
    heigth: 50,

    metadeHeigth(){
        return this.heigth / 2;
    }
}   
teste.metadeHeigth();            // retorna 25
// sem this retorna 60

// Quando criamos um objeto herdamos as Propriedades e Métodos do objeto (object)
// nativo do JavaScrip. Objeto 'Object' é responosável pela criação dos objetos criados
var Heranca = {
    width: 800,                  // Minha propriedade
}
// hasOwnProperty é um médoto de 'object' - verifica se a propriedade existe
// dentro do nonsso objeto 'menu'
// Heranca herda hasOwnProperty
Heranca.hasOwnProperty('width')  // true 
Heranca.hasOwnProperty('heigth') // false - não existe essa propriedade

// EXERCICIOS

// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome
var meusDados = {
    name: 'Miguel',
    age: 24 ,
    lastName: 'Ribeiro',
    adress: 'Rua João Lobo',
    mostrarOutros(){
        return `${this.age}${this.adress}` // Template String
    }
}
meusDados.mostrarNome = function (){
    return `${this.name} ${this.lastName}`; // Template String
 }
// Crie um método no objeto anterior, que mostre o seu nome completo


// Modifique o valor da propriedade preco para 300
var carro = {
    preco: 1000,
    portas: 4,
    marca: 'Audi',
}
carro.preco = '300';                        // Altera o valor

// Crie um objeto de um cachorro que represente um labrador 
// preto com 10 anos, que late ao ver um homem
var cachorro = {
    raca: 'labrador',
    cor: 'preto',
    idade: 5,
    passouHomem(){
        return this.latir() 
    },
    latir(){
        return 'wolf wolf wolf'
    },
}

// Forma da correção - ficou direfente
var cao = {
    raca: 'labrador',
    cor: 'preto',
    idade: 5,
    latir(pessoa){   
        if(pessoa === 'homem'){
            return 'Latir'
        } else {
            return 'Nada acontece'
        }
    },
}


