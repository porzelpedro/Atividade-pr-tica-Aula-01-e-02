// Exercício 5 — Carrinho: desconto, cupom e parcelamento
const precoBaseEntrada = prompt("Digite o preço base do produto:");
const isVipEntrada = prompt("O cliente é VIP? (digite 'sim' ou 'não')");
const cupomEntrada = prompt("Digite o cupom de desconto (se houver):");
const parcelasEntrada = prompt("Digite o número de parcelas:");

let preco = Number(precoBaseEntrada);
const isVip = isVipEntrada ? isVipEntrada.trim().toLowerCase() === "sim" : false;
const cupom = cupomEntrada ? cupomEntrada.trim().toUpperCase() : "";
const parcelas = Number(parcelasEntrada);

if (Number.isNaN(preco) || preco <= 0 || !Number.isInteger(parcelas) || parcelas <= 0) {
    console.error("Entrada inválida detectada para preço ou quantidade de parcelas.");
} else {
    
    if (isVip) {
        preco *= 0.80; 
    } else if (preco > 150) {
        preco *= 0.90; 
    }

    if (cupom === "PROMO10") {
        preco *= 0.90; 
    }

    const taxaImposto = 0.12;
    const valorImposto = preco * taxaImposto;
    let totalComImposto = preco + valorImposto;

    if (parcelas > 3) {
        totalComImposto *= 1.02;
    }

    const valorParcela = totalComImposto / parcelas;

    console.log("=== EXERCÍCIO 5 ===");
    console.log(`Preço final com taxas/impostos: R$ ${totalComImposto.toFixed(2)}`);
    console.log(`Valor do Imposto (12%): R$ ${valorImposto.toFixed(2)}`);
    console.log(`Número de parcelas: ${parcelas}x`);
    console.log(`Valor de cada parcela: R$ ${valorParcela.toFixed(2)}`);
    console.log(`typeof do resultado final (totalComImposto): ${typeof totalComImposto}`);
}