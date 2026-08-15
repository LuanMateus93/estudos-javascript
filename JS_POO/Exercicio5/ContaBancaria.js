import { Deposito } from "./Deposito.js";

export class ContaBancaria {
    #titular;
    #numeroConta;
    #saldo;
    #dataAbertura;
    #historico;

    static totalContas = 0;

    constructor(titular) {
        if (this.constructor === ContaBancaria) {
            throw new Error("Não é possível instanciar ContaBancaria diretamente");
        }

        this.#numeroConta = ++ContaBancaria.totalContas;
        this.#saldo = 0;
        this.#historico = [];
        this.#titular = titular;
        this.#dataAbertura = new Date();
    }

    get saldo() {
        return this.#saldo;
    }

    set saldo(novoSaldo) {
        this.#saldo = novoSaldo;
    }

    get numeroConta() {
        return this.#numeroConta;
    }

    get titular() {
        return this.#titular;
    }

    _creditar(valor) {
        this.#saldo += valor;
    }

    _debitar(valor) {
        this.#saldo -= valor;
    }

    _registrarTransacao(transacao) {
        this.#historico.push(transacao);
    }

    depositar(valor) {
        if (valor <= 0) {
            throw new Error("O valor a ser depositado não pode ser negativo!!!");
        }

        const transacao = new Deposito(this, valor);
        transacao.executar();
    }

    sacar(valor) {
        throw new Error("Deve ser implementado pela subclasse");
    }

    extrato() {
        let historicoFormatado = '';

        for (const transacao of this.#historico) {
            historicoFormatado += `${transacao.descricao()} - R$${transacao.valor.toFixed(2)} - ${transacao.data.toLocaleString()}\n`;
        }

        return console.log(`Titular: ${this.#titular}
Número da Conta: ${this.#numeroConta}
Saldo: R$${this.#saldo.toFixed(2)}
Histórico:
${historicoFormatado}`);
    }
}
