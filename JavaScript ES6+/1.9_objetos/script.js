// Objetos - 1
 // Conjunto de variáveis e funções, que são chamadas de propriedades e métodos
 
 // Criamos um objeto (pessoa)
 // typeof pessoa no console mostra object
 var pessoa = {
     nome: 'Miguel',            // Propriedade 
     idade: 24,                 // Propriedade
     profissao: 'Programador',  // Propriedade
     possuiRoupa: true          // Propriedade
 }
 pessoa.nome; // Miguel
 pessoa.possuiRoupa // true
 // colocar no console para visualizar a chamada

 // Métodos
 // É quando uma propriedade possui uma função no local do seu valor 

 // Objeto 
 var quadrado = {
    lados: 4,                   // Valor fixo
    // Método - Propriedade que contém uma função
    area: function(lado){  
    return lado * lado;    
    },
    // Método - Propriedade que contém uma função
    perimetro(lado){            // Função abreviada
    return this.lados * lado;   // this pega lados fora desta função (no objeto)
    },
 }
 // Para acessar um método
 quadrado.lados; // 4
 quadrado.area(5); // 25
 quadrado.perimetro(5); // 25

// Organizar o Código
// Objetos servem para organizar o código em pequenas partes reutilizaveis

// Math é um objeto nativo de JavaScript. 

// Objeto Math traz PROPRIEDADE já definida  
Math.PI; // 3.14
// Objeto Math traz MÉTODO já definidO 
Math.random(); // número aleatório

var pi = Math.PI;
console.log(pi); // 3.14
// Percebemos também que 'console' é um objeto e 'log()' um método



