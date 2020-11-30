// Tudo é Objeto

// Strings, Números, Boolean, Objetos e mais, possuem propriedades
// e métodos. Por isso são objetos.
// Uma string herda propriedades e métodos do construtor String()

var nome = 'André'; 
nome.length;               // 5 - length é uma propriedade
nome.charAt(1);            // 'n' - conta o indice do caracter 
nome.replace('ré', 'rei'); // 'Andrei' - substitui ré por rei
nome;                      // 'André'

// Os métodos e propriedades não modificas a variável nome (André)
// É possível colocar o método replace em uma variável
// para ser acessada e utilizada como quiser

// Uma string herda propriedades e
// métodos do construtor String()

// Acessar uma propriedade ou método de um objeto

nome.length         // Ex: - Enter >> okey  = propriedade
// nome.length()    // Ex: - Enter >> error = ñ é método

nome.toLowerCase()  // Ex: - Enter >> okey  = método
// nome.toLowerCase // Ex: - Enter >> error = ñ é propriedade

// Guardar método na variável 
var nomeMinusculo = nome.toLowerCase();

// Exemplo com número
var altura = 1.8;
altura.toString(); // '1.8' - Converte para string
altura.toFixed(); // '2'    - Arredonda para 2

// Por um breve momento o número é
// envolvido em um Objeto
// (coerção), tendo acesso assim as
// suas propriedades e métodos

//Funções também possuem métodos e propriedades
function areaQuadrado (lado) {
    return lado * lado
}
areaQuadrado.toString();        // Pegou a função e colocou dentro de uma String
//  "function areaQuadrado(lado) {
//    return lado * lado
//  }"
areaQuadrado.length; // 1 -    // Retornou o total de parâmetros que a função pode levar.

// Outro exemplo
// No console addEventListener.length // 2
// Informa que são dois parâmetros podem ser passados. Ex: 'click' e o callback

// Elementos do DOM
// Criamos o elemento <a>(link) no html

// Para selecionar um documento pelo JavaScript é necessário falar com o objeto document( pg do html)
// Usamos querySelector para selecionar uma tag/elemento do html - usamos o seletor .btn
var btn = document.querySelector('.btn')

// Fez uma interação de clicar e exibir um alert dentro da função callback 
btn.addEventListener('click', function(){
    return alert("Você clicou")
    }
);
// Praticamente todos os efeitos com JS são feitos utilizando propriedades 
// e métodos de objetos do DOM

// btn.classList               - mostrou as classes do elemento
// btn.classList.add ('ativo') - adicionou mais uma classe 'ativo' no document / não no html
// btn.innerText               - retorna o valor 'Clique aqui'


// OBJETOS REVOLUCIONARAM A PROGRAMAÇÃO

// Essas propriedades e métodos como addEventListener, querySelector, etc.
// São chamadas de API's da web - Permitem a interação JavaScript e Browser


// EXERCICIOS

// Nomeie 3 propriedades ou métodos de strings
var nome = 'nome'                         // Apenas para checar
// length
// normalize()
// replace()

// Nomeie 5 propriedades ou métodos de elementos do DOM
var but = document.querySelector('btn');  // Apenas para checar
// addEventListener()
// querySelector()
// innerText()
// scrollWidth
// setAttributeNodeNS()

// Busque na web um objeto (método) capaz de interagir com o clipboard
// Clipboard é a parete do seu computador que lida com o CTRL + C e CTRL + V


// Criamos uma função para copiar conteudo
function copiarCont() {
     // Chamamos o método getElementById para pegar através do ID 
    var copiarTexto = document.getElementById("copiar"); 
    // Selecionamos o texto 
    copiarTexto.select();
    // Definimos o alcance da seleção
    copiarTexto.setSelectionRange(0, 99999)
    // Método executa comando 'copy'
    document.execCommand("copy");
    alert("Texto copiado: " + copiarTexto.value);
  }
