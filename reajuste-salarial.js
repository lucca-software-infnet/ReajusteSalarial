const funcionarios = [
  { nome: "Nikola Tesla", idade: 86, salario: 1_856.00, cargo: "Engenheiro" },
  { nome: "Alan Turing", idade: 41, salario: 1_912.00, cargo: "Matemático" },
  { nome: "Albert Einstein", idade: 76, salario: 1_879.00, cargo: "Físico" },
  { nome: "Marie Curie", idade: 67, salario: 1_867.00, cargo: "Matemática" }
];


// Reajuste de salário 
let contador = 4

let reajusteGuarda = []

function reajuste() {
  for (let i = 0; i < contador; i++) {

    let reajusteRecebe = funcionarios[i].salario + (funcionarios[i].salario * 0.07)

    reajusteGuarda.push(reajusteRecebe)
    document.write(`Reajuste Salarial = ${reajusteRecebe} <br>`)

  }
}

reajuste()

soma = 0
document.write(`<br>`)
// exibe salário médio após reajuste 

function salarioMedio() {

  reajusteGuarda

  for (pegaReajuste of reajusteGuarda) {

    soma += Number(pegaReajuste)
  }

  let ResultadoSLM = (soma / 4)
  document.write(`Salario medio da empresa  ${ResultadoSLM}<br><br>`)
}
salarioMedio()


let maiorNumero = -Infinity

reajusteGuarda.forEach(numero => {

  maiorNumero = Math.max(maiorNumero, numero)

});

document.write(`Maior salário reajustado: ${maiorNumero}<br><br>`);


let menorNumero = Infinity

reajusteGuarda.forEach(numero => {

  menorNumero = Math.min(menorNumero, numero)

});

document.write(`Menor salário reajustado: ${menorNumero}<br><br>`);