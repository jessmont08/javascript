
let nome = prompt("Digite seu nome:");
let sobrenome = prompt("Digite seu sobrenome:");
let email = prompt("Digite seu e-mail:");
let itens = prompt("Digite os itens separados por vírgula:");


if (!nome || !sobrenome || !email || !itens) {
  alert("Todos os campos são obrigatórios.");
} else {
    nome = nome.trim();
    sobrenome = sobrenome.trim();
    email = email.trim().toLowerCase();
    let nomeCompleto = nome.concat(" ", sobrenome);
    let listaItens = itens.split(",").map(item => item.trim());
    if (!email.includes("@")) {
        console.error("Email inválido.");
        } else {
        console.log("Email OK.");
        }

  console.log("Nome completo:", nomeCompleto);
  console.log("E-mail:", email);
  console.log("Itens desejados:", listaItens);
}
