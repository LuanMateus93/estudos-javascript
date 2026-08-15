export class Transacao {
    constructor(valor) {
        this.valor = valor;
        this.data = new Date();

        if (this.constructor === Transacao) {
            throw new Error("Não é possível instanciar Transação diretamente");
        }
    }

    executar() {
        throw new Error("Deve ser implementado pela subclasse");
    }

    descricao() {
        throw new Error("Deve ser implementado pela subclasse");
    }
}