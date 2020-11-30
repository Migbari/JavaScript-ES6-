// Navegação por Tabs

// Seleciona conteúdo para interação 
const tabMenu = document.querySelectorAll('.js_tabmenu li');
const tabContent = document.querySelectorAll('.js_tabcontent section');

// Se não existir alguma das seleções, não executa
if(tabMenu.length && tabContent.length) {
    // Adiciona classe ao primeiro item 
    tabContent[0].classList.add('ativo')
    // Para cada item adiciona classe ativo
    function activeTab(index) {
        // Retira classe ativo ao adicionar em outra section
        tabContent.forEach((section) => {
            section.classList.remove('ativo');
        });
        tabContent[index].classList.add('ativo');
    }
    // Percorre cada item, adiciona classe ativo com evento click em cada imagem(itemMenu)
    tabMenu.forEach((itemMenu, index) => {
        itemMenu.addEventListener('click',  () => {
            activeTab(index);
        });
    });
} 
