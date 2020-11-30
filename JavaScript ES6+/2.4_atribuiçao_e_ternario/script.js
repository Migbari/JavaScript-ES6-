// Atribuição e Ternário

// Formas abreviadas Atribuição 
var x = 5;
var y = 10;

x += y; // x = x + y (15)
x -= y; // x = x - y (-5)
x *= y; // x = x * y (50)
x /= y; // x = x / y (0.5)
x %= y; // x = x + y (0)
x **= y; // x = x ** y (9765625)

// Abreviação de condicionais com if e else 
var idade = 19;
var semDiabete = true;
var podeBeber = (idade >= 18 && semDiabete) ? 'Pode beber' : 'Não pode beber';
console.log(podeBeber); // Pode Beber
// condição ? true : false

// If Abreviado
// Não é necessário abrir e fechar as chaves {} quando retornamos
// apenas uma linha de código 
var possuiCarro = true;
if(possuiCarro) console.log('Possui carro');
else console.log('Não possui faculdade');

// Ou 
if (possuiCarro)
  console.log('Possui sim');
else 
  console.log('Não possui');

// EXERCICIO

// Some 500 ao valor de scroll abaixo,
// atribuindo o novo valor a scroll
var scroll = 1000;
scroll += 500;

// Atribua true para a variável darCredito,
// se cliente possi carro e casa e false caso contrário
var possuiCasa = true;
var possuiCarro = true;
var darCredito;

if (possuiCarro && possuiCasa)
  console.log (darCredito = true);
else {
  console.log(darCredito = false);
}

 
