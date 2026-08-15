import { Transacao } from "./Transacao.js";

export class Saque extends Transacao {
    #conta;

    constructor(conta, valor) {
        super(valor);
        this.#conta = conta;
    }

    executar() {
        this.#conta._debitar(this.valor);
        this.#conta._registrarTransacao(this);
    }

    descricao() {
        return "Saque realizado na conta";
    }
}
