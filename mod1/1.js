//--Exemplos

function olaGalera() {
    return "Oi";
}
console.log(olaGalera());

function maiorDeIdade(idade) {
    if (idade > 18) {
        return "maior de idade"
    } else {
        return "menor de idade"
    }
}
console.log(maiorDeIdade(22));
//----------- exercício 
// Calcule a porcentagem entre 2 números. 
function porcentagem(a, b) {
    let calculo = (a / b) * 100
    console.log(`A porcentagem é ${calculo}`);
}
porcentagem(40, 10);

//Calcular o preço do imóvel 
// m2 - 3000
// Se tiver 1 quarto, m2 é 1x
// Se tiver 2 quarto, m2 é 1.2x
// Se tiver 3 quarto, m2 é 1.5x

let metroQuadradoPreco = 3000
function calculoMetragem(metros, quartos) {
    if (quartos === 1) {
        return `O valor é: ${metroQuadradoPreco * metros}`
    } else if (quartos == 2) {
        return `O valor é: ${metroQuadradoPreco * (metros * 1.2)}`
    } else {
        return `O valor é: ${metroQuadradoPreco * (metros * 1.5)}`
    }
}
console.log(calculoMetragem(123, 1));
console.log(calculoMetragem(123, 2));
console.log(calculoMetragem(123, 3));

//verificar se uduario e senha estão certos
let usuarioFinal = "Afonso"
let senhaFinal = 111
function validador(nomeUsuario, senhaUsuario) {
    if (nomeUsuario === usuarioFinal && senhaUsuario === senhaFinal) {
        return "Liberar acesso"
    } else {
        return "Acesso negado!"
    }
}
console.log(validador("Afonso",111));
console.log(validador("Afonso44",44));

//arrow function 
let soma = (a,b) => {
    return a+b
}
console.log("Usando Arrow function: " + soma(10,5));

let arrowUmParametro = parametro => "Arrow " + parametro;
console.log(arrowUmParametro("qualquer coisa em um parametro"));



