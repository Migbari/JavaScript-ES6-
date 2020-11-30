// Declaração das variáveis 
// Variáveis são Case Sensitive, ou seja, são diferentes as variáveis "Nome" e "nome"
// Não podem ser palavras reservadas- utilizadas pelo programa (function, var, char, etc...)

// As variáveis iniciam-se com var, let ou const
var nome = 'Miguel';        
let idade = 24;
const PossuiFacul = 'true';

// Mostrar no console as variáveis
console.log(nome, idade, PossuiFacul);

var preco = 25;
var totalComprado = 5;
var totalPreco = totalComprado * preco;
console.log(totalPreco)

var sobrenome = 'Ribeiro', 
    cidade = 'SP';
console.log(sobrenome, cidade);

// Uma variável sem valor retorna undefined como padrão
console.log(semDefinir);
var semDefinir;

// Quando criamos uma variável o js a envia  para cima 
// do código, porém o valor passado não é movido
// HOISTING
console.log(valornaomovido);
var valornaomovido = 'Miguelito';

var profissao = 'Designer';
console.log(profissao);

// Variáveis com let e var mudamos o seu valor
// Variável const, valor nunca é alterado

// Alteramos o valor da variável
// O mesmo é possível com let
var time = 'vasco';
var time = 'fluminense / usamos var';
console.log(time);

// Let não pode ser o idenficicador de uma mesma variável
// Error: Identifier 'jogo' has already been declared
let jogo = 'futebol';
// let jogo = 'volei'; - NÃO PERMITE!
console.log(jogo);

// Cons não permite alterar o valor da variável
// Error: Assignment to constant variable.
const fruta = 'banana';
// const  fruta = 'abacate'; - NÃO PERMITE!
console.log(fruta);

// EXERCÍCIOS

// Declarar uma variável com o seu nome
var name = 'Miguel';

// Declarar uma variável com a sua idade
var age = 24;

// Declarar uma variável comida favorita
// e não atribuir valor 
var favoritefood;

// Atribuir valor a sua comida favorita 
var favoritefood = 'Lasanha';

// Declarar 5 variáveis diferentes sem valores
var criei, outravariavel, terceira, quarta, finalizou;




