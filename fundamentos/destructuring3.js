function rand({ min = 0, max = 1000}) {
  const valor = Math.random() *(max - min) + min
  return Math.floor(valor)
}
const obj = { max: 50, min: 40 }
console.log(rand(obj))
const obj2 = { min: 955}
console.log(rand(obj2))
console.log(rand({}))
console.log(rand())