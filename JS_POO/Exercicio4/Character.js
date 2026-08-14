export class Character {
    constructor(nome, pontosVida, pontosAtaque, pontosDefesa) {
        this.nome = nome;
        this.pontosVida = pontosVida;
        this.pontosAtaque = pontosAtaque;
        this.pontosDefesa = pontosDefesa;
    }

    atacar(personagemAlvo) {
        personagemAlvo.pontosVida -= this.pontosAtaque - personagemAlvo.pontosDefesa
    }
}