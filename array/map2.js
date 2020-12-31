const carrinho = [
  '{"nome": "Borracha", "preco": 3.45}',
  '{"nome": "Caderno", "preco": 13.90}',
  '{"nome": "Kit de Lapis", "preco": 41.22}',
  '{"nome": "Caneta", "preco": 7.50}'
]

// Retornar um array apenas com os preços
const objeto = json => JSON.parse(json)
const preco = produto => produto.preco

const arrayzao = carrinho.map(objeto).map(preco)
console.log(arrayzao)