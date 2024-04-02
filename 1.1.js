class Carro {
    #marca
    #modelo
    #ano
    constructor (marca, modelo, ano){
        this.#marca = marca
        this.#modelo = modelo
        this.#ano = ano
    }

    obterInforamacoes() {
        return console.log(`Marca: ${this.#marca}\nModelo: ${this.#modelo}\nAno: ${this.#ano}`)
    }

    anosDeUso() {
        const ano_atual = new Date().getFullYear()
        return console.log(`Anos de Uso: ${ano_atual - this.#ano} anos`)
    }
}

const carro = new Carro ('FIAT', 'UNO', 2000)
carro.obterInforamacoes()
carro.anosDeUso()
