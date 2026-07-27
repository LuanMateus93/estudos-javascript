let nomePersonagem1 = window.prompt("Insira o nome do primeiro personagem:");
let poderAtaquePersonagem = parseFloat(window.prompt("Insira o poder do primeiro personagem:"));

let nomePersonagem2 = window.prompt("Insira o nome do segundo personagem:");
let pontosDeVidaSegundoPersonagem = parseFloat(window.prompt("Insira a vida do segundo personagem:"));
let poderDeDefesaSegundoPersonagem = parseFloat(window.prompt("Insira o poder de defesa do segundo personagem:"));
let possuiEscudo = window.prompt("Possui escudo:");

let dano = 0;

if (poderAtaquePersonagem > poderDeDefesaSegundoPersonagem && possuiEscudo === "Não") {
    dano = poderAtaquePersonagem - poderDeDefesaSegundoPersonagem;
}else if (poderAtaquePersonagem > poderDeDefesaSegundoPersonagem && possuiEscudo === "Sim") {
    dano = (poderAtaquePersonagem - poderDeDefesaSegundoPersonagem) / 2;
}

let vidaFinal = pontosDeVidaSegundoPersonagem - dano;

window.alert("Nome personagem atacante: " + nomePersonagem1 +
    "\nPoder de ataque do personagem atacante: " + poderAtaquePersonagem +
    "\n================================" +
    "\nNome personagem defensor: " + nomePersonagem2 +
    "\nPontos de vida do personagem defensor: " + vidaFinal +
    "\nPontos de defesa do personagem defensor: " + poderDeDefesaSegundoPersonagem +
    "\nPossui escudo: " + possuiEscudo +
    "\n================================" +
    "\nDano causado: " + dano
);