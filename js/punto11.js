const num1 = parseInt(prompt("Ingrese el 1 numero"));
const num2 = parseInt(prompt("Ingrese el 2 numero"));
const num3 = parseInt(prompt("Ingrese el 3 numero"));

if (num1 < 10 && num2 < 10 && num3 < 10) {
  alert("Al menos uno de los valores ingresados es menor a 10 ");
} else {
  alert("Los numeros son mayores a 10");
}
