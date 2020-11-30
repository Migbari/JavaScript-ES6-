// Funções - 2

// Pode ou não retornar um valor

// Quando não definimos um retorno na função - retorna undefined
function imc(peso, altura) {
    const imc = peso / (altura ** 2);
    console.log(imc);
}
imc(70, 1.70);
//  ATIVA a função que possui CONSOLE.LOG(IMC).

console.log(imc(100, 1.80))
// retorna o imc e undefine, pois quando chamo o console.log fora da função, ela 
// exige um retorno. Nesse caso retorna o imc que possui console.log dentro da função
//, identifica que não há retorno e mostra undefined.

// VALORES RETORNADOS
// Uma função pode retornar qualquer tipo de dado e até outras funções

function terceiraIdade(idade) {
    if (typeof idade !== 'number') {
        return 'Por favor, preencha com números!';   // retorna uma string
    } else if (idade >= 60) {
        return true;                            // retorna boolean
    } else {
        return false;                           // retorna boolean
    }
}
console.log(terceiraIdade(60));
// Não é uma boa prática retornos de tipos diferentes em uma mesma função


// ESCOPO
// Variáveis e funções definidas dentro de um bloco {}, não são visíveis fora dele

function ganharJogo(pontos) {
    var totalPontos = 193;
    return `Faltam ${totalPontos - pontos} pontos para ganhar`;
}
// console.log(totalPontos) // Erro ao tentar acessar totalPontos (dentro do bloco)
console.log(ganharJogo(80));

//ESCOPO LÉXICO 
// Funções conseguem acessar variáveis que foram criadas no contexto PAI

var profissao = 'Designer'; // Cria variável

// Cria função
function dados() {
    var nome = 'Miguel';
    var idade = 24;         // Não utilizada, function outrosDados faz uso

    function outrosDados() {
        var endereco = 'Belo Horizonte';
        var idade = 28;    // Redeclaramos idade
        return `${nome}, ${idade}, ${endereco}, ${profissao}`;
    }
    return outrosDados();
}
console.log(dados()); // Retorna 'Miguel', 29, 'Belo Horizonte', 'Designer'
// outrosDados(); // retorna erro por estar dentro de um bloco {}


