import { ContaCorrente } from "./ContaCorrente.js";
import { ContaPoupanca } from "./ContaPoupanca.js";

export class Cliente {
    #contas;

    constructor(nome, cpf) {
        this.nome = nome;
        this.cpf = cpf;
        this.#contas = [];
    }

    abrirConta(tipo, ...params) {
        if (tipo === "Conta Corrente") {
            if (this.#contas.some(conta => conta instanceof ContaCorrente)) {
                throw new Error("Usuário já tem conta cadastrada!!!");
            }

            const contaCorrente = new ContaCorrente(this.nome, ...params);
            this.#contas.push(contaCorrente);
            return contaCorrente;
        }

        if (tipo === "Conta Poupança") {
            if (this.#contas.some(conta => conta instanceof ContaPoupanca)) {
                throw new Error("Usuário já tem conta cadastrada!!!");
            }

            const contaPoupanca = new ContaPoupanca(this.nome);
            this.#contas.push(contaPoupanca);
            return contaPoupanca;
        }

        throw new Error("O tipo deve ser Conta Corrente ou Conta Poupança");
    }

    saldoTotal() {
        return this.#contas.reduce((valorAcumulado, conta) => valorAcumulado + conta.saldo, 0);
    }

    listarContas() {
        for (const conta of this.#contas) {
            conta.extrato();
        }
    }
}
