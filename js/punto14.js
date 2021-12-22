const num1 = parseInt(prompt("Ingrese el 1 valor numerico"));
const num2 = parseInt(prompt("Ingrese el 2 valor numerico"));
const num3 = parseInt(prompt("Ingrese el 3 valor numerico"));

if (num1 < num2 && num1 < num3) {
  alert(`El numero: ${num1}, es el menor de los 3`);
} else if (num2 < num3 && num2 < num1) {
  alert(`El numero: ${num2}, es el menor de los 3`);
} else if (num2 > num3 && num1 > num3) {
  alert(`El numero: ${num3}, es el menor de los 3`);
}

if (num1 > num2 && num1 > num3) {
  alert(`El numero: ${num1}, es el mayor de los 3`);
} else if (num2 > num1 && num2 > num3) {
  alert(`El numero: ${num2}, es el mayor de los 3`);
} else if (num2 < num3 && num1 < num3) {
  alert(`El numero: ${num3}, es el mayor de los 3`);
}
