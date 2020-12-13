const prod1 = {
  nome: '...',
  preco: 45,
}

const prod2 = {
  nome: '....',
  preco: 145,
}

// Factory simples
function criarPessoa() {
  return {
    nome: 'Caim',
    sobrenome: 'Albuquerque',
  }
}

console.log(criarPessoa())

function criarProduto(nome, preco) {
  return {
    nome: nome,
    preco: preco,
  }
}

console.log(criarProduto('Pão', 5))
console.log(criarProduto('Kombucha', 10))
console.log(criarProduto('Hidromel', 30))