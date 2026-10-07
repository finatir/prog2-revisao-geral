function fatorialRecursivo(n) {
  if (!Number.isInteger(n) || n < 0) throw new Error('O número deve ser inteiro e não negativo.');
  if (n === 0 || n === 1) return 1;
  return n * fatorialRecursivo(n - 1);
}

function fatorialIterativo(n) {
  if (!Number.isInteger(n) || n < 0) throw new Error('O número deve ser inteiro e não negativo.');
  let resultado = 1;
  for (let i = 2; i <= n; i++) resultado *= i;
  return resultado;
}

const n = 5;
console.log(`${n}! recursivo =`, fatorialRecursivo(n));
console.log(`${n}! iterativo =`, fatorialIterativo(n));
console.log('Caso-base: n === 0 ou n === 1.');
console.log('Sem caso-base, a função continuaria chamando a si mesma e causaria estouro da pilha.');
