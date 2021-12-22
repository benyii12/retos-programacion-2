const num1 = parseInt(prompt("Ingrese primera Nota"));
const num2 = parseInt(prompt("Ingrese segunda Nota"));
const num3 = parseInt(prompt("Ingrese tercera Nota"));

const promedio = (num1 + num2 + num3) / 3;

if (promedio >= 7) {
  alert(`Promocionado`);
}
