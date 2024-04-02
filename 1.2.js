class Pessoa {
    #nome
    #idade
    #peso
    #altura
    constructor(nome, idade, peso, altura) {
        this.#nome = nome
        this.#idade = idade
        this.#peso = peso
        this.#altura = altura
    }

    distinguirIdade() {
        if (this.#idade > 18) {
            console.log(`Você não tem desconto, pois você tem ${this.#idade} anos!`)
        } else{
            console.log(`Você possuí desconto, pois você tem ${this.#idade} anos!`)
        }
    }

    calculoIMC() {
        const imc = this.#peso / Math.pow(this.#altura, 2)
        return console.log(`IMC: ${imc}`)
    }
}

const pedro = new Pessoa('Pedro', 19, 82, 1.79)
pedro.distinguirIdade()
pedro.calculoIMC()