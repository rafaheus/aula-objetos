const pessoa = {
    nome: "Rafael",
    idade: 21,
    cidade: "Vila Velha",
    profissao: "Dev"
};

//const nome = pessoa.nome;
//const idade = pessoa.idade;

const {nome, idade, ...outros} = pessoa;

console.log(nome, idade);

console.log(outros);