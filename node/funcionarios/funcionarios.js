const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

axios.get(url).then(response => {
  const funcionarios = response.data
  const novaArray = funcionarios.filter((funcionario) => {
    return funcionario.pais === "Brazil" && funcionario.genero === "M"
  })

  novaArray.sort(function (a, b) {
    return a.salario - b.salario;

  });

  console.log(novaArray[0])
})