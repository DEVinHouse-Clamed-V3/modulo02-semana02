import Calculadora from "./Calculadora";

const calculadora = new Calculadora()
calculadora.somar(10, calculadora.somar(100, 50))

console.log(calculadora.getResultado())
