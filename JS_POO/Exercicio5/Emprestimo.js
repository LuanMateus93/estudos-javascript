import { Transacao } from "./Transacao.js";

export class Emprestimo extends Transacao {
    #conta;
    #taxaJuros;
    #parcelas;

    constructor(conta, valor, taxaJuros, parcelas) {
        super(valor);
        this.#conta = conta;
        this.#taxaJuros = taxaJuros;
        this.#parcelas = parcelas;
    }

    static calcularParcela(valor, taxaJuros, parcelas) {
        const valorComJuros = valor * (1 + taxaJuros);
        return valorComJuros / parcelas;
    }

    executar() {
        this.#conta._creditar(this.valor);
        this.#conta._registrarTransacao(this);
    }

    descricao() {
        const parcela = Emprestimo.calcularParcela(this.valor, this.#taxaJuros, this.#parcelas);
        return `Empréstimo de R$${this.valor.toFixed(2)} em ${this.#parcelas}x de R$${parcela.toFixed(2)}`;
    }
}
