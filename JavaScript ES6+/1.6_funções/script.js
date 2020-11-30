// Funções - 1

// As funções são um bloco de códigos que 
// podem ser executados e reutilizados quantas
// vezes forem necessárias.

// Valores podem ser passados por uma função e a mesma
// retornar outro valor

// Uma função pode ou não iniciar com parâmetro
function umaFuncao() {
    console.log('Função ativa')
}
umaFuncao() // Ativa a função


// Nome da função - areaQuadrado
// Parametro - lado
function areaQuadrado(lado) {
    return lado * lado;
    // Um comentário 
}
// Forma erronea - retorna a própria funçao e mostra todo o seu conteúdo
console.log(areaQuadrado);

areaQuadrado(4) // 16
areaQuadrado(5) // 25 
areaQuadrado(2) // 4 

// Forma correta de mostrar no console / para executar a função
console.log(areaQuadrado(4))


// Ao CRIAR uma função, você pode definit PARÂMETROS
// Ao EXECUTAR uma função, você pode passar ARGUMENTOS

// Peso e altura são os parâmetros. Podemos definir mais de um com ','
function imc(peso, altura) {
    const calc = peso / (altura ** 2); // Cria variável 
    return calc;                       // Nova variável executou a operação
    // return peso / (altura ** 2) 
    // é uma opção
}
// Ativamos a função
imc(80, 1.80);   // 80 e 1.80 são argumentos
imc(60, 1.70);   //  60 e 1.70 são argumentos 
console.log(imc(80, 1.80));



function corFavorita(cor) {
    if (cor === 'azul') {
        return 'Eu gosto do azul';
    } else if (cor === 'verde') {
        return 'Eu gosto de verde';
    } else {
        return 'Não gosto de cores';
    }
}
console.log(corFavorita('azul')) // Executou com argumento
console.log(corFavorita())       // Executou sem argumento



// FUNÇÕES NATIVAS

function mostraConsole(){                // Função Callback   
    console.log('Oi')
}
addEventListener('click', mostraConsole) 
// Não precisa de chaves
// Função nativa do browser em JS - Adiciona evento



// OUTRA FORMA

// Passamos uma função como argumento
// Função executa após um evento (click) - callback
// A função possui dois argumentos, Strig e function
addEventListener('click', function(){ // Função Callback
    console.log('Clicou')
});
// Funções anônimas não possuem nome definido
// Escritas como - function (){} ou () => {} 
// E uma função anônima (sem nome) que é executada assim que o envento ocorre


