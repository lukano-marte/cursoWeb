// Armazenando uma funcao em uma variável
const imprimirSoma = function (a, b) {
  console.log(a + b)
}

imprimirSoma(2, 3)

// Armazenando uma função Arrow em uma variável
const soma = (a, b) => {
  return a + b
}

console.log(soma(2, 5))

// retorno implícito
const subracao = (a, b) => a - b
console.log(subracao(5, 3))

const imprimir2 = a => console.log(a)
imprimir2('legal')