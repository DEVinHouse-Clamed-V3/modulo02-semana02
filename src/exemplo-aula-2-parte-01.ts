
function somar(valorA: number, valorB: number) {
    return valorA + valorB
}

function subtrair(valorA: number, valorB: number) {
    return valorA - valorB
}

function multiplicar(valorA: number, valorB: number) {
    return valorA * valorB
}

function dividir(valorA: number, valorB: number) {
    if (valorB === 0) {
        return "Não é possível dividir por zero"
    }
    return valorA / valorB
}

function porcentagem(valor: number, porcentagem: number) {
    return valor * (porcentagem / 100)
}

function calcularInss(salarioBruto: number){
    let inss = 0

    if(salarioBruto > 4000.04){
        inss = salarioBruto * 14 / 100
    } else if (salarioBruto > 2666.69){
        inss = salarioBruto * 12 / 100
    } else if (salarioBruto > 1412.01){
        inss = salarioBruto * 9 / 100
    } else {
        inss = salarioBruto * 7.5 / 100
    }

    if(inss > 908.85) inss = 908.85

    return inss
}

function calcularImpostoDeRenda(renda: number): number  {
    if (renda <= 2112) return 0;
    else if (renda <= 2826.65) return renda * 0.075;
    else if (renda <= 3751.05) return renda * 0.15;
    else if (renda <= 4664.68) return renda * 0.225;
    else return renda * 0.275;
};

function calcularSalarioLiquido(salarioBruto: number){
     const descontoInss = calcularInss(salarioBruto)
     const descontoImpostoRenda = calcularImpostoDeRenda(salarioBruto)
     return salarioBruto - descontoInss - descontoImpostoRenda 
}

function calcularSalarioFerias(salarioMensal: number){
    const PORCENTAGEM_BASE_CALCULO_FERIAS = 33
    const tercoSalario = porcentagem(salarioMensal, PORCENTAGEM_BASE_CALCULO_FERIAS)
    return salarioMensal + tercoSalario
}

console.log(calcularSalarioFerias(1500))


const pessoa = {
    nome: 'Douglas',
    idade: 11
}

const pessoa2 = {
    nomeCompleto: 'Douglas',
    idade: 11
}



/*

console.log(calcularInss(4500))
console.log(calcularImpostoDeRenda(4500))
console.log(calcularSalarioLiquido(4500))


console.log(calcularImpostoDeRenda(1500))
console.log(calcularImpostoDeRenda(3456))
console.log(calcularImpostoDeRenda(4356))
console.log(calcularImpostoDeRenda(8900))
*/

/*
const resultado = dividir(10, 0)
if (typeof resultado === "number") somar(10, resultado)
console.log(porcentagem(90, 10))
*/


