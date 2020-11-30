// Funções - 3

// ESTA AULA É DIRECIONADA PARA OS EXERCÍCIOS

// Crie uma função para verificar se um valor é Truthy
function verifica(verifica) {
    if (verifica) {
        return 'é vdd'
    } else {
        return 'é falso'
    }
}  // Or return !!verifica direto

// Crie uma função matemática que retorne o perímetro de um quadrado
function quadrado(perimetro) {
    return perimetro * 4
}

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function nomeCompleto(nome, sobrenome) {          // Criou função
    var nome = 'Miguel'
    var sobrenome = 'Ribeiro'
    console.log(nome, sobrenome);
}
nomeCompleto() // Ativa a função

// Crie uma função que verifica se um número é par
function numero(par) {
    divisao = par % 2;
    if (divisao === 0) {
        return 'Divisível por 2'
    } else {
        return 'Não divisível por 2'
    }
}
console.log(numero(5));


// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function checarTipo(argumento) {
    return typeof argumento;
}
console.log(checarTipo('miguel'));


// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando ocorrer o 'scroll'

function NomeCompleto(nome, sobrenome) {
    var nome = 'Miguel'
    var sobrenome = 'Ribeiro'
    console.log(nome, sobrenome);
}
addEventListener('scroll', NomeCompleto);
// PODEMOS FAZER DA SEGUINTE FORMA 
// addEventListener ('scroll', function(){
//     console.log ('Miguel Batista');
// });


// Corrigir o erro
var totalPaises = 193;          // Para acesso de ambas as funções
function precisoVisitar(paisesVisitados) {
    // var totalPaises = 193;
    return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`
}   
function jaVisitei(paisesVisitados) {
    // var totalPaises = 193;
    return `Já visitei ${paisesVisitados} do total de ${totalPaises}`
}
//Lembrando que aqui apenas executamos 
// Para mostrar no console é necessário console.log(funcao(arg)); ou simplesmente chamamos a funçao
// no console e colocamos manualmente o argumento
precisoVisitar(20);
jaVisitei(20);

