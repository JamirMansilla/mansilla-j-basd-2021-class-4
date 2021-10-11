/* Ejercicio a) Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"] mostrar por consola los meses 5 y 11 (utilizar console.log). */

console.log ("Ejercicio 3a:");
    var months = [ "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log (months[05],months[11]);

/* Ejercicio b) Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort). */

console.log ("Ejercicio 3b:")
    var months = [ "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    months.sort( (a,b) => {
    if (a == b) {
        return 0;
    } 
    if (a < b) {
        return -1;
    }
    return 1;
    })
console.log (months);

/* Ejercicio c) Agregar un elemento al principio y al final del array (utilizar unshift y push) */
    
console.log ("Ejercicio 3c:")
    var months = [ "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]; 
    months.unshift("Osvaldo");
    months.push("Saturno");
console.log (months);

/* Ejercicio d) Quitar un elemento del principio y del final del array (utilizar shift y pop). */

console.log ("Ejercicio 3d:")
    var months = [ "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    months.shift();
    months.pop();
console.log (months);

/* Ejercicio e) Invertir el orden del array (utilizar reverse). */

console.log ("Ejercicio 3e:")
    var months = [ "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]; 
    months.reverse();
console.log(months);

/* Ejercicio f) Unir todos los elementos del array en un único string donde cada mes este separado por un guión - (utilizar join). */

console.log ("Ejercicio 3f:")
    var months = [ "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]; 
    var together = months.join("-");
console.log (together);

/* Ejercicio g) Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice).*/

console.log ("Ejercicio 3g:")
    var months = [ "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    var months2 = months.slice(4,11)
console.log (months2)
