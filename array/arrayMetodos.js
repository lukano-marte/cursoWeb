const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Schumacher']
pilotos.pop() //Schumacher entrou em coma de novo!
console.log(pilotos)

pilotos.push('Verstappen')
console.log(pilotos)

pilotos.shift() // remove o primeiro elemento
console.log(pilotos)

pilotos.unshift('Hamilton')
console.log(pilotos)

// splice pode adicionar e remover elementos

// adicionar
pilotos.splice(2, 0, 'Bottas', 'Schumacher')
console.log(pilotos)

//remover
pilotos.splice(3, 1) //voltou pro coma
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // novo array
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)