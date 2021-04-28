const ValidarValorDoacao = (valor) => {
    const valoresPossiveis = [10, 20, 50]
    if (valor >= 100 || valoresPossiveis.includes(valor)){
        return true;
    }
    return false;
}

const VerificarCPF = (cpf) => {
    var soma = 0;
    var resto;

    if(cpf == '00000000000') return false;
    for(i=1; i<=9; i++) soma = soma + parseInt(cpf.substring(i-1, i)) * (11 - i);
    resto = (soma * 10) % 11;

    if((resto == 10) || (resto == 11)) resto = 0;
    if(resto != parseInt(cpf.substring(9, 10))) return false;

    soma = 0;
    for(i = 1; i <= 10; i++) soma = soma + parseInt(cpf.substring(i-1, i))*(12-i);
    resto = (soma * 10) % 11;

    if((resto == 10) || (resto == 11)) resto = 0;
    if(resto != parseInt(cpf.substring(10, 11))) return false;
    return true;
}

const rand = (min, max) => { 
    return Math.random() * (max - min) + min;
} 

const ProcessarYYY = (cpf) => {
    const n1 = rand(1000, 9999);
    const n2 = rand(10000, 99999);
    return `${n1}${cpf}${n2}`;
}

const MontarBrinde = (valor, cpf) => {
    const YYY = ProcessarYYY();
    
    switch (valor) {
        case 10:
            return "Voce ganhou um valo desconto de 10% nas lojas xpto. Codigo do brinde de desconto é " + YYY
        case 20:
            return "Voce ganhou um valo desconto de 20% nas lojas xpto. Codigo do brinde de desconto é " + YYY
        case 50:
            return "Voce ganhou um valo desconto de 30% nas lojas xpto. Codigo do brinde de desconto é " + YYY
        default:
            return "Voce ganhou um valo desconto de 50% nas lojas xpto. Codigo do brinde de desconto é " + YYY
    }
}

const ValidarDoacao = (doacao) => {
    if (doacao.cpfDoador == "" || doacao.cpfDoador == undefined){
        return { 
            message: "Campo cpf obrigatorio",
            status: 0
        }
    }
    if (doacao.nomeDoador == "" || doacao.nomeDoador == undefined){
        return { 
            message: "Campo nome obrigatorio",
            status: 0
        }
    }
    if (doacao.nomeInstituicao == "" || doacao.nomeInstituicao == undefined){
        return { 
            message: "Campo nome instituição obrigatorio",
            status: 0
        }
    }
    if (!VerificarCPF(doacao.cpfDoador)){
        return { 
            message: "CPF Invalido",
            status: 0
        }
    }

    const valorValido = ValidarValorDoacao(doacao.valor);
    if (valorValido) {
        return {
            message: "Obrigado pela sua doação",
            brinde: MontarBrinde(doacao.valor),
            status: 1
        }
    } else {
        return {
            message: "Valor não satisfeito",
            status: 0
        }
    }
}

module.exports = {
    ValidarDoacao: ValidarDoacao
}