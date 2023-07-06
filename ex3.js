const cartaoDeConsumo = {
    nomeDoCliente: "Rafael",
    idade: 21,
    produtosConsumidos: [{ nome: "Água", preco: 200, quantidadeComprada: 4 }, { nome: "Vodka",  preco: 700,  quantidadeComprada: 2}, { nome: "Cerveja", preco: 350,   quantidadeComprada: 10 }]
}

console.log(cartaoDeConsumo.nomeDoCliente)

console.log(cartaoDeConsumo.idade)

cartaoDeConsumo.idade = 22

console.log(cartaoDeConsumo.idade)

console.log(cartaoDeConsumo.produtosConsumidos[0].nome)


console.log(cartaoDeConsumo.produtosConsumidos[cartaoDeConsumo.produtosConsumidos.length - 1].preco)
