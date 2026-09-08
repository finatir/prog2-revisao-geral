class Pilha {
  constructor() { this.itens = []; }
  push(item) { this.itens.push(item); }
  pop() { return this.itens.pop(); }
  peek() { return this.itens[this.itens.length - 1]; }
  estaVazia() { return this.itens.length === 0; }
}

class Historico {
  constructor() { this.pilha = new Pilha(); }
  visitar(url) { this.pilha.push(url); }
  paginaAtual() { return this.pilha.peek() || 'Nenhuma página visitada'; }
  voltar() {
    if (this.pilha.itens.length <= 1) return 'Não há página anterior.';
    this.pilha.pop();
    return this.paginaAtual();
  }
  exibir() { console.log([...this.pilha.itens]); }
}

const historico = new Historico();
historico.visitar('https://google.com');
historico.visitar('https://developer.mozilla.org');
historico.visitar('https://sqlite.org');
console.log('Atual:', historico.paginaAtual());
console.log('Voltando para:', historico.voltar());
historico.exibir();
console.log('Pilha é adequada porque o último endereço visitado é o primeiro a ser removido: LIFO.');
