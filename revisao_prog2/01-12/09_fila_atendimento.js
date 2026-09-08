class Fila {
  constructor() { this.itens = []; }
  enfileirar(item) { this.itens.push(item); }
  desenfileirar() { return this.itens.shift(); }
  proximo() { return this.itens[0]; }
  quantidade() { return this.itens.length; }
}

const fila = new Fila();
let proximaSenha = 1;

function adicionarPessoa(nome) {
  fila.enfileirar({
    senha: proximaSenha++,
    nome,
    horarioEntrada: new Date().toLocaleTimeString('pt-BR')
  });
}

adicionarPessoa('Ana');
adicionarPessoa('Bruno');
adicionarPessoa('Carlos');
console.log('Próximo:', fila.proximo());
console.log('Chamando:', fila.desenfileirar());
console.log('Fila atual:', fila.itens);
console.log('Aguardando:', fila.quantidade());
console.log('Fila é mais adequada porque o primeiro a entrar deve ser o primeiro a ser atendido: FIFO.');
