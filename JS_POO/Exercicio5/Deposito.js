import { Transacao } from "./Transacao.js";

export class Deposito extends Transacao {
    #conta;

    constructor(conta, valor) {
        super(valor);
        this.#conta = conta;
    }

    executar() {
        this.#conta._creditar(this.valor);
        this.#conta._registrarTransacao(this);
    }

    descricao() {
        return "Depósito de dinheiro na conta";
    }
}
