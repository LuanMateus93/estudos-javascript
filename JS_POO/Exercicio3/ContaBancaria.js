export class ContaBancaria {
    #titular;
    #saldo
    #numeroConta

    constructor(titular, numeroConta) {
        this.#titular = titular;
        this.#numeroConta = numeroConta;
        this.#saldo = 0;
    }

    depositar(valor) {   
        if (valor <= 0) {
            throw new Error("Erro no valor a ser adicionado");
        }else {
            this.#saldo += valor;
        }
    }

    sacar(valor) {
        if (valor > this.#saldo) {
            throw new Error("Saldo Insuficiente");
        }else if (valor <= 0) {
            throw new Error("Erro no valor a ser adicionado");
        }else{
            this.#saldo -= valor;
        }
    }

    exibirExtrato() {
        console.log(`Titular: ${this.#titular}
Número da Conta: ${this.#numeroConta}
Saldo: R$ ${this.#saldo.toFixed(2)}`);
    }

    get saldo() {
        return this.#saldo;
    }

    set saldo(novoSaldo) {
        this.#saldo = novoSaldo;
    }
}