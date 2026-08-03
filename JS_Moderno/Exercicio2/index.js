import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime.js";

dayjs.extend(relativeTime);

function datas(data) {
    const dataNascimento = dayjs(data);
    const dataAtual = dayjs();
    const idade = dataAtual.diff(dataNascimento, 'year');
    const proximoAniversario = dataNascimento.add(idade + 1, 'year');
    const diasFaltantes = proximoAniversario.diff(dataAtual, 'd');
    
    const texto = `Idade Atual: ${idade} anos
Próximo aniversário: ${proximoAniversario.format("DD/MM/YYYY")}
Dias que faltam pro próximo aniversário: ${diasFaltantes} dia(s)`;

    return texto;
}

console.log(datas("2003/04/13"));