//preços
const precoGasolina = 6.79;
const precoEtanol = 5.40;
const precoDiesel = 6.20;

function atualizarValor(){
    let tipo = document.getElementById("combustivel").value;
    console.log(tipo);
    let precoPorLitro;
    let litros = parseFloat(document.getElementById("litros").value);
    switch (tipo){
        case "gasolina":
            precoPorLitro = precoGasolina;
            break;
        case "etanol":
            precoPorLitro = precoEtanol;
            break;
        case "diesel":
            precoPorLitro = precoDiesel;
            break;
        default:
            console.log("Escolha uma opção");
            return;
    };
    console.log(precoPorLitro);
    calcularAbastecimento(precoPorLitro, litros);
};

function calcularAbastecimento(precoCombustivel, litros){
    //let valorTotal = precoCombustivel * litros;
    //document.getElementById("resultado").textContent = valorTotal;
    if (litros<=0 || isNaN(litros)){
        document.getElementById("resultado").textContent = "Insira um valor";
        return;
    } else {
        let valorTotal = precoCombustivel * litros;
        document.getElementById("resultado").textContent = formatarMoeda(valorTotal);
    }
};

let tipoCombustivel = document.getElementById("combustivel");
tipoCombustivel.addEventListener("change", atualizarValor);

let litros = document.getElementById("litros");
litros.addEventListener("input", atualizarValor);

//corrigir o pressionar a tecla Enter (preventDefault)
litros.addEventListener("keydown", function(event){
    if(event.key == "Enter"){
        event.preventDefault();
        atualizarValor();
    }
});
//formatar o resultado final R$ 00,00. (toFixed ou toLocaleString)
function formatarMoeda(valor){
    return "R$ " + valor.toLocaleString('pt-BR', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
});
};