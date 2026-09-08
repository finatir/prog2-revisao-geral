const express = require('express');
const path = require('path');
const Database = require('better-sqlite3');

const app = express();
const PORT = 3000;
const db = new Database(path.join(__dirname, 'tarefas.db'));

db.pragma('foreign_keys = ON');
db.exec(`
  CREATE TABLE IF NOT EXISTS tarefas (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    titulo TEXT NOT NULL,
    concluida INTEGER NOT NULL DEFAULT 0 CHECK (concluida IN (0, 1)),
    criada_em TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
  );
`);

class Tarefa {
  constructor({ id = null, titulo, concluida = false, criada_em = null }) {
    if (typeof titulo !== 'string' || !titulo.trim()) {
      throw new Error('O título da tarefa é obrigatório.');
    }
    this.id = id;
    this.titulo = titulo.trim();
    this.concluida = Boolean(concluida);
    this.criada_em = criada_em;
  }

  toJSON() {
    return {
      id: this.id,
      titulo: this.titulo,
      concluida: this.concluida,
      criada_em: this.criada_em
    };
  }
}

// Estrutura de dados: fila usada para demonstrar ordem de atendimento no endpoint.
const fila = [];

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/tarefas', (req, res) => {
  const rows = db.prepare('SELECT * FROM tarefas ORDER BY id DESC').all();
  res.json(rows.map(r => new Tarefa(r)));
});

app.post('/api/tarefas', (req, res) => {
  try {
    const tarefa = new Tarefa({ titulo: req.body.titulo, concluida: false });
    const result = db.prepare('INSERT INTO tarefas (titulo, concluida) VALUES (?, ?)')
      .run(tarefa.titulo, 0);
    const criada = db.prepare('SELECT * FROM tarefas WHERE id = ?').get(result.lastInsertRowid);
    res.status(201).json(new Tarefa(criada));
  } catch (erro) {
    res.status(400).json({ erro: erro.message });
  }
});

app.put('/api/tarefas/:id', (req, res) => {
  const id = Number(req.params.id);
  if (!Number.isInteger(id) || id <= 0) return res.status(400).json({ erro: 'ID inválido.' });

  try {
    const atual = db.prepare('SELECT * FROM tarefas WHERE id = ?').get(id);
    if (!atual) return res.status(404).json({ erro: 'Tarefa não encontrada.' });

    const tarefa = new Tarefa({
      id,
      titulo: req.body.titulo ?? atual.titulo,
      concluida: req.body.concluida ?? Boolean(atual.concluida),
      criada_em: atual.criada_em
    });

    db.prepare('UPDATE tarefas SET titulo = ?, concluida = ? WHERE id = ?')
      .run(tarefa.titulo, tarefa.concluida ? 1 : 0, id);
    res.json(tarefa);
  } catch (erro) {
    res.status(400).json({ erro: erro.message });
  }
});

app.delete('/api/tarefas/:id', (req, res) => {
  const id = Number(req.params.id);
  const result = db.prepare('DELETE FROM tarefas WHERE id = ?').run(id);
  if (result.changes === 0) return res.status(404).json({ erro: 'Tarefa não encontrada.' });
  res.status(204).end();
});

// Demonstração da fila: adiciona uma tarefa para processamento em ordem FIFO.
app.post('/api/fila', (req, res) => {
  if (!req.body.titulo?.trim()) return res.status(400).json({ erro: 'Título obrigatório.' });
  fila.push({ titulo: req.body.titulo.trim(), entrada: new Date().toISOString() });
  res.status(201).json({ posicao: fila.length, fila });
});

app.get('/api/fila/proximo', (req, res) => {
  res.json(fila[0] || null);
});

app.delete('/api/fila/proximo', (req, res) => {
  res.json(fila.shift() || null);
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
