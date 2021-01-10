// não aceita repetição e não é indexado.
const times = new Set()
times.add('Flamengo')
times.add('Bahia').add('Palmeiras').add('Corinthias')
times.add('Flamengo')

console.log(times)
console.log(times.size)
console.log(times.has('Bahia'))
console.log(times.has('bahia'))
times.delete('Flamengo')
console.log(times.has('Flamengo'))

const nomes = ['Marte', 'Vênus', 'Júpiter', 'Marte']
const nomesSet = new Set(nomes)
console.log(nomesSet)
