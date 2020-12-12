const fabricantes = ["Mercedes", "Audi", "BMW"]
const marcas = ['Nike', 'Adidas', 'All Star']

function imprimir(nome, indice) {
  console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir)
marcas.forEach(marca => console.log(marca))