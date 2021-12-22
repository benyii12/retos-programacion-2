const CantidadTP = parseInt(prompt("Ingrese la cantidad de preguntas"));
const RespuestasCtas = parseInt(
  prompt("Ingrese la cantidad de respuestas correctas")
);

const porcentaje = Math.round((RespuestasCtas * 100) / CantidadTP);

if (porcentaje >= 90) {
  alert(
    `Has resuelto el: ${porcentaje}% del test, has alcanzado el nivel maximo`
  );
} else if (porcentaje >= 75 && porcentaje < 90) {
  alert(
    `Has resuelto el: ${porcentaje}% del test, has alcanzado el nivel medio`
  );
} else if (porcentaje >= 50 && porcentaje < 75) {
  alert(
    `Has resuelto el: ${porcentaje}% del test, has alcanzado un nivel regular`
  );
} else if (porcentaje < 50) {
  alert(`Has resuelto el: ${porcentaje}% del test, Estas fuera de nivel`);
}
