const x = parseInt(prompt("Ingrese la coordenada x, Por favor"));
const y = parseInt(prompt("Ingrese la coordenada y, Por favor"));

if (x > 0 && y > 0) {
  alert("Se encuentra en el 1 Cuadrante");
} else if (x < 0 && y > 0) {
  alert("Se encuentra en el 2 Cuadrante");
} else if (x < 0 && y < 0) {
  alert("Se encuentra en el 3 Cuadrante");
} else if (x > 0 && y < 0) {
  alert("Se encuentra en el 4 Cuadrante");
}
