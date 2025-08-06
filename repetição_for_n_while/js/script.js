let quantidade = 0;

while (true) {
    let entrada = prompt("Quantos números você deseja cadastrar?")
    quantidade = parseInt(entrada);
    
    if (!isNaN(quantidade) && quantidade > 0) {
        break;
        } else {
            alert("Por favor, digite um numéro inteiro positivo.");
        }
}

let numeros = []
let soma = 0;

for (et i = 0; i < quantidade; i++){
    let numeroValido = false;

    while (!numeroValido){
        let entradaNumero = prompt(`Digite o numéro ${i+1}:`)
        let numero = parseFloat(entradaNumero);
        
        if (!isNaN(numero)) {
            numeros.push(numero)
            soma += numero;
            numeroValido = true;
        } else {
            alert("Valor ínvalido. Digite um numéro válido.")
        }
    }
}

console.log("Numéros digitados: ");
for (let i = 0; i < numeros.length; i ++){
    console.log(`- ${numeros[i]}`);
}

let media = soma / quantidade;

console.log(`Média dos números: ${media}`);

alert("Cadastrado concluído!\nVeja o console (F12) para os resultados.")