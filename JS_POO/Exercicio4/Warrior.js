import { Character } from "./Character.js";

export class Warrior extends Character {
    constructor(nome, pontosVida, pontosAtaque, pontosDefesa, pontosEscudo) {
        super(nome, pontosVida, pontosAtaque, pontosDefesa);
        this.pontosEscudo = pontosEscudo;
        this.posicao = "ataque";
    }

    atacar(personagemAlvo) {
        if (this.posicao == "ataque") {
            super.atacar(personagemAlvo);
        }
    }

    mudarPosicao() {
        if (this.posicao == "ataque") {
            this.posicao = "defesa"
            this.pontosDefesa += this.pontosEscudo
        }else {
            this.posicao = "ataque"
            this.pontosDefesa -= this.pontosEscudo
        }
    }
}