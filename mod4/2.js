//desconstruição de Arrays
let array = ['Bonieky','Joneas','Valdir'];
let [primeiroNome,sobrenome,primo] = array
console.log(primeiroNome,sobrenome,primo);

let [primeiroNumero,segundoNumero, idade=99] = ['numero10', 'numeor20']

console.log("Desconstruir Array e já iniciar variáveis " + primeiroNome, segundoNumero, idade);

//por função

function criar() {
    return [50,100,200];

}
let [a,b,c] = criar();

console.log("Desconstrução por função " + a,b,c);