class Pessoa {
  constructor(nome) {
    this.nome = nome
  }

  falar() {
    console.log(`Meu nome é ${this.nome}`)
  }
}

const p1 = new Pessoa('João')
p1.falar()

// ----------------------------------------------

function Pessoa2(nome) {
  return console.log(`Meu nome é ${nome}`)
}

const p2 = new Pessoa2('Eivor')
const p3 = new Pessoa2('Friggy')

//            Correção
// ----------------------------------------------
function Pessoa3(nome) {
  this.nome = nome

  this.falar = function () {
    console.log(`Meu nome é ${this.nome}`)
  }
}
p1.falar()