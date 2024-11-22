import Pessoa from "./Pessoa"

export default class Funcionario extends Pessoa {

    private salario: number = 0
    private cargo: string = ''
    private matricula: number = 0
    private bancoDeHoras: number = 0
    private dataAdmissao: string = ''

    constructor(nome: string, cpf: string, idade: number, genero: string, salario: number, cargo: string, dataAdmissao: string ){
       super(nome, cpf, idade, genero)
       this.salario = salario
       this.cargo = cargo
       this.dataAdmissao = dataAdmissao
       this.matricula = Math.random()
    }

    getSalario() { return this.salario }
    getCargo() { return this.cargo }
    getDataAdmissao() { return this.dataAdmissao }
    getMatricula() { return this.matricula }
    getBancoDeHoras() { return this.bancoDeHoras }

    setSalario(salario: number) { this.salario = salario }
    setCargo(cargo: string) { this.cargo = cargo }
    setBancoDeHoras(bancoDeHoras: number) { this.bancoDeHoras = bancoDeHoras }
}