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

export default class Calculadora {
    /* atributos */
    private resultado: number = 0

    /* métodos */

    somar(valorA: number, valorB:number){
        this.resultado = valorA + valorB
        return this.resultado
    }

    subtrair(valorA: number, valorB: number) {
        this.resultado =  valorA - valorB
        return this.resultado
    }

    multiplicar(valorA: number, valorB: number) {
        this.resultado = valorA * valorB
        return this.resultado
    }

    dividir(valorA: number, valorB: number) {
        if (valorB === 0) {
            return "Não é possível dividir por zero"
        }
        this.resultado = valorA / valorB
        return this.resultado
    }

    porcentagem(valor: number, porcentagem: number) {
        this.resultado =  valor * (porcentagem / 100)
        return this.resultado
    }
}
