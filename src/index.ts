
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
        // throw new Error('Não é possível dividir por zero')
        return "Não é possível dividir por zero"
    }
    return valorA / valorB
}

function porcentagem(num1: number, num2: number) {
    return num1 * (num2 / 100)
}

const resultado = dividir(10, 0)

if (typeof resultado === "number") somar(10, resultado)

console.log(porcentagem(90, 10))


