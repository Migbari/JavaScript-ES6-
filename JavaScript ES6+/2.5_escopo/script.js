// Escopo 

// 'use strict' - Não permite uma variável ser criada sem var, let ou const
// assim o javascript impede erros de escopo

// Variáveis declaradas dentro de funções não são acessadas
// fora das mesmas. 
// Escopo evita o conflito entre nomes

// Escopo de função.
function mostrarCarro() {
  var carro = 'Fusca';
  console.log(carro);
}
mostrarCarro();       // Fusca no console
// console.log(carro) // Erro, carro is not defined


// Uma variável sem tipo - var, let ou const
// é definida como global e pode ser acessada em 
// qualquer escopo
function mostrarFruta() {
  fruta = 'Abacaxi';
  console.log(fruta);
}
mostrarFruta();       // Abacaxi no console
console.log(fruta)    // Abacaxi no console



// Escopo de Bloco

// Geralmente de uma condição, loop ou apenas chaves
// Quando variável declarada var, ela não respeita o bloco
// Por isso, é aconselhável let e const
if (true){
  var carro = 'Uno';
  console.log(carro);
}
console.log(carro) // Carro

let mes = 'Dezembro'; 
if(true){
  console.log(mes); // É acessada, pois está no escopo 'Pai'
}
console.log(mes);   // É acessada



// Mesmo com a condição falsa, a variável ainda será declarada
// utilizando hoisting e o valor ficará como undefined.
if(false) {
  var casa = 'Grande';
  console.log(casa);
}
console.log(casa);   // Undefined



// Chaves {} criam um escopo de bloco, não confundir com a criação de objetos 
// objetoNome = {}
{
  var rua = 'Aluísio';
  const ano = 2018
}
console.log(rua); // 'Aluísio'
// console.log(ano); // erro ano is not defined

// Ao utilizar var dentro de um for loop, que é um bloco, o valor da
// variável irá vazer e existir fora do escopo.
// Por isso é sempre melhor usar let
var i = 50;

for (let i = 0; i < 10; i++){
  console.log(`Número ${i}`);
}
console.log(i*2);   // 100

// Const

// Mantém o escopo no bloco, impede a redeclaração e impede a 
// modificação do valor da variável evitando bugs no código

const mess = 'dezembro';
mess = 'janeiro' // erro, tentou modificar valor
const semana;    // erro, declarou sem valor

const data = {
  dia: 28,
  mes: 'dezembro',
  ano: 2018,
}
data.dia = 29;    // Funciona
data = 'janeiro'; // erro

// Let

// Mantém o escopo no bloco, impede a redeclaração, mas permite
// a modificação do valor da variável.

let ano;
ano = 2018;
ano++;
console.log(ano);   // 2019

let ano = 2020;   // erro, redeclarou a variável
// Geralmente vamos utilizar o const


