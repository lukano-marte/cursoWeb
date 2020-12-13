function getPreco(imposto = 0, moeda = 'R$') {
  return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
  nome: 'notebook',
  preco: 4589,
  desc: 0.15,
  getPreco
}

console.log(produto.getPreco())

//Aplicando o callApply
const carro = { 
  preco: 49990, 
  desc: 0.20
}

const moto = { 
  preco: 10000, 
  desc: 0.15
}

console.log(getPreco.call(carro))
console.log(getPreco.apply(moto))

console.log(getPreco.call(carro, 0.17, 'WON'))
console.log(getPreco.apply(moto, [0.17, 'RUB']))