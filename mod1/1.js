//--Exemplos

function olaGalera() {
    return "Oi";
}
console.log(olaGalera());

function maiorDeIdade(idade){
    if (idade >18) {
        return "maior de idade"
    }else{
        return "menor de idade"
    }
}
console.log(maiorDeIdade(22));
//----------- exercício 
// Calcule a porcentagem entre 2 números. 
function porcentagem(a,b){
    let calculo = (a/b)/100
    console.log(`A porcentagem é ${calculo}`);
}
porcentagem(10,5);
