function triangulo(num1, num2, num3) {
  if (num1 === num2 && num1 === num3) {
    console.log('Equilátero')
  } else if (num1 === num2 || num1 === num3 || num2 === num3) {
    console.log('Isósceles')
  } else {
    console.log('Escaleno')
  }
}

triangulo(1, 2, 3)
triangulo(1, 2, 1)
triangulo(2, 2, 2)
