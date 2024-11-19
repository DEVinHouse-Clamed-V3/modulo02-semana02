
const prompt = require('prompt-sync')();

function showFullName(nome: string, sobreNome: string) {
    return `${nome} ${sobreNome}`
} 

function somar(valueA: number, valueB: number) {
    return valueA + valueB
}

console.log(showFullName('Lucas', 'Ferreira'))

const valorA: string = prompt("Digite o valor de A:")
const valorB: string = prompt("Digite o valor de B:")

console.log(somar(parseFloat(valorA), parseFloat(valorB)))

const nome = "Douglas"

console.log(nome.toUpperCase())