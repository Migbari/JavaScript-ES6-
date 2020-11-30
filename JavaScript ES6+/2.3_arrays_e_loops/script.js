// Arrays e Loops - 2

// Um array é base 0, ou seja, o primeiro elemento iniciara com '0'
var videoGames = ['Psp', 'Playstation', 'Xbox']
// Definimos array de Strings

// Para acessar um array de string 
// Chamamos pelo indice, dessa forma 
console.log(videoGames[0],
            videoGames[1],
            videoGames[2]);

// Criamos um array e definimos nosso contador que irá percorrer cada
// um desses indices
for (var item = 0; item < 3; item++){
  // Quando não for possivel saber o tamanho do array
  // Contamos o tamanho do array
  // na condição -> item < videoGames.length
  console.log(videoGames[item]);
}

var i = 100;
while (i < 110){
  i = i + 2
  console.log(i);
}

// Chamamos uma array de string e usamos o laço for para definir um
// break (parar) no loop assim que a condição for satisfeita
var carros = ['uno','fusca','civic','agile'];
for (var i = 0; i < carros.length; i++){
  console.log(carros[i]);
  // Se o item do array for igual a 'civic' -> break
  if(carros [i] === 'civic'){
    break;
  }
}

// forEach é um método que executa uma função para cada item do Array.
// É uma forma mais simples de utilizarmos um loop com array [ou array-like]
// Podemos passar os seguintes parametros -> item, index e array

var bicicletas = ['madeira', 'aluminio', 'ferro'];
var frutas = ['maça', 'banana', 'pera', 'uva'];

bicicletas.forEach(function(item, dkd, der) {
  console.log(item, dkd, der)
});
// O argumento item, index e array será atribuido dinamicamente
// Podemos definir qualquer variável como parâmetro
// Deixamos como item para informar que o retorno será item 
// O segundo retorno será o index, mostrando o índice do item
// E o terceiro mostrará o array por completo


// Não se confunda com a Syntaxe
var numero = 0;
var maximo = 20;
for (;numero < maximo;){ // número é menor que máximo?
  console.log(numero)    // escreva número 
  numero++;              // incremente + 1 
}
// Não é aconselhado escrever dessa forma acima, mas funciona

// EXERCÍCIO 

// Crie um array com os anos que o Brasil ganhou a Copa
// 1959, 1962, 1970, 1994, 2002 
var brasilWin = ['1959', '1962', '1970', '1994', '2002']

// Interaja com o array utilizando um loop, para mostrar no console
// a seguinte mensagem, 'O brasil ganhou a copa de ano'
brasilWin.forEach(function(ano){
  console.log('O brasil ganhou a copa de ' +ano);
})
// Outra forma de realizar
for (var i = 0; i < brasilWin.length; i++){
  console.log(`O brasil foi campeão em ${brasilWin[i]}`);
}

// Interaja com o loop nas frutas abaixo e pare ao chegar e pare em Pera
var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância']

for (var i = 0; i < frutas.length; i++){
  console.log(frutas[i]);
  if (frutas[i] === 'Pera'){
    break;
  }
}

// Coloque a última fruta do array acima em uma variável, 
// sem remover a mesma do array
var semRemover = console.log(frutas[4]);

// Outra forma 
var ultimaFruta = frutas[frutas.length - 3];
// .length conta a quantidade de itens dentro do array sem considerar seu índice
// mas quando utilizo - 1 ou qualquer outro, o retorno se torna o índice



 

