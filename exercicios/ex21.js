//Criar um programa para identificar o valor a ser pago por um plano de saúde dada a idade do conveniado
//considerando que todos pagam R$ 100 mais um adicional conforme a seguinte tabela: 
//1) crianças com menos de 10 anos pagam R$80; 
//2) conveniados com idade entre 10 e 30 anos pagam R$50; 
//3) conveniados com idade acima de 30 e até 60 anos pagam R$ 95;
//4) conveniados acima de 60 anos pagam R$130
function planoDeSaude(idade) {
  let pagamentoPadrao = 100
  if (idade < 10) {
    console.log(`O preço do plano é de: R$${pagamentoPadrao + 80}`)
  } else if (idade < 30) {
    console.log(`O preço do plano é de: R$${pagamentoPadrao + 50}`)
  } else if (idade < 60) {
    console.log(`O preço do plano é de: R$${pagamentoPadrao + 95}`)
  } else {
    console.log(`O preço do plano é de: R$${pagamentoPadrao + 130}`)
  }
}

planoDeSaude(10)