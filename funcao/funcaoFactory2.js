function criarProduto(nome, preco) {
  return {
    nome: nome,
    preco: preco,
  }
}

console.log(criarProduto('Pão', 5))
console.log(criarProduto('Kombucha', 10))
console.log(criarProduto('Hidromel', 30))