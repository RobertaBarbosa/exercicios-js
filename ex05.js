function montante(capital, taxa, tempo) {
  const convtaxa = taxa / 100
  const mont = (capital * convtaxa * tempo).toLocaleString('pt-BR')
  console.log(`Montante à juros simples: R$ ${mont}`)
}

function montante2(capital, taxa, tempo) {
  const convtaxa2 = taxa / 100 + 1
  const convert = Math.pow(convtaxa2, tempo)
  const result = (capital * convert).toLocaleString('pt-BR')
  console.log(`Montante à juros compostos: R$ ${result}`)
}

montante(1500, 3, 36)
montante2(1500, 3, 36)
