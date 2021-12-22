const sueldo = parseFloat(prompt("Por favor ingrese el monto del sueldo"));
const antiguedad = parseInt(prompt("ingrese sus años de antiguedad laboral"));

if (sueldo >= 500) {
  alert(`El sueldo total es de: ${sueldo}`);
} else if (sueldo < 500 && antiguedad >= 10) {
  const aumento = parseFloat(sueldo * 0.2);
  const total = sueldo + aumento;
  alert(`El sueldo total es de: ${total}, recibio un aumento del 20%`);
} else if (sueldo < 500 && antiguedad < 10) {
  const aumento = parseFloat(sueldo * 0.05);
  const total = sueldo + aumento;
  alert(`El sueldo total es de: ${total}, recibio un aumento del 5%`);
}
