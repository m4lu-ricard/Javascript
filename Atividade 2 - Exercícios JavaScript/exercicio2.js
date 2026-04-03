function pedraPapelTesoura() {
    const opcoes = ["pedra", "papel", "tesoura"];
    let escolhaUsuario = prompt("Escolha: Pedra, Papel ou Tesoura?").toLowerCase();
    
    let indiceComputador = Math.floor(Math.random() * 3);
    let escolhaComputador = opcoes[indiceComputador];

    if (!opcoes.includes(escolhaUsuario)) {
        console.log("Opção inválida! Digite pedra, papel ou tesoura.");
        return;
    }

    console.log(`Você escolheu: ${escolhaUsuario}`);
    console.log(`Computador escolheu: ${escolhaComputador}`);

    if (escolhaUsuario === escolhaComputador) {
        console.log("Resultado: Empate!");
    } else if (
        (escolhaUsuario === "pedra" && escolhaComputador === "tesoura") ||
        (escolhaUsuario === "papel" && escolhaComputador === "pedra") ||
        (escolhaUsuario === "tesoura" && escolhaComputador === "papel")
    ) {
        console.log("Resultado: Você venceu!");
    } else {
        console.log("Resultado: O computador venceu!");
    }
}