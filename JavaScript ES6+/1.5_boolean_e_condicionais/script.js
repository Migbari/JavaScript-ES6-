// Boolean e Condicionais - 2

var corFavorita = 'Azul'

switch (corFavorita) {
    case 'Azul':
        console.log('Procure um carro azul');
        break;          // Quebra caso a condição seja true
    case 'Amarelo':
            console.log('Procure uma flor amarela');
        break;
    case 'Verde':
            console.log('Olhe para o a árvore');
        break;
    default:
        console.log('Feche os olhos');
}


// EXERCICIO

// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual


// Qual valor é retornado na seguinte expressão?
var expressao = (5 - 2) && (5 - ' ') && (5 - 2); // true - retorno 3

// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Andre';             // true
var idade = 28;                 // true
var possuiDoutorado = false;    // false
var empregoFuturo;              // false
var dinheiroNaConta = 0;        // false

// Compare o total de habitantes do Brasil com China (valor em mi)
var brasil = 207;
var china = 1340;

if (brasil > china){
    console.log('Brasil tem mais habitantes');
} else {
    console.log('China tem mais habitantes ')
}

// O que irá aparecer no console?
if(('Gato' === 'gato') && (5 > 2)) {
    console.log('Verdadeiro');
    } else {
    console.log('Falso');
    }                           // Falso

    // O que irá aparecer no console?
    if(('Gato' === 'gato') || (5 > 2)) {
    console.log('Gato' && 'Cão');
    } else {
    console.log('Falso');
    }                           // Cão

// Operador Lógico &&
true && true; // true
true && false; // false
false && true; // false
'Gato' && 'Cão'; // 'Cão'
(5 - 5) && (5 + 5); // 0
'Gato' && false; // false
(5 >= 5) && (3 < 6); // true

// Se ambos os valores forem true
// ele irá retornar o último valor
// verificado true. Se algum valor for
// false ele irá retorna-lo imediatamente sem
// checar os próximos

// Operador Lógico ||
true || true; // true
true || false; // true
false || true; // true
'Gato' || 'Cão'; // 'Gato'
(5 - 5) || (5 + 5); // 10
'Gato' || false; // Gato
(5 >= 5) || (3 < 6); // true

// Retorna o primeiro valor true
// que encontrar