//O cardápio de uma lanchonete é o seguinte:
//Código Descrição do Produto Preço
//100 Cachorro Quente R$ 3,00
//200 Hambúrguer Simples R$ 4,00
//300 Cheeseburguer R$ 5,50
//400 Bauru R$ 7,50
//500 Refrigerante R$ 3,50
//600 Suco R$ 2,80
//Implemente uma função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor
//a ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. Use o
//comando switch. Crie um caso default para produto não existente.
function cardapio(codigo, quantidade) {
  switch (codigo) {
    case 100:
      console.log(`
      Cachorro Quente. 
      Quantidade: ${quantidade}. 
      Valor total: R$: ${3 * quantidade}`)
      break;
    case 200:
      console.log(`
      Hambúrguer Simples. 
      Quantidade: ${quantidade}. 
      Valor total: R$: ${4 * quantidade}`)
      break;
    case 300:
      console.log(`
      Cheeseburguer. 
      Quantidade: ${quantidade}. 
      Valor total: R$: ${5.50 * quantidade}`)
      break;
    case 400:
      console.log(`
      Bauru. 
      Quantidade: ${quantidade}. 
      Valor total: R$: ${7.50 * quantidade}`)
      break;
    case 500:
      console.log(`
      Refrigerante. 
      Quantidade: ${quantidade}. 
      Valor total: R$: ${3.50 * quantidade}`)
      break;
    case 600:
      console.log(`
      Suco. 
      Quantidade: ${quantidade}. 
      Valor total: R$: ${2.80 * quantidade}`)
      break;
    default:
      console.log("Código de produto não encontrado")
      break;
  }
}

cardapio(300, 1)