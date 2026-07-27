let nomeVeiculo1 = window.prompt("Insira o nome do primeiro carro:");
let velocidadeCarro1 = window.prompt("Insira a velocidade do primeiro carro:");
let nomeVeiculo2 = window.prompt("Insira o nome do segundo carro:");
let velocidadeCarro2 = window.prompt("Insira a velocidade do segundo carro:");

if (velocidadeCarro1 > velocidadeCarro2) {
    window.alert("O carro " + nomeVeiculo1 + " é mais rápido que o carro " + nomeVeiculo2);
} else if (velocidadeCarro2 > velocidadeCarro1) {
    window.alert("O carro " + nomeVeiculo2 + " é mais rápido que o carro " + nomeVeiculo1);
}else {
    window.alert("Os carros " + nomeVeiculo1 + " e " + nomeVeiculo2 + " tem a mesma velocidade");
}