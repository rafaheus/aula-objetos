// spread ...

const pessoa = {
    nome: "Rafael",
    idade: 21,
    cidade: "Vila Velha",
    profissao: "Dev"
};

const endereco = {
    rua: "Aqui",
    numero: "32",
    bairro: "Bairro Legal"
};

//const objetoFundido = {
//    nome: pessoa.nome,
 //  idade: pessoa.idade,
 //   rua: endereco.rua
//}

const objetoFundido = {
    ...pessoa,
    ...endereco,
    novaPropriedade: 20
};

console.log(objetoFundido);