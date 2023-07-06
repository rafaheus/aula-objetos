const pessoa = {
    nome: "Rafael",
    idade: 21,
    altura: 1.82,
    temCNH: false,
    apelidos: ["Rafa", "Rafinha"]
}

//if (!pessoa.temCNH) {
  //  pessoa.temCNH = "não possui CNH"
//} else {
//    pessoa.temCNH = "possui CNH"
//}

const textoCNH = pessoa.temCNH ? "possui CNH" : "não possui CNH"; //(condicao ? valorVerdadeiro : valorFalso)

console.log(`${pessoa.nome} tem ${pessoa.idade} anos, ${pessoa.altura}m de altura, ${textoCNH} e os seguintes apelidos:`)
for (let apelido of pessoa.apelidos) {
    console.log(`- ${apelido}`)
}