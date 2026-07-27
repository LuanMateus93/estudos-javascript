/* Pilha de Cartas
Escreva um programa em javascript para simular um baralho de cartas. O programa deve iniciar mostrando na tela um menu interativo contendo a quantidade de cartas que estão atualmente no baralho e as opções de “Adicionar uma carta”, “Puxar uma carta” e “Sair”. Ao escolher “Adicionar uma carta”, o programa deve perguntar o nome da carta e adicioná-la no topo do baralho. Ao escolher “Puxar uma carta”, o programa deve retirar a carta do topo do baralho e mostrar na tela o nome da carta puxada. O programa só deve ser encerrado ao escolher a opção de “Sair”, caso contrário deve voltar ao menu.  */

let quantidadeAtual = [];
let opcao = "";

do {
    console.log("sdfsdsdsdshdusgfimklby");
    opcao = prompt("Quantidade de cartas: " + quantidadeAtual.length + "\n\nOpções:\n\n1-Adicionar uma carta\n2-Puxar uma carta\n3-Sair");

    if (opcao == 1) {
        let carta = prompt("Qual o nome da carta a ser adicionada?");
        quantidadeAtual.push(carta);
    } else if (opcao == 2) {
        alert("Carta retirada: " + quantidadeAtual.pop());
    }
} while (opcao != 3);