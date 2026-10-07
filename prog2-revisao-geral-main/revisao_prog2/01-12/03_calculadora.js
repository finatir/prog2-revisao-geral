const promptSync = require('prompt-sync')({ sigint: true });

const soma = (a, b) => a + b;
const subtracao = (a, b) => a - b;
const multiplicacao = (a, b) => a * b;
function divisao(a, b) {
  if (b === 0) throw new Error('Não é possível dividir por zero.');
  return a / b;
}
const potencia = (a, b) => a ** b;
function resto(a, b) {
  if (b === 0) throw new Error('Não é possível calcular resto com divisor zero.');
  return a % b;
}

while (true) {
  console.log('\n1-Soma  2-Subtração  3-Multiplicação  4-Divisão  5-Potência  6-Resto  0-Sair');
  const op = Number(promptSync('Opção: '));
  if (op === 0) break;
  if (op < 1 || op > 6) {
    console.log('Opção inválida.');
    continue;
  }

  const a = Number(promptSync('Primeiro número: '));
  const b = Number(promptSync('Segundo número: '));
  if (!Number.isFinite(a) || !Number.isFinite(b)) {
    console.log('Digite apenas números.');
    continue;
  }

  try {
    let resultado;
    switch (op) {
      case 1: resultado = soma(a, b); break;
      case 2: resultado = subtracao(a, b); break;
      case 3: resultado = multiplicacao(a, b); break;
      case 4: resultado = divisao(a, b); break;
      case 5: resultado = potencia(a, b); break;
      case 6: resultado = resto(a, b); break;
    }
    console.log('Resultado:', resultado);
  } catch (erro) {
    console.log('Erro:', erro.message);
  }
}
