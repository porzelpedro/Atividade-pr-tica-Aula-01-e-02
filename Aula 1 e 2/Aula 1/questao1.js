// Exercício 1 — Loja Online (Operadores, if/else e Ternário)
const valorEntrada = prompt("Digite o valor total da compra (ex: 200):");
const isVipEntrada = prompt("Você é cliente VIP? (digite 'sim' ou 'não')");
const cupomEntrada = prompt("Digite o cupom de desconto (se houver):");
const parcelasEntrada = prompt("Em quantas vezes deseja parcelar?");

let valorTotal = Number(valorEntrada);
const isVip = isVipEntrada ? isVipEntrada.trim().toLowerCase() === "sim" : false;
const cupom = cupomEntrada ? cupomEntrada.trim().toUpperCase() : "";
const parcelas = Number(parcelasEntrada);

if (Number.isNaN(valorTotal) || valorTotal <= 0 || !Number.isInteger(parcelas) || parcelas <= 0) {
    console.error("Valores inválidos inseridos para o valor da compra ou parcelas.");
} else {
    if (isVip) {
        valorTotal *= 0.80; 
    } else if (valorTotal > 150) {
        valorTotal *= 0.90; 
    }
    valorTotal = (cupom === "PROMO10") ? valorTotal * 0.90 : valorTotal;

    valorTotal = parcelas > 3 ? valorTotal * 1.02 : valorTotal;

    const valorParcela = valorTotal / parcelas;

    console.log("=== EXERCÍCIO 1 ===");
    console.log(`Preço final: R$ ${valorTotal.toFixed(2)}`);
    console.log(`Número de parcelas: ${parcelas}x`);
    console.log(`Valor por parcela: R$ ${valorParcela.toFixed(2)}`);
}