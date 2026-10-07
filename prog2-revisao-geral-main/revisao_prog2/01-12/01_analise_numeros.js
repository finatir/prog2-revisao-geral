const numeros = [10, 7, 22, 5, 18, 3, 12];

function maiorValor(lista) {
  if (lista.length === 0) throw new Error('A lista não pode estar vazia.');
  return Math.max(...lista);
}

function menorValor(lista) {
  if (lista.length === 0) throw new Error('A lista não pode estar vazia.');
  return Math.min(...lista);
}

function media(lista) {
  if (lista.length === 0) throw new Error('A lista não pode estar vazia.');
  return lista.reduce((soma, n) => soma + n, 0) / lista.length;
}

function quantidadePares(lista) {
  return lista.filter(n => n % 2 === 0).length;
}

function quantidadeImpares(lista) {
  return lista.filter(n => n % 2 !== 0).length;
}

console.log('Lista:', numeros);
console.log('Maior:', maiorValor(numeros));
console.log('Menor:', menorValor(numeros));
console.log('Média:', media(numeros).toFixed(2));
console.log('Pares:', quantidadePares(numeros));
console.log('Ímpares:', quantidadeImpares(numeros));
