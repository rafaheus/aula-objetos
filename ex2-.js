const cartaoDeConsumo = {
    nomeDoCliente: "Rafael",
    idade: 21,
    produtosConsumidos: [{ nome: "Água", preco: 200, quantidadeComprada: 4 }, { nome: "Vodka",  preco: 700,  quantidadeComprada: 2}, { nome: "Cerveja", preco: 350,   quantidadeComprada: 10 }]
}

if (cartaoDeConsumo.produtosConsumidos !== undefined) {
    aPagarAgua = cartaoDeConsumo.produtosConsumidos[0].quantidadeComprada * cartaoDeConsumo.produtosConsumidos[0].preco
    aPagarVodka = cartaoDeConsumo.produtosConsumidos[1].quantidadeComprada * cartaoDeConsumo.produtosConsumidos[1].preco
    aPagarCerveja = cartaoDeConsumo.produtosConsumidos[2].quantidadeComprada * cartaoDeConsumo.produtosConsumidos[2].preco
    totalAPagar = aPagarAgua + aPagarVodka + aPagarCerveja
}

console.log(`O cliente ${cartaoDeConsumo.nomeDoCliente} deverá pagar R$ ${totalAPagar} no caixa na saída.`)
for (produto of cartaoDeConsumo.produtosConsumidos) {
    console.log(`${cartaoDeConsumo.produtosConsumidos[0].nome} - Quantidade :  ${cartaoDeConsumo.produtosConsumidos[0].quantidadeComprada} - Valor a pagar: ${(aPagarAgua / 100).toFixed(2)} `)
    console.log(`${cartaoDeConsumo.produtosConsumidos[1].nome} - Quantidade :  ${cartaoDeConsumo.produtosConsumidos[1].quantidadeComprada} - Valor a pagar: ${(aPagarVodka / 100).toFixed(2)} `)
    console.log(`${cartaoDeConsumo.produtosConsumidos[2].nome} - Quantidade :  ${cartaoDeConsumo.produtosConsumidos[2].quantidadeComprada} - Valor a pagar: ${(aPagarCerveja / 100).toFixed(2)} `)
    break
}
