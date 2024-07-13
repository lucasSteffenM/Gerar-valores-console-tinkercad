// Seleciona o elemento HTML
const element = document.querySelector('.js-code_panel__serial__text');

// Variável para armazenar o último valor impresso
let lastPrintedValue = '';

// Função para pegar e imprimir o último elemento
function printLastElement() {
    // Pega o texto dentro do elemento
    const text = element.textContent;

    // Divide o texto em linhas
    const lines = text.trim().split('\n');

    // Pega o último elemento da matriz de linhas
    const lastElement = lines[lines.length - 1];

    // Verifica se o último elemento é diferente do último valor impresso
    if (lastElement !== lastPrintedValue) {
        // Imprime o último elemento no console
        console.log(lastElement);

        // Atualiza o último valor impresso
        lastPrintedValue = lastElement;
    }
}

// Cria um observador de mutação
const observer = new MutationObserver((mutationsList, observer) => {
    // Verifica cada mutação
    for(const mutation of mutationsList) {
        // Se um nó filho for adicionado ao elemento observado
        if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
            // Chama a função para pegar e imprimir o último elemento
            printLastElement();
        }
    }
});

// Configurações para observar mudanças no conteúdo do nó e subnós
const config = { childList: true, subtree: true };

// Inicia a observação no elemento alvo
observer.observe(element, config);
