const promptSync = require('prompt-sync')({ sigint: true });

function validarNome(nome) {
  return typeof nome === 'string' && nome.trim().length > 0;
}

function validarIdade(idade) {
  return Number.isInteger(idade) && idade >= 14 && idade <= 120;
}

function validarEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validarSenha(senha) {
  return typeof senha === 'string' && senha.length >= 8;
}

let cadastro;
while (true) {
  const nome = promptSync('Nome: ').trim();
  const idade = Number(promptSync('Idade: '));
  const email = promptSync('E-mail: ').trim();
  const senha = promptSync('Senha: ');

  const erros = [];
  if (!validarNome(nome)) erros.push('Nome inválido.');
  if (!validarIdade(idade)) erros.push('Idade deve estar entre 14 e 120.');
  if (!validarEmail(email)) erros.push('E-mail inválido.');
  if (!validarSenha(senha)) erros.push('Senha deve ter pelo menos 8 caracteres.');

  if (erros.length === 0) {
    cadastro = { nome, idade, email, senha };
    break;
  }

  console.log('\nCadastro inválido:');
  erros.forEach(erro => console.log('-', erro));
}

console.log('\nCadastro concluído:', { ...cadastro, senha: '********' });
