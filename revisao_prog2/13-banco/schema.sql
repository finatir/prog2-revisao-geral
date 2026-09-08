PRAGMA foreign_keys = ON;

CREATE TABLE IF NOT EXISTS autores (
  id_autor INTEGER PRIMARY KEY AUTOINCREMENT,
  nome TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS livros (
  id_livro INTEGER PRIMARY KEY AUTOINCREMENT,
  titulo TEXT NOT NULL,
  ano_publicacao INTEGER,
  disponivel INTEGER NOT NULL DEFAULT 1 CHECK (disponivel IN (0, 1)),
  id_autor INTEGER NOT NULL,
  FOREIGN KEY (id_autor) REFERENCES autores(id_autor)
);

CREATE TABLE IF NOT EXISTS usuarios (
  id_usuario INTEGER PRIMARY KEY AUTOINCREMENT,
  nome TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE
);

CREATE TABLE IF NOT EXISTS emprestimos (
  id_emprestimo INTEGER PRIMARY KEY AUTOINCREMENT,
  id_livro INTEGER NOT NULL,
  id_usuario INTEGER NOT NULL,
  data_emprestimo TEXT NOT NULL,
  data_devolucao TEXT,
  FOREIGN KEY (id_livro) REFERENCES livros(id_livro),
  FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario)
);

CREATE INDEX IF NOT EXISTS idx_livros_autor ON livros(id_autor);
CREATE INDEX IF NOT EXISTS idx_emprestimos_livro ON emprestimos(id_livro);
CREATE INDEX IF NOT EXISTS idx_emprestimos_usuario ON emprestimos(id_usuario);
