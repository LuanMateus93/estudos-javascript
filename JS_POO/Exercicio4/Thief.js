import { Character } from "./Character.js";

export class Thief extends Character {
    constructor(nome, pontosVida, pontosAtaque, pontosDefesa) {
        super(nome, pontosVida, pontosAtaque, pontosDefesa);
    }

    atacar(personagemAlvo) {
        personagemAlvo.pontosVida -= 2 * (this.pontosAtaque - personagemAlvo.pontosDefesa)
    }
}