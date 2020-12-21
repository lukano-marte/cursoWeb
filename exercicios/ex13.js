//Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao
//dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch.
let diaUtil = function(dia) {
  switch (dia) {
    case 1:
      console.log('E Domingo, vou relaxar junto com os 3 levando um oco')
      break;

    case 2:
      console.log('Segunda, Paulo Guina')
    break;

    case 3: 
      console.log('Terça, Demacol')
    break;

    case 4:
      console.log('Quarta, Kauã Desu')
    break;

    case 5:
      console.log('Quinta, abre o cu')
    break;

    case 6:
      console.log('Sexta, que delícia!')
    break;

    case 7:
      console.log('Sábado, que gostoso!')
    break;
    
    default:
      console.log('Dia Inválido')
      break;
  }
}

diaUtil(5)