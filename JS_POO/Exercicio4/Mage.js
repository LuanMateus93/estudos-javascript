import { Character } from "./Character.js";

export class Mage extends Character {
    constructor(nome, pontosVida, pontosAtaque, pontosDefesa, pontosMagia) {
        super(nome, pontosVida, pontosAtaque, pontosDefesa);
        this.pontosMagia = pontosMagia;
    }

    atacar(personagemAlvo) {
        personagemAlvo.pontosVida -= (this.pontosAtaque + this.pontosMagia) - personagemAlvo.pontosDefesa
    }

    aumentarVida(personagemAlvo) {
        personagemAlvo.pontosVida += 2 * this.pontosMagia
    }
}