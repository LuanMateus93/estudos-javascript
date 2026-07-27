let primeiroNome = '';
let sobrenome = '';
let campoEstudo = '';
let anoNascimento = 0;
let idade = 0;
let anoAtual = 2026;

primeiroNome = window.prompt('Digite seu primeiro nome:');
sobrenome = window.prompt('Digite seu sobrenome:');
campoEstudo = window.prompt('Digite seu campo de estudo:');
anoNascimento = window.prompt('Digite seu ano de nascimento:');
idade = anoAtual - anoNascimento;

window.alert("Nome: " + primeiroNome + ' ' + sobrenome + 
    "\nCampo de estudo: " + campoEstudo +
    "\nIdade: " + idade);