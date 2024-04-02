class Animal {
    _nome
    _idade

    constructor(nome, idade) {
        this._nome = nome
        this._idade = idade
    }

    exibirInformacoes() {
        return console.log(`Animal: ${this._nome}\nIdade: ${this._idade}`)
    }

}

class Mamifero extends Animal {
    #tipodePele

    constructor(tipodePele) {
        this.#tipodePele = tipodePele
    }

    mugir() {
        return console.log('muuuu')
    }
}

class Ave extends Animal {
    #tipodeBico
    #qtdPenas

    constructor(nome, idade, tipodeBico, qtdPenas) {
        super(nome, idade)
        this.#tipodeBico = tipodeBico
        this.#qtdPenas = qtdPenas
    }

    podeVoar() {
        if (this.#qtdPenas > 600) {
            console.log(`O ${this._nome} consegue voar!`)
        } else {
            console.log(`O ${this._nome} não consegue voar!`)
        }
    }

    tipodeBico () {
        return console.log(`Tipo de Bico: ${this.#tipodeBico}`)
    }
}

const ave = new Ave('Pica-pau', 10, 'amassado', 400)
ave.exibirInformacoes()
ave.podeVoar()
ave.tipodeBico()