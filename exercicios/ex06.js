function jurosSimples(capital, taxa, tempo) {
  let taxaConvertida = taxa/100
  let juros = capital * tempo * taxaConvertida
  let montante = capital + juros
  console.log(montante)
}
jurosSimples(1200, 5, 15)

function jurosComposto(capital, taxa, tempo) {
  let taxaConvertida = taxa/100
  let total = capital * (1 + taxaConvertida) ** tempo
  let montante = total.toFixed(2)
  console.log(montante)
}
jurosComposto(20000, 5, 4)