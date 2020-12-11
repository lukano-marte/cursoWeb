const notas = [6.7, 7.4, 3.2, 5.7, 9.7]

for(let i in notas) {
  console.log(i, notas[i])
}

const pessoa = {
  nome: 'Ana',
  sobrenome: 'Silva',
  idade: 29,
  peso: 64,
}

for(let atributo in pessoa) {
  console.log(`${atributo} = ${pessoa[atributo]}`)
}

const forHonor = {
  cavaleiros: ['Warden', 'Peacekeeper', 'Conqueror'],
  vikings: {
    heroi: 'Raider',
    tipo: 'Vanguardeiro',
    arma: 'Machado'
  },
  samurais: 'Kensei',
  wuLin: 'Shaolin',
}

for(let herois in forHonor) {
  console.log(`${herois} = ${forHonor[herois]}`)
}