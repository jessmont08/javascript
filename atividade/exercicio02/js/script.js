const anoNascimento = prompt("Insira o ano de nascimento:");
const anoAtual = new Date().getFullYear();
const idade = anoAtual - Number(anoNascimento);

console.log("A idade é" + idade);
