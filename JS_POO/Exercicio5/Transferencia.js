import { Transacao } from "./Transacao.js";

export class Transferencia extends Transacao {
    #contaOrigem;
    #contaDestino;

    constructor(contaOrigem, contaDestino, valor) {
        super(valor);
        this.#contaOrigem = contaOrigem;
        this.#contaDestino = contaDestino;
    }

    executar() {
        this.#contaOrigem.sacar(this.valor);
        this.#contaDestino.depositar(this.valor);
    }

    descricao() {
        return `Transferência para ${this.#contaDestino.titular}`;
    }
}
