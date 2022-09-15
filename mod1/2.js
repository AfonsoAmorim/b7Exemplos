//arrays 
let carros = ["corsa", "uno", "fusca"];
console.log(carros[1]);
carros.splice(1, 1, "Audi")
carros.push("Volvo")
console.log(carros);
console.log("Tamanho da lista", carros.length);

//objetos
let pessoa = {
    nome: "Alonso",
    sobrenome: "Gomes",
    idade: 99,
    nomecompleto: function () {
        return `${this.nome + '  ' + this.sobrenome}`
    }
}

console.log(pessoa);
console.log(pessoa.nomecompleto());

//mais arrays 
let cores = ["azul", "preto", "laranja", "branco"];

for (let index = 0; index < cores.length; index++) {
    console.log("arrays cores " + cores[index]);

}
for (let a in cores) {
    console.log("---------------");
    console.log(cores[a]);
}

let celulares = [
    { nome: "motorola G", valor: 1000 },
    { nome: "motorola G2", valor: 8880 },
    { nome: "motorola G3", valor: 1222000 },
]
for (let b of celulares) {
    console.log("--------- segunda forma de percorrer objetos \n");
    console.log(b.nome + ' ' + b.valor);
}


for (let b of celulares) {
    console.log("--------- só o valor \n");
    console.log(+ b.valor);
}