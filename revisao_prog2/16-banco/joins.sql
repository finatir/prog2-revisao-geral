PRAGMA foreign_keys = ON;

-- 1. Nome do usuário e título do livro emprestado
SELECT u.nome AS usuario, l.titulo AS livro
FROM emprestimos e
JOIN usuarios u ON u.id_usuario = e.id_usuario
JOIN livros l ON l.id_livro = e.id_livro;

-- 2. Todos os empréstimos realizados
SELECT e.id_emprestimo, u.nome AS usuario, l.titulo AS livro,
       e.data_emprestimo, e.data_devolucao
FROM emprestimos e
JOIN usuarios u ON u.id_usuario = e.id_usuario
JOIN livros l ON l.id_livro = e.id_livro
ORDER BY e.data_emprestimo;

-- 3. Empréstimos ainda não devolvidos
SELECT u.nome AS usuario, l.titulo AS livro, e.data_emprestimo
FROM emprestimos e
JOIN usuarios u ON u.id_usuario = e.id_usuario
JOIN livros l ON l.id_livro = e.id_livro
WHERE e.data_devolucao IS NULL;

-- 4. Quantidade de empréstimos por usuário
SELECT u.id_usuario, u.nome, COUNT(e.id_emprestimo) AS quantidade_emprestimos
FROM usuarios u
LEFT JOIN emprestimos e ON e.id_usuario = u.id_usuario
GROUP BY u.id_usuario, u.nome
ORDER BY quantidade_emprestimos DESC;

-- 5. Livros que nunca foram emprestados
SELECT l.id_livro, l.titulo
FROM livros l
LEFT JOIN emprestimos e ON e.id_livro = l.id_livro
WHERE e.id_emprestimo IS NULL;

-- Observação: uma exclusão de usuário/livro relacionado pode falhar por causa da FK.
-- Com a configuração atual, o SQLite impede a remoção para preservar a integridade referencial.
