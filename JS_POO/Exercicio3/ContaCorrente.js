import { ContaBancaria } from "./ContaBancaria.js";

class ContaCorrente extends ContaBancaria {
    #limiteChequeEspecial

    constructor(limiteChequeEspecial, titular, numeroConta) {
        super(titular, numeroConta);
        this.#limiteChequeEspecial =limiteChequeEspecial;
    }

    sacar(valor) {
        if (valor <= (this.#limiteChequeEspecial + this.saldo)) {
            this.saldo -= valor;
        }else{
            throw new Error("Saldo Insuficiente");
        }
    }
}



const conta = new ContaCorrente(500, "Luan Mateus Cenci Alchieri", 123456);

conta.depositar(500);
conta.exibirExtrato();
conta.sacar(1001);
conta.exibirExtrato();