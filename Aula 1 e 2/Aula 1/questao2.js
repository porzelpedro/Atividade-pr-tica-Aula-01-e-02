//Exercício 2 — Operações completas e validação
const entradaA = prompt("Digite o primeiro valor:");
const entradaB = prompt("Digite o segundo valor:");

const a = Number(entradaA);
const b = Number(entradaB);

if (Number.isNaN(a) || Number.isNaN(b)) {
    console.error("Um ou ambos os valores inseridos não são números válidos.");
} else {
    const soma = a + b;
    const diferenca = a - b;
    const produto = a * b;
    const divisao = (b === 0) ? "Erro: Divisão por zero" : a / b;
    const resto = (b === 0) ? "Erro: Divisão por zero" : a % b;

    let comparacao = "";
    if (a > b) {
        comparacao = `${a} é maior que ${b}`;
    } else if (b > a) {
        comparacao = `${b} é maior que ${a}`;
    } else {
        comparacao = "Os números são iguais";
    }

    console.log("=== EXERCÍCIO 2 ===");
    console.log(`Soma: ${soma} | typeof: ${typeof soma}`);
    console.log(`Diferença: ${diferenca} | typeof: ${typeof diferenca}`);
    console.log(`Produto: ${produto} | typeof: ${typeof produto}`);
    console.log(`Divisão: ${divisao} | typeof: ${typeof divisao}`);
    console.log(`Resto: ${resto} | typeof: ${typeof resto}`);
    console.log(`Comparação: ${comparacao}`);
}