
export default class Pessoa {

    // atributos
    private nome: string = ''
    private cpf: string = ''
    private idade: number = 0
    private genero: string = ''
    private especialidade: string = ''
    private isPcd: boolean = false
    

    // contructor
    constructor(nome: string, cpf: string, idade: number, genero: string) {
        this.nome = nome.toUpperCase()
        this.cpf = cpf
        this.idade = idade
        this.genero = genero.toUpperCase()
    }

    // métodos
    getNome() { return this.nome }
    getCpf() { return this.cpf }
    getIdade() { return this.idade }
    getGenero() { return this.genero }
    getEspecialidade() { return this.especialidade }
    getIsPcd() { return this.isPcd }

    setNome(nome: string) { this.nome = nome.toUpperCase() }
    setCpf(cpf: string) { this.cpf = cpf }
    setIdade(idade: number) { this.idade = idade }
    setGenero(genero: string) { this.genero = genero.toUpperCase() }
    setEspecialidade(especialidade: string) { this.especialidade = especialidade }
    setIsPcd(isPcd: boolean) { this.isPcd = isPcd }
}