function transformar(degree) {
  const celsiusExists = degree.toUpperCase().includes('C')
  const fahrenheitExists = degree.toUpperCase().includes('F')

  if (celsiusExists === true) {
    celsius = (transformar * 9) / 5 + 32
    console.log(`${celsius}ºC`)
  } else if (fahrenheitExists) {
    fahrenheit = ((f - 32) * 5) / 9
    console.log(`${fahrenheit}F`)
  } else {
    console.log('Grau não identificado')
  }
}

transformar('50c')
