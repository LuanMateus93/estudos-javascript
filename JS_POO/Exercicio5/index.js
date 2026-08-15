import { ContaBancaria } from "./ContaBancaria.js";
import { Transacao } from "./Transacao.js";
import { Cliente } from "./Cliente.js";
import { Banco } from "./Banco.js";
import { Transferencia } from "./Transferencia.js";
import { Emprestimo } from "./Emprestimo.js";

const banco = new Banco("Banco Roadmap");

const luan = new Cliente("Luan Mateus Cenci Alchieri", "12345678900");
const maria = new Cliente("Maria Silva", "98765432100");

banco.cadastrarCliente(luan);
banco.cadastrarCliente(maria);

const contaCorrenteLuan = luan.abrirConta("Conta Corrente", 500);
const contaPoupancaLuan = luan.abrirConta("Conta Poupança");
const contaCorrenteMaria = maria.abrirConta("Conta Corrente", 200);

contaCorrenteLuan.depositar(1000);
contaPoupancaLuan.depositar(500);
contaCorrenteMaria.depositar(300);

contaCorrenteLuan.sacar(200);
contaPoupancaLuan.renderizarJuros(0.01);
contaCorrenteLuan.taxaManutencao(20);

new Transferencia(contaCorrenteLuan, contaCorrenteMaria, 150).executar();

const emprestimo = new Emprestimo(contaCorrenteMaria, 1000, 0.05, 10);
emprestimo.executar();
console.log(`Parcela do empréstimo: R$${Emprestimo.calcularParcela(1000, 0.05, 10).toFixed(2)}\n`);

luan.listarContas();
contaCorrenteMaria.extrato();

console.log(`Saldo total do Luan: R$${luan.saldoTotal().toFixed(2)}`);
banco.relatorioGeral();

console.log(`\nCPF válido? ${Banco.validarCPF("12345678900")}`);
console.log(`CPF válido? ${Banco.validarCPF("123")}`);

try {
    new ContaBancaria("Teste");
} catch (erro) {
    console.log(`Erro esperado (ContaBancaria direta): ${erro.message}`);
}

try {
    new Transacao(100);
} catch (erro) {
    console.log(`Erro esperado (Transacao direta): ${erro.message}`);
}

try {
    luan.abrirConta("Conta Corrente", 500);
} catch (erro) {
    console.log(`Erro esperado (conta duplicada): ${erro.message}`);
}

try {
    contaPoupancaLuan.sacar(999999);
} catch (erro) {
    console.log(`Erro esperado (saldo insuficiente): ${erro.message}`);
}
