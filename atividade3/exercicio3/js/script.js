let nome = prompt('Digite seu nome: ')
function saudacao(nome) {
    if  (nome === null || nome === "") {
        console.log("Olá, visitante")
    } else {
    console.log("Olá, " + nome + "!");}
}

saudacao(nome)
