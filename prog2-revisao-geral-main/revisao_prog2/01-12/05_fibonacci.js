function fibonacciRecursivo(n) {
  if (!Number.isInteger(n) || n < 0) throw new Error('n deve ser inteiro e não negativo.');
  if (n === 0) return 0;
  if (n === 1) return 1;
  return fibonacciRecursivo(n - 1) + fibonacciRecursivo(n - 2);
}

function fibonacciIterativo(n) {
  if (!Number.isInteger(n) || n < 0) throw new Error('n deve ser inteiro e não negativo.');
  let a = 0, b = 1;
  for (let i = 0; i < n; i++) [a, b] = [b, a + b];
  return a;
}

for (let n = 0; n <= 10; n++) {
  console.log(`F(${n}) recursivo=${fibonacciRecursivo(n)} | iterativo=${fibonacciIterativo(n)}`);
}

console.log('\nComparação: a versão recursiva simples repete muitos cálculos e cresce exponencialmente; a iterativa executa em tempo linear.');
