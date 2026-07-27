/* Calculadora Geométrica
Escreva um programa em javascript para calcular a área de diferentes formas geométricas. O programa deve iniciar com um menu contendo as diferentes opções de cálculas. As opções devem ser:

área do triângulo: base * altura / 2
área do retângulo: base * altura
área do quadrado: lado²
área do trapézio: (base maior + base menor) * altura / 2
área do círculo: pi * raio² (considere pi = 3.14)
Você deve escrever o programa usando funções sempre que possível para separar os procedimentos. O programa também deve ter uma opção de “Sair” e enquanto ela não for escolhida deverá voltar ao menu. */

function calcular(opcao) {
    if (opcao == 1) {
        let base = parseInt(prompt("Digite o valor da base:"));
        let altura = parseInt(prompt("Digite o valor da altura:"));

        return alert(base * altura / 2);
    }else if (opcao == 2) {
        let base = parseInt(prompt("Digite o valor da base:"));
        let altura = parseInt(prompt("Digite o valor da altura:"));

        return alert(base * altura);
    }else if (opcao == 3) {
        let lado = parseInt(prompt("Digite o valor do lado:"));

        return alert(lado ** 2);
    }else if (opcao == 4) {
        let baseMaior = parseInt(prompt("Digite o valor da base maior:"));
        let baseMenor = parseInt(prompt("Digite o valor da base menor:"));
        let altura = parseInt(prompt("Digite o valor da altura:"));

        return alert((baseMaior + baseMenor) * altura / 2);
    }else if (opcao == 5) {
        let pi = 3.14;
        let raio = parseInt(prompt("Digite o valor do raio:"));

        return alert(pi * raio ** 2);
    }
}

let opcao = "";

do {
    opcao = prompt("Escolha uma opção:" +
        "\n\n1-Área do triângulo" +
        "\n2-Área do retângulo" +
        "\n3-Área do quadrado" +
        "\n4-Área do trapézio" +
        "\n5-Área do círculo" +
        "\n6-Sair"
    )

    if (opcao != 6 && opcao < 6) {
        calcular(opcao);
    }else if (opcao == 6) {
        alert("Encerrando...")
    }else{
        alert("Digite uma opção válida");
    }
} while (opcao != 6);