const num3cifras = parseInt(prompt("ingrese un numero de hasta 3 cifras"));

if (num3cifras <= 9) {
  alert(`${num3cifras} tiene 1 cifra`);
} else if (num3cifras >= 10 && num3cifras <= 99) {
  alert(`${num3cifras} tiene 2 cifras`);
} else if (num3cifras >= 100 && num3cifras <= 999) {
  alert(`${num3cifras} tiene 3 cifras`);
} else {
  alert("numero no valido");
}
