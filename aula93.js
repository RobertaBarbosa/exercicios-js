//CALL E APPLY

function getPreco(imposto = 0, moeda = 'R$') {
  return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
  nome: 'Notebook',
  preco: 5000,
  desc: 0.15,
  getPreco
}

global.preco = 20
global.desc = 0.1
console.log(getPreco()) //chamar direto  função
console.log(produto.getPreco()) //chamar a função a partir de um objeto

const carro = { preco: 4990, desc: 0.2 }

console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))
