let receitas = [1500.5, 500.27]
let despesas = [70.14, 150.85, 200, 500.23]

let somarec = 0
let somades = 0

for (let i = 0; i < receitas.length; i++) {
  somarec += parseFloat(receitas[i])
}

for (let i = 0; i < despesas.length; i++) {
  somades += parseFloat(despesas[i])
}

let resultado = somarec - somades

if (resultado >= 1) {
  console.log(`Saldo positivo: R$ ${resultado.toFixed(2)}`)
} else if (resultado <= -1) {
  console.log(`Saldo negativo: R$ ${resultado.toFixed(2)}`)
} else {
  console.log(`Saldo: R$ ${resultado}`)
}
