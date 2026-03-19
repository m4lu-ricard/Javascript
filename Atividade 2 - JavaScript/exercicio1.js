function adivinharNumero() {
    const numeroSecreto = Math.floor(Math.random() * 20) + 1; 
    let acertou = false;

    while (!acertou) {
        let palpite = parseInt(prompt("Adivinhe o número secreto (entre 1 e 20):"));

        if (palpite === numeroSecreto) {
            alert("Parabéns! Você acertou.");
            acertou = true;
        } else if (palpite > numeroSecreto) {
            alert("O número secreto é menor. Tente novamente!");
        } else {
            alert("O número secreto é maior. Tente novamente!");
        }
    }
}