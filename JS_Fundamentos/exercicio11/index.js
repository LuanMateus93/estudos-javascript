/* Escreva um programa em JavaScript que simule um sistema de vagas de emprego, onde é possível gerenciar as vagas e adicionar candidatos às vagas. Ele deve atender aos seguintes requisitos:

* Ter um menu onde é possível escolher entre as diferentes funcionalidades do sistema:

  * Listar vagas disponíveis;
  * Criar uma nova vaga;
  * Visualizar uma vaga;
  * Inscrever um candidato em uma vaga;
  * Excluir uma vaga;
  * Sair.
* A opção de listar as vagas deve mostrar o índice, o nome e a quantidade de candidatos inscritos de todas as vagas.
* A opção de criar uma nova vaga deve pedir um nome para a vaga, uma descrição e uma data limite, e também deve pedir que o usuário confirme as informações antes de salvá-las.
* A opção de visualizar uma vaga deve pedir o índice da vaga e mostrar todas as informações dela: índice, nome, descrição, data limite, quantidade de candidatos e o nome dos candidatos.
* A opção de inscrever um candidato em uma vaga deve pedir o nome do candidato, o índice da vaga e, então, uma confirmação exibindo as informações da vaga antes de salvar o candidato na vaga.
* A opção de excluir uma vaga deve pedir o índice da vaga, mostrar suas informações e pedir que o usuário confirme a exclusão da vaga antes de realmente excluí-la.

Este é o exercício de revisão do módulo, então aproveite para utilizar todos os recursos vistos até agora sempre que possível, como objetos, arrays e funções.
 */

let vagas = [];
let opcao;
let mostrarCandidatos = function(indice) {vagas[indice - 1].candidatos.reduce(function (textoCandidatos, candidato){
    return textoCandidatos += "-" + candidato + "\n";
}, "");}

let verificaEscolhaVaga = function (indice){
    if (vagas == '') {
        alert("Nenhuma vaga cadastrada, cadastre uma vaga antes");

        return 0;
    }else {
        while(indice > vagas.length || indice == 0){
            indice = parseInt(prompt("Digite um valor de 1 até " + vagas.length));
        }

        while (Number.isNaN(indice)) {
            indice = parseInt(prompt("Digite números apenas:"));
        }

        console.log(indice);

        return indice;
    }
}

do {
    opcao = parseInt(prompt("Bem vindo ao sistema de vagas de emprego, escolha uma opção:\n\n" +
        "1-Listar vagas disponíveis\n" +
        "2-Criar uma nova vaga\n" +
        "3-Visualizar uma vaga\n" +
        "4-Inscrever um candidato em uma vaga\n" +
        "5-Excluir uma vaga\n" +
        "6-Sair\n"
    ));

    switch (opcao) {
        case 1:
            listarVagas();

            break;
        case 2:
            adicionarVaga();

            break;
        case 3:
            let vagaEscolhida = parseInt(prompt("Qual o índice da vaga desejada?"));

            if (verificaEscolhaVaga(vagaEscolhida)) {
                visualizarVaga(verificaEscolhaVaga(vagaEscolhida));
            }

            break;
        case 4:
            let nomeCandidato = prompt("Qual o nome do candidato?");
            let indiceVaga = prompt("Qual o índice da vaga?");
            
            if (verificaEscolhaVaga(indiceVaga)) {
                inscreverCandidato(nomeCandidato, indiceVaga);
            }

            break;
        case 5:
            let indiceExclusao = prompt("Qual o índice da vaga que deseja excluir?");
            
            if (verificaEscolhaVaga(indiceExclusao)) {
                excluirVaga(indiceExclusao);
            }

            break;
        case 6:  
            alert("Encerrando...")
            break;
        default:
            alert("Insira uma opção válida!!!");
    }


} while (opcao !== 6);

function listarVagas(){
    if (vagas == '') {
        alert("Nenhuma vaga cadastrada");
    }else{
        let mostrarVagas = vagas.reduce(function (textoFinal, vaga, indice) {
            return textoFinal += (indice + 1) + "-" + vaga.nome + ": " + vaga.candidatos.length + " candidato(s)\n";
        }, "")

        alert("Lista de vagas:\n\n" + mostrarVagas);
    }
}

function adicionarVaga(){
    let nome = prompt("Qual o nome da vaga?");
    let descricao = prompt("Insira uma descrição pra vaga?");
    let dataLimite = prompt("Qual a data limite da vaga?");
    
    while (nome == '') {
        nome = prompt("Nome não pode ser vazio");
    }

    while (descricao == '') {
        descricao = prompt("Descrição não pode ser vazia");
    }

    while (dataLimite == '') {
        dataLimite = prompt("Data limite não pode ser vazio");
    }
    
    let confirmacao = prompt("Confirma as informações?\n\n" +
        "Nome: " + nome +
        "\nDescricao: " + descricao +
        "\nData Limite: " + dataLimite
    );

    if (confirmacao === "Sim"){
        let vaga = {nome, descricao, dataLimite, candidatos: []};
        vagas.push(vaga);

        alert("As informações foram salvas")
    }else{
        alert("As informações não foram salvas")
    }
}

function visualizarVaga(indice){
    let texto = "Vaga detalhada:\n\n" +
        "Índice: " + (indice - 1) +
        "\nNome: " + vagas[indice - 1].nome +
        "\nDescrição: " + vagas[indice - 1].descricao +
        "\nData Limite: " + vagas[indice - 1].dataLimite +
        "\nQuantidade de candidatos: " + vagas[indice - 1].candidatos.length;

    if (vagas[indice - 1].candidatos != '') {
        texto += "\nLista candidatos:\n" + mostrarCandidatos(indice);
    }

    alert(texto);
}

function inscreverCandidato(nomeCandidato, indiceVaga) {
    while (nomeCandidato === '') {
        nomeCandidato = prompt("O nome do candidato não pode ser vazio, digite um nome");
    }

    while (indiceVaga === '') {
        indiceVaga = prompt("O índice da vaga não pode ser vazio, digite um índice");
    }

    let confirmacao = prompt("Confirma adicionar o candidato " + nomeCandidato + " na vaga de índice " + indiceVaga + "?");

    if (confirmacao === "Sim") {
        vagas[indiceVaga - 1].candidatos.push(nomeCandidato);
        alert("Candidato adicionado");
    }else{
        alert("Candidato não foi adicionado");
    }
}

function excluirVaga(indiceExclusao) {
    while (indiceExclusao === '') {
        indiceExclusao = prompt("O índice da vaga não pode ser vazio, digite um índice");
    }

    let confirmacao = prompt("Vaga a ser excluida:\n\n" +
        "Índice: " + (indiceExclusao - 1) +
        "\nNome: " + vagas[indiceExclusao - 1].nome +
        "\nDescrição: " + vagas[indiceExclusao - 1].descricao +
        "\nData Limite: " + vagas[indiceExclusao - 1].dataLimite +
        "\nQuantidade de Candidatos:" + vagas[indiceExclusao - 1].candidatos.length +
        "\nLista Candidatos:\n" + mostrarCandidatos(indiceExclusao)
    )
}