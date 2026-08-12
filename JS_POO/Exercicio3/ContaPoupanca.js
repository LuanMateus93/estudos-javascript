import { ContaBancaria } from "./ContaBancaria.js";

class ContaPoupanca extends ContaBancaria {
    #taxaRendimento
    
    constructor(taxaRendimento, titular, numeroConta) {
        super(titular, numeroConta);

        if (taxaRendimento < 0 || taxaRendimento > 0.5) {
            throw new Error("Valor inválido para a taxaRendimento, deve ser maior que 0 e menor que 0,5!!!");
        }else{
            this.#taxaRendimento = taxaRendimento / 100;
        }
    }

    renderJuros() {
        this.saldo = this.saldo * (1 + this.#taxaRendimento);
    }
}

const conta = new ContaPoupanca(0.5, "Luan Mateus Cenci Alchieri", 123456);

conta.depositar(500);
conta.exibirExtrato();
conta.renderJuros();
conta.exibirExtrato();