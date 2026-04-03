let botaoIncremento = document.getElementById("botao-incremento");
let botaoDecremento = document.getElementById("botao-decremento");
let contadorDisplay = document.getElementById("contador-display");

let inputTexto = document.getElementById("input-texto");
let charCountDisplay = document.getElementById("char-count");
let paragrafosContainer = document.getElementById("paragrafos-container");

let inputItem = document.getElementById("input-item");
let selectTipoLista = document.getElementById("tipo-lista");
let botaoAdicionarItem = document.getElementById("botao-adicionar-item");
let listasContainer = document.getElementById("listas-container");

let botaoReset = document.getElementById("botao-reset");

let count = 0;

botaoIncremento.onclick = function(){
    count++;
    contadorDisplay.textContent = count;
};

botaoDecremento.onclick = function(){
    if(count > 0){
        count--;
        contadorDisplay.textContent = count;
    } else {
        alert("O contador já está em zero!");
    }
};

inputTexto.onkeydown = function(event){
    if(event.key == "Enter" && inputTexto.value != ""){
        let novoParagrafo = document.createElement("p");
        novoParagrafo.innerHTML = inputTexto.value;
        paragrafosContainer.appendChild(novoParagrafo);
        
        inputTexto.value = ""; 
        charCountDisplay.textContent = "0"; 
    }
};

botaoReset.onclick = function(){
    count = 0;
    contadorDisplay.textContent = count;
    inputTexto.value = "";
    charCountDisplay.textContent = "0";
    inputItem.value = "";
    paragrafosContainer.innerHTML = "";
    listasContainer.innerHTML = "";
};

inputTexto.addEventListener("input", function(event){
    let textoSemEspaco = event.target.value.replace(/\s/g, "");
    charCountDisplay.textContent = textoSemEspaco.length;
});

botaoAdicionarItem.addEventListener("click", () => {
    let textoDoItem = inputItem.value;
    
    if(textoDoItem != ""){
        let tipoLista = selectTipoLista.value; 
        
        let listaAtual = listasContainer.querySelector(tipoLista);
        if(listaAtual == null){
            listaAtual = document.createElement(tipoLista);
            listasContainer.appendChild(listaAtual);
        }

        let novoLi = document.createElement("li");
        novoLi.textContent = textoDoItem;
        listaAtual.appendChild(novoLi);

        inputItem.value = ""; 
    }
});