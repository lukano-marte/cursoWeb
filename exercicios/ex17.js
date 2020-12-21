//Um funcionário irá receber um aumento de acordo com o seu plano de
//trabalho, de acordo com a tabela abaixo:
//plano a = 10% de aumento
//plano b = 15% de aumento
//plano c = 20% de aumento
//Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu
//novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido.
function aumento(salario, plano) {
  switch (plano) {
    case 'a':
      console.log((salario * 0.10) + salario)
      break;
    case 'b':
      console.log((salario * 0.15) + salario)
      break;
    case 'c':
      console.log((salario * 0.20) + salario)
      break;
    default:
      console.log("Plano inexistente")
      break;
  }
}

aumento(1000, 'c')