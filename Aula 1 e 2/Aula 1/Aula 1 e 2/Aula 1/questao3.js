// Exercício 3 — Classificação numérica + verificação de primo
function ehPrimo(n) {
    if (n <= 1) return false;
    if (n === 2) return true;
    if (n % 2 === 0) return false;

    const limite = Math.sqrt(n);
    for (let i = 3; i <= limite; i += 2) {
        if (n % i === 0) return false;
    }
    return true;
}

const entrada = prompt("Digite um número inteiro:");
const num = Number(entrada);

if (!Number.isInteger(num)) {
    console.error("O valor inserido não é um número inteiro válido.");
} else {
  
    let sinal = "";
    if (num > 0) {
        sinal = "Positivo";
    } else if (num < 0) {
        sinal = "Negativo";
    } else {
        sinal = "Zero";
    }

    const paridade = (Math.abs(num) % 2 === 0) ? "Par" : "Ímpar";

    const primo = ehPrimo(num);

    console.log("=== EXERCÍCIO 3 ===");
    console.log(`Número analisado: ${num}`);
    console.log(`Sinal: ${sinal}`);
    console.log(`Paridade: ${paridade}`);
    console.log(`É primo?: ${primo ? "Sim" : "Não"}`);
    console.log("\nExplicação do teste de primalidade:");
    console.log("- Números <= 1 não são primos.");
    console.log("- 2 é o único primo par.");
    console.log("- Para números maiores que 2, descartamos pares e verificamos apenas divisores ímpares até a raiz quadrada do número (eficiência O(√n)).");
}