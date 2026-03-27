// 1. Buscando e guardando os elementos do DOM em variáveis
const btnIncrement = document.getElementById('btn-increment');
const btnDecrement = document.getElementById('btn-decrement');
const contadorDisplay = document.getElementById('contador-display');

const inputTexto = document.getElementById('input-texto');
const charCountDisplay = document.getElementById('char-count');
const paragrafosContainer = document.getElementById('paragrafos-container');

const inputItem = document.getElementById('input-item');
const selectTipoLista = document.getElementById('tipo-lista');
const btnAdicionarItem = document.getElementById('btn-adicionar-item');
const listasContainer = document.getElementById('listas-container');

const btnReset = document.getElementById('btn-reset');

// Variável de controle do contador
let count = 0;

// --- FUNCIONALIDADE 1: Contador de Cliques ---
btnIncrement.addEventListener('click', () => {
    count++;
    contadorDisplay.textContent = count;
});

btnDecrement.addEventListener('click', () => {
    if (count > 0) {
        count--;
        contadorDisplay.textContent = count;
    } else {
        alert('O contador já está em zero!');
    }
});

// --- FUNCIONALIDADE 2 E 3: Texto Dinâmico e Contador de Caracteres ---
// Evento 'input' dispara a cada letra digitada
inputTexto.addEventListener('input', (e) => {
    // A expressão regular /\s/g encontra todos os espaços na string para removê-los
    const textoSemEspaco = e.target.value.replace(/\s/g, '');
    charCountDisplay.textContent = textoSemEspaco.length;
});

// Evento 'keypress' para escutar a tecla Enter
inputTexto.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && inputTexto.value.trim() !== '') {
        const novoParagrafo = document.createElement('p');
        novoParagrafo.textContent = inputTexto.value;
        paragrafosContainer.appendChild(novoParagrafo);
        
        // Limpa o campo e o contador de caracteres
        inputTexto.value = ''; 
        charCountDisplay.textContent = '0'; 
    }
});

// --- FUNCIONALIDADE 4: Adicionar Novo Item ---
btnAdicionarItem.addEventListener('click', () => {
    const textoDoItem = inputItem.value.trim();
    if (textoDoItem === '') return; // Evita criar itens vazios

    const tipoLista = selectTipoLista.value; // Pega o valor 'ul' ou 'ol'

    // Verifica se a lista (ul ou ol) já existe no container. Se não, cria uma.
    let listaAtual = listasContainer.querySelector(tipoLista);
    if (!listaAtual) {
        listaAtual = document.createElement(tipoLista);
        listasContainer.appendChild(listaAtual);
    }

    // Cria o item da lista (li) e anexa à lista
    const novoLi = document.createElement('li');
    novoLi.textContent = textoDoItem;
    listaAtual.appendChild(novoLi);

    inputItem.value = ''; // Limpa o campo de input
});

// --- FUNCIONALIDADE 5: Botão de Reset ---
btnReset.addEventListener('click', () => {
    // Zera o contador
    count = 0;
    contadorDisplay.textContent = count;
    
    // Limpa campos de texto
    inputTexto.value = '';
    charCountDisplay.textContent = '0';
    inputItem.value = '';
    
    // Remove todo o HTML gerado dinamicamente
    paragrafosContainer.innerHTML = '';
    listasContainer.innerHTML = '';
});