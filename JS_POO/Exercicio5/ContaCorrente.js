import { ContaBancaria } from "./ContaBancaria.js";
import { Saque } from "./Saque.js";

export class ContaCorrente extends ContaBancaria {
    #limiteChequeEspecial;

    constructor(titular, limiteChequeEspecial) {
        super(titular);
        this.#limiteChequeEspecial = limiteChequeEspecial;
    }

    sacar(valor) {
        if (valor <= 0) {
            throw new Error("O valor a ser sacado deve ser maior que zero!!!");
        }

        if (valor > (this.saldo + this.#limiteChequeEspecial)) {
            throw new Error("Saldo insuficiente!!!");
        }

        const transacao = new Saque(this, valor);
        transacao.executar();
    }

    taxaManutencao(valor) {
        this.saldo -= valor;
    }
}
