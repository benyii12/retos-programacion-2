const num1 = parseInt(prompt("Ingrese Primer Numero"));
const num2 = parseInt(prompt("Ingrese Segundo Numero"));
const num3 = parseInt(prompt("Ingrese Tercer Numero"));

if (num1 > num2 && num1 > num3) {
  alert("El primer Número es Mayor");
} else if (num2 > num1 && num2 > num3) {
  alert("El segundo Número es Mayor");
} else if (num3 > num1 && num3 > num2) {
  alert("El tercer Número es Mayor");
}
