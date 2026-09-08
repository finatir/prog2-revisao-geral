function somaRecursiva(lista, indice = 0) {
  if (indice >= lista.length) return 0;
  return lista[indice] + somaRecursiva(lista, indice + 1);
}

const entrada = [10, 20, 5, 3];
console.log('Entrada:', entrada);
console.log('Saída:', somaRecursiva(entrada));
