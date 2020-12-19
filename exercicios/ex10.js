//Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true
//ou false.

function verificaNumero(numero) 
{
  let divisivel = numero % 3
  if (divisivel == 0) {
    console.log("Verdadeiro")
  } else {
    console.log("Falso")
  }
}

verificaNumero(6)