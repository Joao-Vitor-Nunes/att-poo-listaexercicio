class Livro {
    _titulo
    _autor
    _preco

    constructor(titulo, autor, preco) {
        this._titulo = titulo
        this._autor = autor
        this._preco = preco
    }

    exibirInformacoes() {
        return console.log(`Titulo: ${this._titulo}\nAutor: ${this._autor}\nPreco: ${this._preco}`)
    }

}

class Ebook extends Livro {
    #tamanhoMB
    constructor(titulo, autor, preco, tamanhoMB) {
        super(titulo, autor, preco)
        this._tamanhoMB = tamanhoMB
    }

    exibirMB() {
        return console.log(`MB: ${this._tamanhoMB}`)
    }
}

class LivroFisico extends Livro {
    _peso
    constructor(titulo, autor, preco, peso) {
        super(titulo, autor, preco)
        this._peso = peso
    }

    calcularpreco() {
        return console.log(`Preço: R$${this._preco * (this._peso / 10)}`)
    }
}

const livreta = new Livro('Meditações', 'Marco Aurélio', 29.99)
livreta.exibirInformacoes()

const ebookinho = new Ebook('Lei da Vida', 'Napoleon Hill', 19.99, 2.96)
ebookinho.exibirInformacoes()
ebookinho.exibirMB()

const livrinho = new LivroFisico('Cáculo II', 'Tesla', 80, 8)
livrinho.exibirInformacoes()
livrinho.calcularpreco()