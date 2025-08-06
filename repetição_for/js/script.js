let entrada = prompt('Entre com o contador: ')

if (entrada == null || entrada.trim() === ' ' || isNaN(Number(entrada))){
    alert("entrada inválida! Digite um número.");
} else { 
    let cont = Number(entrada);
    for (let c = 0; c < 5; c++) {
        console.log(`Contador do for = ${c} || Var controladora = ${cont}`);
        cont += 1;
    }