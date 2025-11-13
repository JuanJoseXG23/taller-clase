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
alert("CONVERTIR DE FAHRENHEIT A CELSIUS")
let fahrenheit = parseFloat(prompt("Ingresa la temperatura en grados Fahrenheit:"));
let celsius = (fahrenheit - 32) * 5 / 9;

alert("La temperatura en grados Celsius es: " + celsius + " °C");

//Ejercicio 5
alert("CONOCER EDAD")
let nacimiento = parseInt(prompt("Ingresa tu año de nacimiento:"));
let edad = 2024 - nacimiento;

alert("Tu edad es: " + edad + " años.");

//Ejercicio 6
prompt("EJERCICIO ")
let nombre = prompt("Ingrese su nombre:");
let apellido = prompt("Ingrese su apellido:");
let saludo = "Bienvenido, " + nombre + " " + apellido;

alert(saludo)

//Ejercicio 7
alert("CALCULAR PROMEDIO DE NOTAS")
let nota1 = parseFloat(prompt("Ingresa la primera nota (0 a 5):"));
let nota2 = parseFloat(prompt("Ingresa la segunda nota (0 a 5):"));
let nota3 = parseFloat(prompt("Ingresa la tercera nota (0 a 5):"));
let promedio = (nota1 + nota2 + nota3) / 3;

alert("Su promedio es: " + promedio);

//Ejercicio 8
alert("SALARIO SEMANAL")
let horas = parseFloat(prompt("Ingresa el número de horas trabajadas esta semana:"));
let valorHora = parseFloat(prompt("Ingresa el valor que se paga por hora:"));
let salario = horas * valorHora;

alert("El salario semanal es: $" + salario);


//Ejercicio 9
alert("CONVERTIR MILLAS A KILOMETROS")
let millas = parseFloat(prompt("Ingresa la distancia en millas:"));
let kilometros = millas * 1.60934;

alert("La distancia en kilómetros es: " + kilometros.toFixed + " km");

//Ejercicio 10
alert("CONVERTIR MINUTOS EN HORAS Y MINUTOS")
let totalMinutos = parseInt(prompt("Ingresa el total de minutos trabajados:"));
let horas1 = Math.floor(totalMinutos / 60);
let minutos = totalMinutos % 60;

alert("Eso representa: " + horas + " horas y " + minutos + " minutos.");