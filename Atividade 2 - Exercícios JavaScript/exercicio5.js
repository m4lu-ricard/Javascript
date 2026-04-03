function somaSerieTermos() {
    let quantidadeTermos = parseInt(prompt("Digite a quantidade de termos:"));
    let soma = 0;
    let termoAtual = 0;
    let visualizacaoSerie = [];

    for (let i = 1; i <= quantidadeTermos; i++) {
        termoAtual = (termoAtual * 10) + 1;
        soma += termoAtual;
        visualizacaoSerie.push(termoAtual);
    }

    console.log(visualizacaoSerie.join(" + "));
    console.log(`A soma é: ${soma.toLocaleString('pt-BR')}`); 
}