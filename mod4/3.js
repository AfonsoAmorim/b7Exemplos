//spread 
let numeros = [1,2,3];
let outros = [...numeros, 4,5,6,7];

console.log(outros);

//with objects 

let info = {
    nome: 'Bone',
    idade: 10,
}
let novaInfo = {
    ...info, //<===
    cidade:'São Paulo',
    estado: 'SP',
    pais: 'Brazil'
}
console.log(novaInfo);

//with functions 
function adicionarFunction(info){
    let novasInfo = {
        ...info,
        status: 100,
        cadastroDia: 20
    };
    return novasInfo;
}

console.log(adicionarFunction({nome: 'Valdez',sobrenome:'Lala'}));


