//while
let numero = 0
while (numero < 5) {
    console.log("O número é: " + numero);
    numero++
}

//mostrar todas as frutas
let frutas = ['maça', 'uva', 'banana', 'laranja']
for (let x = 0; x < frutas.length; x++) {
    console.log("Primeiro exercicio com frutas " + frutas[x]);
}
let usandoWhile = 0;
while (usandoWhile < frutas.length) {
    console.log("usando While com frutas " + frutas[usandoWhile]);
    usandoWhile++
}

//conte até 150 com while
let numeroInicial = 0;
while (numeroInicial <= 150) {
    console.log("O número atual é: ", numeroInicial);
    numeroInicial++
}