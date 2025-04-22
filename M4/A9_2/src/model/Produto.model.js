export class Produto {
  constructor(id, nome, marca, categoria, preco, qtdEstoque) {
    this.id = id;
    this.nome = nome;
    this.marca = marca;
    this.categoria = categoria;
    this.preco = preco;
    this.qtdEstoque = qtdEstoque;
  }

  // CRIADO PARA A CLASSE E NÃO PARA A INSTANCIA
  static produtos = [];

  salvaproduto(produto) {
    Produto.produtos.push(produto);
  }
}
