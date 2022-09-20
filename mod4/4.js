// operador REST, é bem semelhante ao SPREAD 

function adicionar(...numbers){
    return numbers;
}

console.log("Usando operador REST ",adicionar(10,20,20,20,40,50,1200));

//exercício com Spread e REST 

function adiciona2(nomes,...novosNomes){
    let novoConjunto = [
        ...nomes,
        ...novosNomes,

    ];
    return novoConjunto;
}

let nomes = ["João", "Maria"];
let outros = adiciona2(nomes,"José","Carlos","Siqueira");
console.log("Array com tudo junto:  ",outros);