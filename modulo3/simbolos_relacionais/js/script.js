let idade = prompt("Qual a sua idade?");
let temSenha = prompt("Você tem a senha de acesso? (sim/não)");

idade = Number(idade);
temSenha = temSenha.toLowerCase();

if (idade >= 18 && temSenha === "sim") {
    alert("Acesso permitido!");
} else if (dade < 18 || temSenha === "não") {
    alert("Acesso negado: idade insuficiente ou senha inválida.");
} else {
    alert("Dados inválidos. Tente novamente.")
}