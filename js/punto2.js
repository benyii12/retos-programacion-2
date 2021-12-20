const nota1 = prompt("ingrese un numero");
const nota2 = prompt("ingrese un numero");
const nota3 = prompt("ingrese un numero");
promedio = (nota1 + nota2 + nota3) / 3;
if (promedio >= 7) {
  console.log("promocionado");
} else if (promedio < 7) {
  console.log("des");
}
