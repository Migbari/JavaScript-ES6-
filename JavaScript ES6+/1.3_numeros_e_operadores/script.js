// Operadores Aritiméticos Unários

// Incrementar um valor com  + 1
// Aqui incrementa 1 para x que era 5
var x = 5;
console.log(x++) // Retorna o 5 e incrementa 1
console.log(x)   // Mostra 6 no console 

var y = 7;
console.log(++y) // Retorna o 8 já com incremento

// Para decremento, funciona da mesma forma
var z = 5;
console.log(z--) // Retorna o 5 e decrementa 1
console.log(z)   // Mostra 4 no console 

var d = 7;
console.log(--d) // Retorna o 6 já com decremento

// Podemos tambem transformar o valor de uma String em Numero
// Quando temos PURAMENTE um numero em formato de string
var idade = '20';
+idade;
-idade;
console.log(-idade, +idade) // -20 e 20
// var idade = ' tenho 30 anos'; - retornaria NaN e NaN

// Podemos tambem fazer da seguinte forma
var gols = +'30';          // Colocamos o + a frente
console.log(typeof gols);  // Não foi necessario colocar '+'

// EXERCICIOS

// Verificar resultado da seguinte expressão
var total = 10 + 5 * 2 / 2 + 20; // 35
console.log(total);

// Criar duas expressões que retornam NaN
var primeira = 'texto1';
console.log(isNaN(primeira));

var segunda = +'20e'
console.log(segunda)

// Somar a string '200' com número 50 e retornar 250
var numero = '200';
+numero;
console.log(+numero + 50);

// Incrementar o número 5 e retornar o seu valor incrementado
var outra = 5;
console.log(outra++) // Incrementou - porém valor retorta atual
console.log(outra) // Retornou o valor incrementado

// Dividir o peso por 2
var numero = +'80'; // ou / por 2 direto 
var unidade = 'kg';
var peso = numero + unidade // '80kg'
var pesoPorDois = numero / 2  
console.log(peso)











