const escola = [{
  nome: 'Turma M1',
  alunos: [{
    nome: 'Uriel',
    nota: 7.6
  }, {
    nome: 'Camélia',
    nota: 9.8
  }]
}, {
  nome: 'Turma M2',
  alunos: [{
    nome: 'Rebeca',
    nota: 8.7
  }, {
    nome: 'Alberto',
    nota: 7.1
  }]
}]

const getNotaDoAluno = a => a.nota
const getNotasDaTurma = turma => turma.alunos.map(getNotaDoAluno)

const notas1 = escola.map(getNotasDaTurma)
console.log(notas1)

console.log([].concat([7.6, 9.8], [8.7, 7.1]))

Array.prototype.flatMap = function (callback) {
  return Array.prototype.concat.apply([], this.map(callback))
}

const notas2 = escola.flatMap(getNotasDaTurma)
console.log(notas2)