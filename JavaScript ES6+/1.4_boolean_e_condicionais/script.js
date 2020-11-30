// Boolean e Condicionais - 1
var possuiCarro = false;

// Já vem como true dessa forma
if (possuiCarro){ 
    console.log('É verdadeiro')
    var x = 10;
} else {
    console.log('É falso')
}
console.log(x);
// Será undefined - joga a variável pra cima do código.
// Se condição for true, entra no if, atribui 10 para x
// e mostra no console 10.
// No caso de let x = 10; - let não permite fora do escopo
// retornará - x is not defined

// Podemos checar várias condições
var possuiGraduacao = false;
var possuiDoutorado = true;

if (possuiGraduacao){ 
    console.log('Possui Graduação');
} else if (possuiDoutorado){
    console.log('Possui Doutorado');
} else {
    console.log('Não possui nada');
}

// Alguns dos exemplos que retornam false 
/* 
if(false); - Qualquer coisa que retorne false
if(0);     - Qualquer coisa que retorne 0
if(NaN);            - // // //
if(null);           - // // // 
if(undefined);      - // // // 
if('') ou "" ou ``  - // // //
*/

// O sinal '!' inverte o valor de uma variável

var inverte = 'inverter'
console.log(!inverte)

// Ao colocar '!!' checamos se é true ou false
// pois inverte duas vezes 

var verifica = 'texto'
console.log(!!verifica)



