// operador ... rest(juntar) / sprend(espalhar)

// usar spread com objeto
const funcionaro = { nome: 'Maria', salario: 12348.99 }
const clone = { ativo: true, ...funcionaro }
console.log(clone)

// usar spread com array
const grupoA = ['João', 'Pedro', 'Gloria']
const grupoFinal = ['Maria', 'Rafaela', ...grupoA]
console.log(grupoFinal)
