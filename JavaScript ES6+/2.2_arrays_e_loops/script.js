// Arrays e Loops - 1

var videoGames = ['Psp', 'Playstation', 'Xbox']
// Definimos array de Strings

var adicionaItem = videoGames.push('3DS');
// .push adiciona um item

var ultimoItem = videoGames.pop();  
// .pop() remove o ultimo item
// porém podemos deixa-lo armazenado em uma variável

videoGames.length;  // 3
// Ao contar vemos que há 3 com último item '3DS'
// Há diversos outros métodos que veremos mais à frente como map, reduce, foreach

// Loops 

// Inicie variável com 0; numero menor que 10;?
// atribua à numero o seu valor atual + 1.
for (var numero = 0; numero < 10; numero = numero + 1) { // Or numero++
  console.log(numero)
} 
// Retorna de 0 a 9 no console
// O for loop possui 3 postas - inicio, condição e incremento

// Para loop while temos a seguinte syntax
// Os passos são os mesmos
var i = 100;

while (i < 110){
  i = i + 2
  // Pode definir o pulo desse incremento
  console.log(i);
}

