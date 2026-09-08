class Pessoa {
  constructor(nome, dataNascimento) {
    this.nome = nome;
    this.dataNascimento = dataNascimento;
  }
  apresentarDados() {
    return `Nome: ${this.nome} | Nascimento: ${this.dataNascimento}`;
  }
}

class Aluno extends Pessoa {
  constructor(nome, dataNascimento, matricula, curso, notas) {
    super(nome, dataNascimento);
    this.matricula = matricula;
    this.curso = curso;
    this.notas = notas;
  }
  calcularMedia() {
    if (this.notas.length === 0) return 0;
    return this.notas.reduce((s, n) => s + n, 0) / this.notas.length;
  }
  apresentarDados() {
    return `${super.apresentarDados()} | Matrícula: ${this.matricula} | Curso: ${this.curso} | Média: ${this.calcularMedia().toFixed(2)}`;
  }
}

class Professor extends Pessoa {
  constructor(nome, dataNascimento, matricula, disciplina) {
    super(nome, dataNascimento);
    this.matricula = matricula;
    this.disciplina = disciplina;
  }
  apresentarDados() {
    return `${super.apresentarDados()} | Matrícula: ${this.matricula} | Disciplina: ${this.disciplina}`;
  }
}

const aluno = new Aluno('Marina', '2007-04-20', 'A001', 'Informática', [8, 9, 7]);
const professor = new Professor('Rodrigo', '1985-09-10', 'P001', 'Programação II');
console.log(aluno.apresentarDados());
console.log(professor.apresentarDados());
