/* Conversor de Medidas
Escreva um programa em javascript que funcione como um conversos de medidas. O programa deverá pedir por um valor em metros e então dar a opção de escolher para qual unidade de medida esse valor deve ser convertido. As opções são:

milímetro (mm)
centímetro (cm)
decímetro (dm)
decâmetro (dam)
hectômetro (hm)
quilômetro (km)
O programa deve então converter a medida de acordo com a opção escolhida e exibir o resultado.

O programa também deve exibir uma mensagem de “Opção inválida” caso o usuário insira uma opção diferente das disponíveis (use o break e o default para isso) */

let valor = prompt("Digite o valor em metros:");
let unidadeDesejada = parseInt(prompt("Digite a opção desejada: \n1- milímetro (mm)\n2- centímetro (cm)\n3- decímetro (dm)\n4- decâmetro (dam)\n5- hectômetro (hm)\n6- quilômetro (km)"));

switch (unidadeDesejada) {
    case 1:
        valor *= 1000;
        alert("Resultado: " + valor + "mm");
        
        break;
    case 2:
        valor *= 100;
        alert("Resultado: " + valor + "cm");
        
        break;
    case 3:
        valor *= 10;
        alert("Resultado: " + valor + "dm");
        
        break;
    case 4:
        valor /= 10;
        alert("Resultado: " + valor + "dam");
        
        break;
    case 5:
        valor /= 100;
        alert("Resultado: " + valor + "hm");
        
        break;
    case 6:
        valor /= 1000;
        alert("Resultado: " + valor + "km");
        
        break;
    default:
        alert("Opção inválida");

        break;
}