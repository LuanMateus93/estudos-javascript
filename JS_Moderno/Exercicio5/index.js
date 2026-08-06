/* Escreva uma função assíncrona que têm como parâmetros o peso e a altura de uma pessoa e retorna uma promise do IMC dessa pessoa. Além disso, caso algum dos parâmetros não seja do tipo “number” a promise deverá ser rejeitada.

Você deverá criar também uma outra função que recebe os mesmos parâmetros de peso e altura, chama a função que calcula o IMC e então exibe no terminal o resultado das promises em texto. Caso a promise seja resolvida você também deverá mostrar no terminal a situação do IMC da pessoa de acordo com a seguinte tabela:

- Abaixo de 18,5: **magreza**
- Entre 18,5 e 24,9: **normal**
- Entre 25 e 29,9: **sobrepeso**
- Entre 30 e 39,9: **obesidade**
- Acima de 40: **obesidade grave**

Dentro da segunda função, após chamar a função que calcula o IMC, chame a função log do console com uma mensagem qualquer para evidenciar o funcionamento assíncrono do código. */

async function calculaIMC(peso, altura) {
    if (typeof peso != "number" || typeof altura != "number") {
        return Promise.reject('Peso e altura precisam ser um número');
    }

    const imc = peso / (altura * altura)
    return imc.toFixed(2);
}

async function mostraIMC(peso, altura) {
    try {
        console.log(`Calculando seu IMC!!!Aguarde...`);

        const imcCalculo = await calculaIMC(peso, altura);

        console.log(`O resultado do IMC foi de ${imcCalculo}.`);

        if (imcCalculo < 18.5) {
            console.log(`Situação - Magreza`);
        }else if(imcCalculo > 18.5 && imcCalculo < 24.9){
            console.log(`Situação - Normal`);
        }else if(imcCalculo > 25 && imcCalculo < 29.9){
            console.log(`Situação - Sobrepeso`);
        }else if(imcCalculo > 30 && imcCalculo < 39.9){
            console.log(`Situação - Obesidade`);
        }else{
            console.log(`Situação - Obesidade Grave`);
        }
    } catch (error) {
        console.log(`A promisse foi rejeitada! Motivo: ${error}`);
    }
}

mostraIMC(95, 1.85);