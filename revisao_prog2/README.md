# Revisão Geral — Programação II

Implementação dos 20 itens da revisão em JavaScript, com SQLite nos exercícios de banco.

## Como executar

### Exercícios 1 a 12 e 19
```bash
node nome-do-arquivo.js
```

### Exercícios 13 a 16
Os arquivos `.sql` podem ser executados no SQLite:
```bash
sqlite3 biblioteca.db
.read 13-banco/schema.sql
.read 14-banco/insert_select.sql
.read 15-banco/update_delete.sql
.read 16-banco/joins.sql
```

### Exercício 17/18
Abra `17-html/index.html` no navegador. O CSS está em `18-css/style.css`.

### Exercício 20
Entre na pasta `20-sistema-tarefas` e execute:
```bash
npm install
npm start
```
Depois acesse `http://localhost:3000`.

## Conteúdo
- 01: funções para analisar números
- 02: validação de cadastro
- 03: calculadora modular
- 04: fatorial recursivo
- 05: Fibonacci recursivo e iterativo
- 06: soma recursiva de lista
- 07: lista de tarefas
- 08: histórico com pilha
- 09: atendimento com fila
- 10: escolha entre lista, pilha e fila
- 11: classe Produto
- 12: herança Pessoa/Aluno/Professor
- 13: modelagem e CREATE TABLE em SQLite
- 14: INSERT e SELECT em SQLite
- 15: UPDATE e DELETE em SQLite
- 16: JOIN e consultas relacionais em SQLite
- 17: página HTML semântica
- 18: CSS separado com Flexbox e responsividade
- 19: requisição GET a uma API pública
- 20: sistema web cliente-servidor com Node.js, SQLite, CRUD, classe e fila

## Questões conceituais
### Função x procedimento
Função executa uma tarefa e normalmente retorna um valor. Procedimento executa uma tarefa sem precisar retornar um valor.

### Parâmetros e retorno
Parâmetros são os dados recebidos pela função. O `return` envia um resultado para quem chamou a função.

### Caso-base
É a condição que encerra uma função recursiva. Sem ele, a recursão continuaria até causar erro de execução por excesso de chamadas.

### Recursão x repetição
Recursão resolve o problema chamando a própria função. Repetição usa estruturas como `for` e `while`.

### Lista, pilha e fila
Lista permite acessar e organizar elementos por posição. Pilha segue LIFO (último a entrar, primeiro a sair). Fila segue FIFO (primeiro a entrar, primeiro a sair).

### Classes, objetos, atributos e métodos
Classe é o molde; objeto é uma instância; atributos representam dados; métodos representam comportamentos.

### Encapsulamento e herança
Encapsulamento organiza e controla o acesso aos dados e comportamentos. Herança permite criar classes derivadas reaproveitando características de uma classe base.

### Banco relacional
Organiza dados em tabelas relacionadas por chaves.

### Chave primária x estrangeira
Chave primária identifica unicamente um registro. Chave estrangeira referencia a chave primária de outra tabela.

### SQL
`CREATE` cria estruturas, `INSERT` adiciona dados, `SELECT` consulta, `UPDATE` altera e `DELETE` remove.

### JOIN
Relaciona registros de duas ou mais tabelas usando colunas relacionadas.

### Cliente x servidor
O cliente envia requisições e apresenta a interface. O servidor processa regras, acessa dados e devolve respostas.

### HTTP
É um protocolo de comunicação entre cliente e servidor. `GET` consulta, `POST` cria, `PUT/PATCH` altera e `DELETE` remove.

### Status HTTP
`200` indica sucesso de uma requisição; `201` indica criação; `400` erro de requisição; `404` recurso não encontrado; `500` erro no servidor.

### HTML semântico
Usa elementos que indicam o significado do conteúdo, como `header`, `nav`, `main`, `section`, `article` e `footer`.

### CSS
Seletores identificam elementos. Flexbox e Grid organizam layouts. Media queries permitem adaptação para telas menores.
