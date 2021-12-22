const num1 = parseInt(prompt("Escribe el 1 numero"));
const num2 = parseInt(prompt("Escribe el 2 numero"));
const num3 = parseInt(prompt("Escribe el 3 numero"));

const Total = (num1 + num2) * num3;

if (num1 == num2 && num2 == num3) {
  alert(`El resultado Total es: ${Total}`);
} else {
  alert(`Error los tres numero no son iguales `);
}
