const lista = document.querySelector('#lista');
const mensagem = document.querySelector('#mensagem');
const form = document.querySelector('#form-tarefa');

async function carregarTarefas() {
  const resposta = await fetch('/api/tarefas');
  const tarefas = await resposta.json();
  lista.innerHTML = '';

  tarefas.forEach(tarefa => {
    const li = document.createElement('li');
    li.className = tarefa.concluida ? 'concluida' : '';

    const texto = document.createElement('span');
    texto.textContent = tarefa.titulo;

    const concluir = document.createElement('button');
    concluir.textContent = tarefa.concluida ? 'Reabrir' : 'Concluir';
    concluir.onclick = () => alterarTarefa(tarefa);

    const excluir = document.createElement('button');
    excluir.textContent = 'Excluir';
    excluir.onclick = () => excluirTarefa(tarefa.id);

    li.append(texto, concluir, excluir);
    lista.appendChild(li);
  });
}

async function cadastrarTarefa(event) {
  event.preventDefault();
  const titulo = document.querySelector('#titulo').value.trim();

  const resposta = await fetch('/api/tarefas', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ titulo })
  });

  const dados = await resposta.json();
  if (!resposta.ok) {
    mensagem.textContent = dados.erro || 'Erro ao cadastrar.';
    return;
  }

  mensagem.textContent = 'Tarefa cadastrada.';
  form.reset();
  await carregarTarefas();
}

async function alterarTarefa(tarefa) {
  await fetch(`/api/tarefas/${tarefa.id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ concluida: !tarefa.concluida })
  });
  await carregarTarefas();
}

async function excluirTarefa(id) {
  const resposta = await fetch(`/api/tarefas/${id}`, { method: 'DELETE' });
  if (resposta.ok) await carregarTarefas();
}

async function adicionarFila() {
  const input = document.querySelector('#fila-titulo');
  const resposta = await fetch('/api/fila', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ titulo: input.value })
  });
  const dados = await resposta.json();
  document.querySelector('#fila-status').textContent = resposta.ok
    ? `Itens na fila: ${dados.fila.length}`
    : dados.erro;
  input.value = '';
}

async function chamarProximo() {
  const resposta = await fetch('/api/fila/proximo', { method: 'DELETE' });
  const item = await resposta.json();
  document.querySelector('#fila-status').textContent = item
    ? `Processando: ${item.titulo}`
    : 'A fila está vazia.';
}

form.addEventListener('submit', cadastrarTarefa);
document.querySelector('#btn-atualizar').addEventListener('click', carregarTarefas);
document.querySelector('#btn-fila-adicionar').addEventListener('click', adicionarFila);
document.querySelector('#btn-fila-chamar').addEventListener('click', chamarProximo);

carregarTarefas().catch(erro => {
  mensagem.textContent = `Erro de conexão: ${erro.message}`;
});
