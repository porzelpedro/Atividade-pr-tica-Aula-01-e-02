// Exercício 4 — Média ponderada com recuperação
const n1 = Number(prompt("Digite a Nota 1 (Peso 2):"));
const n2 = Number(prompt("Digite a Nota 2 (Peso 3):"));
const n3 = Number(prompt("Digite a Nota 3 (Peso 5):"));

const p1 = 2, p2 = 3, p3 = 5;

if (Number.isNaN(n1) || Number.isNaN(n2) || Number.isNaN(n3)) {
    console.error("Uma ou mais notas inseridas são inválidas.");
} else {
    const mediaPonderada = ((n1 * p1) + (n2 * p2) + (n3 * p3)) / (p1 + p2 + p3);
    console.log("=== EXERCÍCIO 4 ===");
    console.log(`Média Ponderada Inicial: ${mediaPonderada.toFixed(2)}`);

    if (mediaPonderada >= 7) {
        console.log("Situação: Aprovado");
    } else if (mediaPonderada < 5) {
        console.log("Situação: Reprovado");
    } else {
        console.log("Situação: Recuperação");
        const notaExame = Number(prompt("Aluno em recuperação. Digite a nota do exame:"));

        if (Number.isNaN(notaExame) || notaExame < 0 || notaExame > 10) {
            console.error("Nota do exame inválida. Operação cancelada.");
        } else {
            const mediaFinal = (mediaPonderada + notaExame) / 2;
            const statusFinal = mediaFinal >= 6 ? "Aprovado na Recuperação" : "Reprovado na Recuperação";
            
            console.log(`Nota do Exame: ${notaExame.toFixed(2)}`);
            console.log(`Média Final: ${mediaFinal.toFixed(2)}`);
            console.log(`Resultado Final: ${statusFinal}`);
        }
    }
}