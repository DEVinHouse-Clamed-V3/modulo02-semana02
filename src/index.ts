/*import Pessoa from "./Pessoa";

const pessoa = new Pessoa('Douglas Calvante', '123.456.789-00', 25, 'M')
pessoa.setEspecialidade('Desenvolvedor')
*/

/*
import CalculadoraTrabalhista from "./CalculadoraTrabalhista";

const calculadoraTrabalhista = new CalculadoraTrabalhista()

console.log(calculadoraTrabalhista.calcularSalarioFerias(2000))
calculadoraTrabalhista.somar(10, 10)
console.log(calculadoraTrabalhista.getResultado())
*/

import Funcionario from "./Funcionario";

const funcionario = new Funcionario(
    "Douglas Calvante",
    "123.456.789-00",
    25,
    "M",
    2000,
    "Desenvolvedor",
    "01/01/2021")

funcionario.setBancoDeHoras(1000)
funcionario.setCargo("Dev")
funcionario.setNome("Dougras")

funcionario.setSalario(3000)

console.log(funcionario.getBancoDeHoras())




