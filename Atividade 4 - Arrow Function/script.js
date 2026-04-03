const precos = {
    gasolina: 6.79,
    etanol: 5.40,
    diesel: 6.20
};

const formatarMoeda = (valor) => {
    return valor.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    });
};

const calcularAbastecimento = (precoCombustivel, litros) => {
    const displayResultado = document.getElementById("resultado");
    
    if (isNaN(litros) || litros <= 0) {
        displayResultado.textContent = "Insira um valor válido e positivo.";
        return;
    }

    const valorTotal = precoCombustivel * litros;
    displayResultado.textContent = formatarMoeda(valorTotal);
};

const atualizarValor = () => {
    const tipo = document.getElementById("combustivel").value;
    const litrosInput = document.getElementById("litros").value;
    const litros = parseFloat(litrosInput);

    const precoPorLitro = precos[tipo];

    if (!precoPorLitro) {
        alert("Escolha uma opção de combustível!");
        return;
    }

    if (litrosInput === "") {
        alert("O campo litros está vazio!");
        return;
    }

    calcularAbastecimento(precoPorLitro, litros);
};

const selectCombustivel = document.getElementById("combustivel");
const inputLitros = document.getElementById("litros");

selectCombustivel.addEventListener("change", atualizarValor);
inputLitros.addEventListener("input", atualizarValor);

inputLitros.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        event.preventDefault();
        atualizarValor();
    }
});