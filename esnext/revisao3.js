// ES8: Object.values/Object.entries
const obj = { a: 1, b: 2, c: 3 }
console.log(Object.values(obj))
console.log(Object.entries(obj))

// Melhorias na Notação Literal
const nome = 'Lara'
const pessoa = {
  nome,
  ola() {
    return 'Eae'
  }
}

console.log(pessoa.nome, pessoa.ola())

// Class
class Animal { }
class Cachorro extends Animal {
  falar() {
    return 'Vou morder seu pescoço!'
  }
}

console.log(new Cachorro().falar())