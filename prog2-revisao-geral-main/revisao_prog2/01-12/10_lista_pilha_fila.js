const respostas = {
  A: { estrutura: 'pilha', motivo: 'o histórico do navegador trabalha naturalmente com voltar para o último item visitado' },
  B: { estrutura: 'fila', motivo: 'o atendimento respeita a ordem de chegada' },
  C: { estrutura: 'lista', motivo: 'um catálogo precisa armazenar e acessar itens por posição/índice' },
  D: { estrutura: 'pilha', motivo: 'desfazer remove primeiro a ação mais recente' },
  E: { estrutura: 'lista', motivo: 'a playlist pode ser acessada diretamente por posição' }
};

for (const [item, resposta] of Object.entries(respostas)) {
  console.log(`${item}: ${resposta.estrutura} — ${resposta.motivo}.`);
}
