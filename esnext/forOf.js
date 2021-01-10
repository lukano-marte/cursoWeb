for (let letra of "Cod3er") {
  console.log(letra)
}

const assuntoEcma = ['Map', 'Set', 'Promise']

for (let i in assuntoEcma) {
  console.log(i)
}

for (let assunto of assuntoEcma) {
  console.log(assunto)
}

const assuntosMap = new Map([
  ['Map', { abordado: true }],
  ['Set', { abordado: true }],
  ['Promise', { abordado: true }]
])

for (let assunto of assuntosMap) {
  console.log(assunto)
}

for (let chave of assuntosMap.keys()) {
  console.log(chave)
}

for (let valor of assuntosMap.values()) {
  console.log(valor)
}

for (let [ch, vl] of assuntosMap.entries()) {
  console.log(ch, vl)
}

const s = new Set(['a', 'b', 'c'])
for (let letra of s) {
  console.log(letra)
}