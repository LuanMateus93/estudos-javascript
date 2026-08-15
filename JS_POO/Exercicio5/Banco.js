export class Banco {
    #nome;
    #clientes;

    constructor(nome) {
        this.#nome = nome;
        this.#clientes = [];
    }

    get nome() {
        return this.#nome;
    }

    cadastrarCliente(cliente) {
        this.#clientes.push(cliente);
    }

    static validarCPF(cpf) {
        return /^\d{11}$/.test(cpf);
    }

    relatorioGeral() {
        const total = this.#clientes.reduce((soma, cliente) => soma + cliente.saldoTotal(), 0);

        console.log(`Banco: ${this.#nome}
Total de clientes: ${this.#clientes.length}
Total em contas: R$${total.toFixed(2)}`);

        return total;
    }
}
