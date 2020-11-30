// Tipo de dados
var nome = 'Miguel'; // String
var idade = 24; // Number
var time; // Undefined
var comida = null; // Null
var simbolo = Symbol() // Symbol 
var novoObjeto = {} // Object

// Verificar o tipo da variável - typeof
var nome = 'Miguel';
console.log(typeof nome);
console.log(typeof idade);

// Em algumas vesões do ES o null ainda retorna como tipo objeto 
console.log(comida);

// Concatenar uma string
console.log(nome, ''+ idade);

// Concatenar uma string
var concatenar = nome + ' ' + idade;
console.log(concatenar);

// Concatenar String com Number 
var gols = 1000;
var frase = 'Romario fez ' + gols + ' gols';
console.log(typeof frase);
// Saída - Romario fez 1000 gols

// Template String
// Com template String podemos chamar uma variável dentro da string
// Obs. Semelhante a uma interpolação em C#
// Podemos também efetuar uma operação aritimética 
var template = `Romario fez ${gols * 2} gols`;
console.log(template);

// Quando queremos anular a função de um caracter utilizamos \
var melhor = 'teste';
var outra = "Esse é o \"melhor\" jogo";
console.log(outra)

var melhor2 = 'teste';
var outra2 = "Esse é o " + "melhor" + " jogo";
console.log(outra2)

// EXERCÍCIOS 

// Declare uma variável contendo uma string
var algo = 'Contem String';

// Declare uma variável contendo um número dentro de uma string
var contem = 'O numero ' + 10 + ' dentro de uma String';

// Declare uma variável com a sua idade
var idade = 24;

// Declare duas variáveis, uma com seu nome
// e outra com seu sobrenome e some as mesmas
var nome = 'Miguel';
var sobrenome = 'Batista';
var soma = nome + soma;

// Coloque a seguinte frase em uma variável: It's time
var phrase = 'It\'s ';

// Verifique o tipo da variável que contém o seu nome
console.log(typeof nome);






