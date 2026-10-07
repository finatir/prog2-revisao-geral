PRAGMA foreign_keys = ON;

INSERT INTO autores (nome) VALUES
('Machado de Assis'),
('Clarice Lispector'),
('George Orwell'),
('J. R. R. Tolkien'),
('Carolina Maria de Jesus');

INSERT INTO livros (titulo, ano_publicacao, disponivel, id_autor) VALUES
('Dom Casmurro', 1899, 1, (SELECT id_autor FROM autores WHERE nome='Machado de Assis')),
('Memórias Póstumas de Brás Cubas', 1881, 1, (SELECT id_autor FROM autores WHERE nome='Machado de Assis')),
('A Hora da Estrela', 1977, 0, (SELECT id_autor FROM autores WHERE nome='Clarice Lispector')),
('1984', 1949, 1, (SELECT id_autor FROM autores WHERE nome='George Orwell')),
('O Hobbit', 1937, 1, (SELECT id_autor FROM autores WHERE nome='J. R. R. Tolkien'));

INSERT INTO usuarios (nome, email) VALUES
('Ana Souza', 'ana@email.com'),
('Bruno Lima', 'bruno@email.com'),
('Carlos Mendes', 'carlos@email.com');

INSERT INTO emprestimos (id_livro, id_usuario, data_emprestimo, data_devolucao) VALUES
((SELECT id_livro FROM livros WHERE titulo='A Hora da Estrela'), (SELECT id_usuario FROM usuarios WHERE nome='Ana Souza'), '2026-09-01', NULL),
((SELECT id_livro FROM livros WHERE titulo='Dom Casmurro'), (SELECT id_usuario FROM usuarios WHERE nome='Bruno Lima'), '2026-08-25', '2026-09-02'),
((SELECT id_livro FROM livros WHERE titulo='1984'), (SELECT id_usuario FROM usuarios WHERE nome='Carlos Mendes'), '2026-09-03', NULL);

SELECT * FROM livros;

SELECT l.titulo, a.nome AS autor
FROM livros l
JOIN autores a ON a.id_autor = l.id_autor;

SELECT l.titulo
FROM livros l
JOIN autores a ON a.id_autor = l.id_autor
WHERE a.nome = 'Machado de Assis';

SELECT * FROM livros ORDER BY titulo ASC;

SELECT * FROM livros WHERE disponivel = 1;
