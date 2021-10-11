/* Ejercicio a) Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayuscula (utilizar toUpperCase). */

console.log ("Ejercicio 2a:");
    var text = "jamir mansilla";
console.log (text.toUpperCase());

/* Ejercicio b) Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros 5 caracteres guardando el resultado en una nueva variable (utilizar substring). */

console.log ("Ejercicio 2b:");
    var exampleText1 = "hello world";
    var exampleTex2 = exampleText1.substring (0,5);
console.log (exampleTex2);

/* Ejercicio c) Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los ultimos 3 caracteres guardando el resultado en una nueva variable (utilizar substring). */

console.log ("Ejercicio 2c:");
    var exampleText3 = "hello world";
    var exampleText4 = exampleText3.substring (8,11);
console.log (exampleText4);

/* Ejercicio d) Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra en mayuscula y las demas en minuscula. Guardar el resultado en una nueva variable (utilizar substring, toUpperCase, toLowerCase y el operador +). */

console.log ("Ejercicio 2d:");
    var example5 = "planification";
    var upperC = example5.substring (0,1); 
    var upperC = upperC.toUpperCase();
    var lowerC = example5.substring (1, 13);
    var lowerC = lowerC.toLowerCase();
    var example5 = upperC + lowerC;
console.log (example5);

/* Ejercicio e) Crear una variable de tipo string con al menos 10 caracteres y algun espacio en blanco. Encontrar la posicion del primer espacio en blanco y guardarla en una variable (utilizar indexOf). */

console.log ("Ejercicio 2e:");
    var example6 = "hello world";
    var example7 = example6.indexOf(" ");
console.log (example7)

/* Ejercicio f) Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algun espacio entre medio). utilizar los metodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de ambas palabras en mayuscula y las demas letras en minuscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +). */

console.log ("Ejercicio 2f:")
    var data = "jamir mansilla";
    var frstLtrs = data.substring(0,1);
    var frstLtrs = frstLtrs.toUpperCase();
    var otherLtrs = data.substring(1, data.indexOf(" "));
    var otherLtrs = otherLtrs.toLowerCase();
    var scndLtrs = data.substring(data.indexOf(" ")+1, data.indexOf(" ")+2);
    var scndLtrs = scndLtrs.toUpperCase();
    var restLtrs = data.substring(data.indexOf(" ")+2);
    var restLtrs = restLtrs.toLowerCase();
console.log (frstLtrs+otherLtrs, scndLtrs+restLtrs)