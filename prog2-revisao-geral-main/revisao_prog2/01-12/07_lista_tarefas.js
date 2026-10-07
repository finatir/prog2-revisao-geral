const promptSync = require('prompt-sync')({ sigint: true });
const tarefas = [];
let proximoId = 1;

function adicionarTarefa(descricao) {
  if (typeof descricao !== 'string' || !descricao.trim()) {
    throw new Error('Descrição vazia.');
  }
  tarefas.push({
    id: proximoId++,
    descricao: descricao.trim(),
    concluida: false
  });
}

function listarTarefas() {
  if (tarefas.length === 0) {
    console.log('Nenhuma tarefa.');
    return;
  }

  tarefas.forEach(tarefa => {
    console.log(`${tarefa.id}. [${tarefa.concluida ? 'X' : ' '}] ${tarefa.descricao}`);
  });
}

function buscarTarefa(termo) {
  if (typeof termo !== 'string') return [];
  return tarefas.filter(tarefa =>
    tarefa.descricao.toLowerCase().includes(termo.trim().toLowerCase())
  );
}

function alterarTarefa(id, novaDescricao) {
  if (typeof novaDescricao !== 'string' || !novaDescricao.trim()) {
    throw new Error('Descrição vazia.');
  }

  const tarefa = tarefas.find(item => item.id === id);
  if (!tarefa) throw new Error('Tarefa não encontrada.');
  tarefa.descricao = novaDescricao.trim();
}

function removerTarefa(id) {
  const indice = tarefas.findIndex(tarefa => tarefa.id === id);
  if (indice === -1) throw new Error('Tarefa não encontrada.');
  tarefas.splice(indice, 1);
}

function concluirTarefa(id) {
  const tarefa = tarefas.find(item => item.id === id);
  if (!tarefa) throw new Error('Tarefa não encontrada.');
  tarefa.concluida = true;
}

while (true) {
  console.log('\n1 - Adicionar tarefa');
  console.log('2 - Listar tarefas');
  console.log('3 - Buscar tarefa');
  console.log('4 - Alterar tarefa');
  console.log('5 - Remover tarefa');
  console.log('6 - Concluir tarefa');
  console.log('7 - Quantidade de tarefas');
  console.log('0 - Sair');

  const opcao = Number(promptSync('Opção: '));

  try {
    if (opcao === 0) {
      console.log('Programa encerrado.');
      break;
    }

    if (opcao === 1) {
      adicionarTarefa(promptSync('Descrição: '));
      console.log('Tarefa adicionada.');
    } else if (opcao === 2) {
      listarTarefas();
    } else if (opcao === 3) {
      const termo = promptSync('Termo para buscar: ');
      const resultado = buscarTarefa(termo);
      if (resultado.length === 0) {
        console.log('Nenhuma tarefa encontrada.');
      } else {
        resultado.forEach(tarefa => {
          console.log(`${tarefa.id}. [${tarefa.concluida ? 'X' : ' '}] ${tarefa.descricao}`);
        });
      }
    } else if (opcao === 4) {
      const id = Number(promptSync('ID da tarefa: '));
      const novaDescricao = promptSync('Nova descrição: ');
      alterarTarefa(id, novaDescricao);
      console.log('Tarefa alterada.');
    } else if (opcao === 5) {
      const id = Number(promptSync('ID da tarefa: '));
      removerTarefa(id);
      console.log('Tarefa removida.');
    } else if (opcao === 6) {
      const id = Number(promptSync('ID da tarefa: '));
      concluirTarefa(id);
      console.log('Tarefa concluída.');
    } else if (opcao === 7) {
      console.log('Quantidade total:', tarefas.length);
    } else {
      console.log('Opção inválida.');
    }
  } catch (erro) {
    console.log('Erro:', erro.message);
  }
}
