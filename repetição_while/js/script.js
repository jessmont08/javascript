let entrada = prompt('Entre com o contador: ')

if (entrada == null || entrada.trim() === ' ' || isNaN(Number(entrada))){
    alert("entrada inválida! Digite um número.");
} else {
    let cont = Number(entrada);
    let c = 0;
    
    while (c < 5) {
        console.log(`Contador do while = ${c} || Var controlador = ${cont}`);
        cont += 1;
        c += 1;
    }
}

