function desenharTriangulo() {
    let linhas = parseInt(prompt("Digite o número de linhas para o triângulo:"));
    
    for (let i = 1; i <= linhas; i++) {
        console.log("*".repeat(i)); 
    }
}