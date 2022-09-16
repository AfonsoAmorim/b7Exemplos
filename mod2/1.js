function clicou() {
    alert("Teste aceito!")
}

function clicouMudouTexto() {
    document.getElementById("titulo").innerHTML = "Obrigado por clicar!"
}

function digitou() {
    console.log("Você digitou!!");
}

function limpar() {
    document.getElementById("tituloCor").classList.remove("azul");
    document.getElementById("tituloCor").classList.remove("vermelho");
    document.getElementById("tituloCor").classList.remove("verde");

}

function azul() {
    limpar();
    document.getElementById("tituloCor").classList.add("azul");
}

function vermelho() {
    limpar();
    document.getElementById("tituloCor").classList.add("vermelho");
}

function verde() {
    limpar();
    document.getElementById("tituloCor").classList.add("verde");
}