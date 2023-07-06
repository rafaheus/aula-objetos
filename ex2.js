const produtos = {
    agua: {
        nome: "Água",
        preco: 2,
        quantidadeComprada: 4
    },
    vodka: {
        nome: "Vodka",
        preco: 7,
        quantidadeComprada: 2
    },
    cerveja: {
        nome: "Cerveja",
        preco: 3.50,
        quantidadeComprada: 10
    }
}

const cartaoDeConsumo = {
    nomeDoCliente: "Rafael",
    idade: 21,
    produtosConsumidos: produtos
}

if (cartaoDeConsumo.produtosConsumidos !== undefined) {
    aPagarAgua = produtos.agua.quantidadeComprada * produtos.agua.preco
    aPagarVodka = produtos.vodka.quantidadeComprada * produtos.vodka.preco
    aPagarCerveja = produtos.cerveja.quantidadeComprada * produtos.cerveja.preco
    totalAPagar = aPagarAgua + aPagarVodka + aPagarCerveja
}

console.log(`O cliente ${cartaoDeConsumo.nomeDoCliente} deverá pagar R$ ${totalAPagar} no caixa na saída.`)
for (produto of cartaoDeConsumo.produtosConsumidos[0]) {
    console.log(`${produtos.agua.quantidadeComprada} de ${produtos.agua.nome}, valor a pagar: ${aPagarAgua}`)
    console.log(`${produtos.vodka.quantidadeComprada} de ${produtos.vodka.nome}, valor a pagar: ${aPagarVodka}`)
    console.log(`${produtos.cerveja.quantidadeComprada} de ${produtos.cerveja.nome}, valor a pagar: ${aPagarCerveja}`)
    break
}

