const alunos = [
  { nome: 'João', nota: 7.3, bolsista: true },
  { nome: 'Maria', nota: 9.2, bolsista: true },
  { nome: 'Pedro', nota: 8.8, bolsista: true },
  { nome: 'Ana', nota: 8.0, bolsista: true }
]

const resultado = alunos.map(a => a.nota).reduce(function (acumulador, atual) {
  console.log(acumulador, atual)
  return acumulador + atual
}, 0)

console.log(resultado)