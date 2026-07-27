/* Cadastro de Imóveis
Escreva um programa em javascript que funcione como um cadastro de imóveis e atenda aos seguintes requisitos:

Deve ter um menu interativo que sempre é exibido até que o usuário escolha sair.
O menu interativo deve mostrar no topo a quantidade de imóveis cadastrados.
O menu deve ter a opção de salvar um imóvel.
Para salvar um novo imóvel o programa deve pedir as seguintes informações:Nome do proprietário.Quantidade de quartos.Quantidade de banheiros.Se possui garagem.
Nome do proprietário.
Quantidade de quartos.
Quantidade de banheiros.
Se possui garagem.
O menu também deve ter a opção de mostrar todos os imóveis salvos. */

let imoveis = [];
let opção = "";

do {
    opcao = prompt("Quantidade de imóveis: " + imoveis.length + "\n\n1-Salvar Imóvel\n2-Mostrar os imóveis\n3-Sair");
    
    if (opcao == 1) {
        let imovel = {};

        let nomeProprietario = prompt("Qual o nome do proprietário?");
        let quantidadeQuartos = parseInt(prompt("Qual a quantidade de quartos?"));
        let quantidadeBanheiros = parseInt(prompt("Qual a quantidade de banheiros?"));
        let possuiGaragem = prompt("Possui garagem?(Sim/Não");

        if (possuiGaragem != "Sim" && possuiGaragem != "sim" && possuiGaragem != "Não" && possuiGaragem != "não") {
            let possuiGaragem = prompt("Possui garagem requer uma resposta de sim ou não");
        }

        imovel.proprietario = nomeProprietario;
        imovel.quantidadeQuartos = quantidadeQuartos;
        imovel.quantidadeBanheiros = quantidadeBanheiros;
        imovel.possuiGaragem = possuiGaragem;

        imoveis.push(imovel);
        console.log(imoveis);
    }else if (opcao == 2) {
        if (imoveis.length == 0) {
            alert("Não tem nenhum imóvel cadastrado");
        }else{
            for (let i = 0; i < imoveis.length; i++) {
                alert("Imóvel " + (i+1) + "/" + imoveis.length + 
                    "\n\nNome Proprietário: " + imoveis[i].proprietario +
                    "\nQuantidade de Quartos: " + imoveis[i].quantidadeQuartos +
                    "\nQuantidade de Banheiros: " + imoveis[i].quantidadeBanheiros +
                    "\nPossui Garagem: " + imoveis[i].possuiGaragem
                )
            }
        }
    }else if (opcao >= 4){
        alert("Opção Inválida!!!");
    }

} while (opcao != 3);