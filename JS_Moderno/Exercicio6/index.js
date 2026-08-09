/* **Exercício Final - Consumindo uma API** (módulo JavaScript VI)

**Enunciado:** Desenvolva uma aplicação web de página única (SPA) utilizando HTML, CSS e JavaScript para controle de finanças pessoais que atenda aos seguintes requisitos:

1. A aplicação deverá utilizar a biblioteca **json-server** para simular um backend que armazena transações financeiras.------
2. As transações devem possuir, pelo menos, as propriedades: **id** (gerenciado pelo json-server), **nome** e **valor**.----------
3. A aplicação deverá mostrar na página todas as transações salvas no backend.----------
4. Deverá ter um formulário para criar uma nova transação no backend (sem atualizar a página) através de uma requisição **POST**.-----------
5. Novas transações criadas devem aparecer na lista assim que são criadas, tudo sem atualizar a página.----
6. Deverá permitir editar os dados de uma transação através de uma requisição **PUT** (envia os dados atualizados no body, com o id do recurso na URL).------
7. Deverá permitir excluir uma transação através de uma requisição **DELETE** (não precisa de body, apenas do id do recurso na URL).--------
8. A aplicação também deverá mostrar o **saldo total**, calculado somando todos os valores das transações (que podem ser positivos ou negativos).
9. O saldo total deve estar sempre atualizado na tela: ao criar, editar ou excluir uma transação, o saldo deve refletir o novo valor.

Em resumo, é para você construir um CRUD completo de transações financeiras consumindo uma API simulada com json-server (GET, POST, PUT, DELETE), tudo sem recarregar a página, e exibindo o saldo total sempre atualizado.

Um detalhe: ao interagir com o player de vídeo para conseguir ler o conteúdo completo, a aula acabou sendo marcada automaticamente como "Concluída" na plataforma. Só um aviso caso isso afete seu controle de progresso no curso. */


//=============================GET de cada transação=============================

let saldoTotal = 0;
let countTransaction = 0;

function formatarMoeda(valor) {
    return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

function atualizarSaldo() {
    document.querySelector('#saldo').textContent = formatarMoeda(saldoTotal);
}

function renderTransaction(transactionData) {
    const divTransacao = document.createElement('div');
    divTransacao.classList.add('transacao');

    const divTransacaoInfo = document.createElement('div');
    divTransacaoInfo.classList.add('transacao-info');

    const title = document.createElement('h3');
    title.textContent = transactionData.nome;

    const valor = document.createElement('span');
    if (transactionData.valor >= 0) {
        valor.classList.add('valor', 'positivo');
    }else if (transactionData.valor < 0) {
        valor.classList.add('valor', 'negativo');
    }
    valor.step = "0.01"
    valor.textContent = `R$${transactionData.valor}`;

    const divAcoes = document.createElement('div');
    divAcoes.classList.add('acoes');
    
    const buttonEditar = document.createElement('button');
    buttonEditar.classList.add('btn-editar');
    buttonEditar.dataset.id = transactionData.id;
    buttonEditar.textContent = 'Editar';

    buttonEditar.addEventListener('click', (ev) => {
        const id = ev.currentTarget.dataset.id;
        const formExistente = divTransacao.querySelector('.form-edicao-transacao');

        if (formExistente) {
            formExistente.remove();
            return;
        }

        const formEdicao = document.createElement('form');
        formEdicao.classList.add('form-edicao-transacao');

        const divNome = document.createElement('div');
        divNome.classList.add('form-group');

        const labelNome = document.createElement('label');
        labelNome.htmlFor = 'nome-edicao';
        labelNome.textContent = 'Nome';

        const inputNome = document.createElement('input');
        inputNome.type = 'text';
        inputNome.id = 'nome-edicao';
        inputNome.value = title.textContent;

        const divValor = document.createElement('div');
        divValor.classList.add('form-group');

        const labelValor = document.createElement('label');
        labelValor.htmlFor = 'valor-edicao';
        labelValor.textContent = 'Valor';

        const inputValor = document.createElement('input');
        inputValor.type ='number';
        inputValor.id = 'valor-edicao';
        inputValor.step = "0.01"
        inputValor.value = Number(valor.textContent.replace("R$", ""));

        const divFormAcoes = document.createElement('div');
        divFormAcoes.classList.add('form-edicao-acoes');

        const botaoSalvarEdicao = document.createElement('button');
        botaoSalvarEdicao.type ='submit';
        botaoSalvarEdicao.classList.add('btn-salvar-edicao');
        botaoSalvarEdicao.textContent = 'Salvar';

        const botaoCancelar = document.createElement('button');
        botaoCancelar.type = 'button';
        botaoCancelar.classList.add('btn-cancelar');
        botaoCancelar.textContent = 'Cancelar';

        divNome.append(labelNome, inputNome);
        divValor.append(labelValor, inputValor);
        divFormAcoes.append(botaoSalvarEdicao, botaoCancelar);
        formEdicao.append(divNome, divValor, divFormAcoes);
        divTransacao.append(formEdicao);

        botaoCancelar.addEventListener('click', () => {
            formEdicao.remove();
        });

        formEdicao.addEventListener('submit', async (ev) => {
            ev.preventDefault();

            const transactionEdition = {
                nome: inputNome.value,
                valor: Number(inputValor.value),
            };

            const responseEdition = await fetch(`http://localhost:3000/transacoes/${id}`, {
                method: 'PUT',
                headers: {
                'Content-Type': 'application/json'
                },
                body: JSON.stringify(transactionEdition)
            });

            const editionTransaction = await responseEdition.json();
            formEdicao.remove();

            saldoTotal -= transactionData.valor;
            saldoTotal += editionTransaction.valor;
            atualizarSaldo();

            transactionData.nome = editionTransaction.nome;
            transactionData.valor = editionTransaction.valor;

            title.textContent = editionTransaction.nome;
            valor.classList.remove('positivo', 'negativo');
            valor.classList.add(editionTransaction.valor >= 0 ? 'positivo' : 'negativo');
            valor.textContent = `R$${editionTransaction.valor}`;
        })
    });

    const buttonExcluir = document.createElement('button');
    buttonExcluir.classList.add('btn-excluir');
    buttonExcluir.dataset.id = transactionData.id;
    buttonExcluir.textContent = 'Excluir';

    buttonExcluir.addEventListener('click', async (ev) => {
        const id = ev.currentTarget.dataset.id;

        const responseDelete = await fetch(`http://localhost:3000/transacoes/${id}`, {
            method: 'DELETE',
        });

        divTransacao.remove();
        countTransaction--;

        if (countTransaction > 0) {
            document.querySelector('.lista-vazia').style.display = 'none';
        } else {
            document.querySelector('.lista-vazia').style.display = 'block';
        }

        saldoTotal -= transactionData.valor;
        atualizarSaldo();
    });

    divTransacaoInfo.append(title, valor);
    divAcoes.append(buttonEditar, buttonExcluir);
    divTransacao.append(divTransacaoInfo, divAcoes);
    document.querySelector('#lista-transacoes').appendChild(divTransacao);
    countTransaction++;

    saldoTotal += transactionData.valor;
    atualizarSaldo();
}

async function fetchTransaction() {
    const transaction = await fetch("http://localhost:3000/transacoes")
    const savedTransaction = await transaction.json()

    for (let i = 0; i < savedTransaction.length; i++) {
        renderTransaction(savedTransaction[i]);
    }

    if (savedTransaction.length === 0) {
        document.querySelector('.lista-vazia').style.display = 'block';
    } else {
        document.querySelector('.lista-vazia').style.display = 'none';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    fetchTransaction();
})

//=============================POST cadastro de cada transação=============================

const form = document.querySelector('#form-transacao');

form.addEventListener('submit', async (ev) => {
    ev.preventDefault();

    const transactionData = {
        nome: document.querySelector('#nome').value,
        valor: Number(document.querySelector('#valor').value),
    };

    const response = await fetch('http://localhost:3000/transacoes', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(transactionData)
    });

    const postTransaction = await response.json();
    form.reset();

    if (postTransaction.length === 0) {
        document.querySelector('.lista-vazia').style.display = 'block';
    } else {
        document.querySelector('.lista-vazia').style.display = 'none';
    }

    renderTransaction(postTransaction);
})