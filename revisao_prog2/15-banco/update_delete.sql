PRAGMA foreign_keys = ON;

-- Alterar nome de usuário
UPDATE usuarios
SET nome = 'Ana Souza Silva'
WHERE id_usuario = 1;

-- Alterar disponibilidade do livro
UPDATE livros
SET disponivel = 0
WHERE id_livro = 4;

-- Atualizar data de devolução
UPDATE emprestimos
SET data_devolucao = '2026-09-08'
WHERE id_emprestimo = 3;

-- Antes de excluir, verifique se o usuário possui empréstimos:
SELECT * FROM emprestimos WHERE id_usuario = 3;

-- Para permitir exclusão de um usuário sem apagar histórico, primeiro seria necessário
-- mudar a modelagem (por exemplo, usar exclusão lógica). Com a FK atual, o SQLite
-- rejeita a exclusão se houver empréstimos relacionados.
-- DELETE FROM usuarios WHERE id_usuario = 3;

-- Verifique empréstimos do livro antes de excluir:
SELECT * FROM emprestimos WHERE id_livro = 5;

-- Também será rejeitado se houver empréstimo relacionado:
-- DELETE FROM livros WHERE id_livro = 5;

-- Exemplo seguro para um registro sem dependências:
-- DELETE FROM usuarios WHERE id_usuario = 999;
