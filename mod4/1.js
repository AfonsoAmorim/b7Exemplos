//desconstrução de objetos 

let pessoa = {
    nome: 'Alonso',
    sobrenome: 'Gomes',
    idade: 90,
    social:{
        facebook: 'bbbb',
        instagram: 'fffhgtgjds'
    },
    nomeCompleto: function(){
        return `${this.nome} ${this.sobrenome}`
    }
};

let {nome, sobrenome,idade} = pessoa;
console.log("Primeira desconstrução: " + nome,sobrenome, idade);
let{nome:novoNomeVariavel, sobrenome:novoSobrenomeVariavel} = pessoa;
console.log("Segunda desconstrução: " + novoNomeVariavel, novoSobrenomeVariavel); // mudando nomes da variável

let {social:{instagram}} = pessoa;
console.log("Dados dentro de outros objetos: " +  instagram);

//desconstruindo por função 

function pegarNome({nome, sobrenome}) {
    return `${nome} ${sobrenome}`
}
console.log("Desconstruindo por function : " + pegarNome(pessoa));


