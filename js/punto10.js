const num1 = parseInt(prompt("Ingrese el 1 numero"));
const num2 = parseInt(prompt("Ingrese el 2 numero"));
const num3 = parseInt(prompt("Ingrese el 3 numero"));

if (num1 < 10 && num2 < 10 && num3 < 10) {
  alert("Todos los numeros son menores a 10");
} else {
  alert("Error, No todos los numeros son menor a 10");
}
