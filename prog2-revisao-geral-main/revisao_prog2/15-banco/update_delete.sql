PRAGMA foreign_keys = ON;

UPDATE usuarios
SET nome = 'Ana Souza Silva'
WHERE id_usuario = 1;

UPDATE livros
SET disponivel = 0
WHERE id_livro = 4;

UPDATE emprestimos
SET data_devolucao = '2026-09-08'
WHERE id_emprestimo = 3;

SELECT *
FROM emprestimos
WHERE id_usuario = 3;

DELETE FROM usuarios
WHERE id_usuario = 3
  AND NOT EXISTS (
    SELECT 1
    FROM emprestimos
    WHERE emprestimos.id_usuario = usuarios.id_usuario
  );

SELECT *
FROM emprestimos
WHERE id_livro = 5;

DELETE FROM livros
WHERE id_livro = 5
  AND NOT EXISTS (
    SELECT 1
    FROM emprestimos
    WHERE emprestimos.id_livro = livros.id_livro
  );

SELECT
  CASE
    WHEN EXISTS (
      SELECT 1
      FROM emprestimos
      WHERE id_usuario = 3
    )
    THEN 'O usuário 3 não pode ser excluído enquanto possuir empréstimos relacionados.'
    ELSE 'O usuário 3 pode ser excluído.'
  END AS situacao_usuario;

SELECT
  CASE
    WHEN EXISTS (
      SELECT 1
      FROM emprestimos
      WHERE id_livro = 5
    )
    THEN 'O livro 5 não pode ser excluído enquanto possuir empréstimos relacionados.'
    ELSE 'O livro 5 pode ser excluído.'
  END AS situacao_livro;
