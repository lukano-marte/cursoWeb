
// setTimeout(function () {
//   console.log('Piru')

//   setTimeout(function () {
//     console.log('Piru')

//     setTimeout(function () {
//       console.log('Piru')
//     }, 2000)
//   }, 2000)
// }, 2000)

function esperarPor(tempo = 2000) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      console.log('PROGRAMAÇÃO NÃO PRESTA!')
      resolve()
    }, tempo)
  })
}

esperarPor(3000)
  .then(() => esperarPor())
  .then(esperarPor)