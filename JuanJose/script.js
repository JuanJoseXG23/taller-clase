//Ejercicio 1
alert("PROGRAMA QUE CALCULA TOTAL DE VENTAS")
let precio1 = parseFloat(prompt("Ingresa el precio del primer producto:"));
let precio2 = parseFloat(prompt("Ingresa el precio del segundo producto:"));
let precio3 = parseFloat(prompt("Ingresa el precio del tercer producto:"));
let total = precio1 + precio2 + precio3;

alert("El total a pagar es: $" + total);

//Ejercicio 2
alert("PROGRAMA QUE CALCULA AREA ")
let ancho = parseFloat(prompt("Ingresa el ancho de la pared en metros:"));
let alto = parseFloat(prompt("Ingresa el alto de la pared en metros:"));
let area = ancho * alto;

alert("El área de la pared es: " + area + " metros cuadrados.");

//Ejercicio 3
alert("PROGRAMA EL PERIMETRO DE UN POTRERO")
let largo = parseFloat(prompt("Ingresa el largo del potrero en metros:"));
let ancho1 = parseFloat(prompt("Ingresa el ancho del potrero en metros:"));
let perimetro = 2 * (largo + ancho);

alert("El perímetro del potrero es: " + perimetro + " metros.");

//Ejercicio 4

let fahrenheit = parseFloat(prompt("Ingresa la temperatura en grados Fahrenheit:"));
let celsius = (fahrenheit - 32) * 5 / 9;

alert("La temperatura en grados Celsius es: " + celsius + " °C");