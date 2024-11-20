/*
Exemplo de classe
class Animal {
    //atributos
    nome: string = ''
    raca: string  = ''
    especie: string  = ''
    idade: number  = 0
    peso: number = 0
    vacinas = []

    // métodos
    comer(){}
    dormir(){}
    emitir(){}
}
*/

class Calculadora {
    /* atributos */
    resultado: number = 0

    /* métodos */

    somar(valorA: number, valorB:number){
        return valorA + valorB
    }

    subtrair(valorA: number, valorB: number) {
        return valorA - valorB
    }

    multiplicar(valorA: number, valorB: number) {
        return valorA * valorB
    }

    dividir(valorA: number, valorB: number) {
        if (valorB === 0) {
            return "Não é possível dividir por zero"
        }
        return valorA / valorB
    }

    porcentagem(valor: number, porcentagem: number) {
        return valor * (porcentagem / 100)
    }
}