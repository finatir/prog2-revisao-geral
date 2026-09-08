const promptSync = require('prompt-sync')({ sigint: true });
const tarefas = [];
let proximoId = 1;

function adicionarTarefa(descricao) {
  if (!descricao.trim()) throw new Error('Descrição vazia.');
  tarefas.push({ id: proximoId++, descricao: descricao.trim(), concluida: false });
}

function listarTarefas() {
  if (tarefas.length === 0) return console.log('Nenhuma tarefa.');
  tarefas.forEach(t => console.log(`${t.id}. [${t.concluida ? 'X' : ' '}] ${t.descricao}`));
}

function buscarTarefa(termo) {
  return tarefas.filter(t => t.descricao.toLowerCase().includes(termo.toLowerCase()));
}

function alterarTarefa(id, novaDescricao) {
  const tarefa = tarefas.find(t => t.id === id);
  if (!tarefa) throw new Error('Tarefa não encontrada.');
  tarefa.descricao = novaDescricao.trim();
}

function removerTarefa(id) {
  const indice = tarefas.findIndex(t => t.id === id);
  if (indice === -1) throw new Error('Tarefa não encontrada.');
  tarefas.splice(indice, 1);
}

function concluirTarefa(id) {
  const tarefa = tarefas.find(t => t.id === id);
  if (!tarefa) throw new Error('Tarefa não encontrada.');
  tarefa.concluida = true;
}

adicionarTarefa('Estudar funções');
adicionarTarefa('Revisar SQLite');
concluirTarefa(1);
listarTarefas();
console.log('Busca por "SQLite":', buscarTarefa('SQLite'));
alterarTarefa(2, 'Revisar SQLite e JOIN');
removerTarefa(1);
console.log('Quantidade total:', tarefas.length);
listarTarefas();

// Para interação completa no terminal, descomente o bloco abaixo.
/*
while (true) {
  console.log('\n1-Adicionar 2-Listar 3-Buscar 4-Alterar 5-Remover 6-Concluir 7-Quantidade 0-Sair');
  const op = Number(promptSync('Opção: '));
  try {
    if (op === 0) break;
    if (op === 1) adicionarTarefa(promptSync('Descrição: '));
    if (op === 2) listarTarefas();
    if (op === 3) console.log(buscarTarefa(promptSync('Buscar: ')));
    if (op === 4) alterarTarefa(Number(promptSync('ID: ')), promptSync('Nova descrição: '));
    if (op === 5) removerTarefa(Number(promptSync('ID: ')));
    if (op === 6) concluirTarefa(Number(promptSync('ID: ')));
    if (op === 7) console.log('Total:', tarefas.length);
  } catch (e) { console.log('Erro:', e.message); }
}
*/
