async function consultarCep(cep) {
  const limpo = cep.replace(/\D/g, '');
  if (!/^\d{8}$/.test(limpo)) throw new Error('CEP deve possuir 8 dígitos.');

  const url = `https://viacep.com.br/ws/${limpo}/json/`;
  const resposta = await fetch(url);

  if (!resposta.ok) {
    throw new Error(`HTTP ${resposta.status}: falha na requisição.`);
  }

  const dados = await resposta.json();
  if (dados.erro) throw new Error('CEP não encontrado.');
  return dados;
}

(async () => {
  try {
    const dados = await consultarCep('88010001');
    console.log('Endereço encontrado:');
    console.log('Logradouro:', dados.logradouro);
    console.log('Bairro:', dados.bairro);
    console.log('Cidade:', dados.localidade);
    console.log('UF:', dados.uf);
  } catch (erro) {
    console.error('Erro:', erro.message);
  }
})();

console.log('URL utilizada: https://viacep.com.br/ws/{CEP}/json/');
console.log('Método HTTP: GET');
console.log('Código HTTP de sucesso: 200');
console.log('Formato dos dados: JSON');
console.log('Requisição HTTP: mensagem enviada pelo cliente ao servidor.');
console.log('Resposta HTTP: mensagem enviada pelo servidor ao cliente após o processamento da requisição.');
