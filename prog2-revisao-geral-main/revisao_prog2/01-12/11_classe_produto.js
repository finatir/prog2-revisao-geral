class Produto {
  constructor(codigo, nome, preco, quantidadeEstoque) {
    if (preco < 0 || quantidadeEstoque < 0) throw new Error('Preço e estoque não podem ser negativos.');
    this.codigo = codigo;
    this.nome = nome;
    this.preco = preco;
    this.quantidadeEstoque = quantidadeEstoque;
  }

  adicionarUnidades(quantidade) {
    if (quantidade <= 0) throw new Error('A quantidade deve ser positiva.');
    this.quantidadeEstoque += quantidade;
  }

  retirarUnidades(quantidade) {
    if (quantidade <= 0) throw new Error('A quantidade deve ser positiva.');
    if (quantidade > this.quantidadeEstoque) throw new Error('Estoque insuficiente.');
    this.quantidadeEstoque -= quantidade;
  }

  alterarPreco(novoPreco) {
    if (novoPreco < 0) throw new Error('Preço inválido.');
    this.preco = novoPreco;
  }

  valorTotalArmazenado() {
    return this.preco * this.quantidadeEstoque;
  }

  dados() {
    return { codigo: this.codigo, nome: this.nome, preco: this.preco, estoque: this.quantidadeEstoque, total: this.valorTotalArmazenado() };
  }
}

const p1 = new Produto(1, 'Teclado', 120, 10);
const p2 = new Produto(2, 'Mouse', 75, 20);
const p3 = new Produto(3, 'Monitor', 900, 5);

p1.adicionarUnidades(5);
p2.retirarUnidades(3);
p3.alterarPreco(850);

[p1, p2, p3].forEach(p => console.log(p.dados()));
