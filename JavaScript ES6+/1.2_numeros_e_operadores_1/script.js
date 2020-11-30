// Números e operadores

var decimal = 5.5; // decimal
var expo = 3e3; // exponencial base 10
var expo2 = 3e-5; // zeros a esquerda
var idade = 24; // int

console.log(expo + " ou " + expo2)

// Operadores Aritméticos Básicos
var soma = 100 + 50; // 150 - somar
var subtracao = 100 - 50; // 50 - subtrair
var multiplicacao = 100 * 2; // 200 - multiplicar
var divisao = 100 / 2; // 50 - dividir
var expoente = 2 ** 4; // 16 - exponenciar
var modulo = 14 % 5; // 4 - resto da divisão = módulo


/* Nos casos de subtração, divisão e multiplicação
como mostra ABAIXO, como apenas são números
o programa interpreta e consegue fazer a operação 
mas é necessário conter apenas números 
CASO POSSUA STRING COMO NA DIVISÃO, NÃO É POSSIVEL APLICAR */

// Operadores Aritiméticos com String
var soma = '100' + 50; // 10050
var subtracao = '100' - 50; // 50
var multiplicacao = '100' * '2'; // 200

// NaN (Not a Number)
var divisao = 'Comprei 10' / 2;  
console.log(divisao);

// Podemos verificar se a variável 
// é uma NaN com a função isNaN()

// Para true = Not a Number
console.log(isNaN(divisao));

// Para false = Is Number
console.log(isNaN(multiplicacao));
