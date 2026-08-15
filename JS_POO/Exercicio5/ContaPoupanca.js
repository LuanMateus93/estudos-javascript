import { ContaBancaria } from "./ContaBancaria.js";
import { Saque } from "./Saque.js";

export class ContaPoupanca extends ContaBancaria {
    constructor(titular) {
        super(titular);
    }

    sacar(valor) {
        if (valor <= 0) {
            throw new Error("O valor a ser sacado deve ser maior que zero!!!");
        }

        if (valor > this.saldo) {
            throw new Error("Saldo insuficiente!!!");
        }

        const transacao = new Saque(this, valor);
        transacao.executar();
    }

    renderizarJuros(taxa) {
        this.saldo += this.saldo * taxa;
    }
}
