class ItemBiblioteca {
    _titulo
    _autor
    _preco
    constructor(titulo, autor, preco) {
        this._titulo = titulo;
        this._autor = autor;
        this._preco = preco;
    }
    
    obterInformacoes() {
        console.log(`Titulo: ${this._titulo}\nAutor: ${this._autor}\nPreco: ${this._preco}`);
    }
}

class Livro extends ItemBiblioteca {
    constructor(titulo, autor, preco, livro) {
        super(titulo, autor, preco);
        this._livro = livro;
    }

    obterInformacoes() {
        super.obterInformacoes();
        console.log(`Tipo: Livro\nLivro: ${this._livro}`);
    }
}

class CD extends ItemBiblioteca {
    constructor(titulo, autor, preco, cd) {
        super(titulo, autor, preco);
        this._cd = cd;
    }

    obterInformacoes() {
        super.obterInformacoes();
        console.log(`Tipo: CD\nCD: ${this._cd}`);
    }
}

const item1 = new ItemBiblioteca('Cinderela', 'Manoel Barros', 50);

const livreta = new Livro('Cinderela', 'Manoel Barros', 50, 'Livro sobre Cinderela');
livreta.obterInformacoes();

const cdzinho = new CD('Tarzan', 'Alezandre Montes', 50, 'Filme do Tarzan');
cdzinho.obterInformacoes();

