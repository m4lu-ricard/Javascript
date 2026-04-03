const precos = {
    gasolina: 6.79,
    etanol: 5.40,
    diesel: 6.20
};

const formatarMoeda = (valor) => {
    return "R$ " + valor.toLocaleString('pt-BR', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
};

const calcularAbastecimento = (precoCombustivel, litros) => {
    const displayResultado = document.getElementById("resultado");
    
    if (litros <= 0 || isNaN(litros)) {
        displayResultado.textContent = "Valores negativos ou inválidos não são permitidos.";
        return;
    }

    const valorTotal = precoCombustivel * litros;
    displayResultado.textContent = formatarMoeda(valorTotal);
};

const atualizarValor = () => {
    const tipo = document.getElementById("combustivel").value;
    const litrosInput = document.getElementById("litros").value;

    if (tipo === "") {
        alert("Por favor, selecione um tipo de combustível.");
        document.getElementById("resultado").textContent = "";
        return;
    }

    if (litrosInput === "") {
        alert("O campo de litros não pode estar vazio.");
        document.getElementById("resultado").textContent = "";
        return;
    }

    const litros = parseFloat(litrosInput);
    const precoPorLitro = precos[tipo];

    calcularAbastecimento(precoPorLitro, litros);
};

const btnCalcular = document.getElementById("btnCalcular");
btnCalcular.addEventListener("click", atualizarValor);

const inputLitros = document.getElementById("litros");

inputLitros.addEventListener("input", () => {
    if (inputLitros.value < 0) {
        inputLitros.value = "";
    }
});

inputLitros.addEventListener("keydown", (event) => {
    if (event.key === "-" || event.key === "+") {
        event.preventDefault();
    }
    
    if (event.key === "Enter") {
        event.preventDefault();
        atualizarValor();
    }
});