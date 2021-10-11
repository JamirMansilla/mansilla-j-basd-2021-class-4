/* Ejercicio a) Crear un array que contenga 5 palabras y recorrer dicho array utilizando un bucle for de JavaScript para mostrar una alerta utilizando cada una de las palabras.*/

console.log("Ejercicio 5a:")
    var days = ["monday", "tuesday", "wednesday", "thursday", "friday"];
    for(i=0;i<days.length;i++){
         alert(days[i])
    };
    

/* Ejercicio b) Al array anterior convertir la primera letra de cada palabra en mayúscula y mostrar una alerta por cada palabra modificada.*/

console.log("Ejercicio 5b:")
    var days = ["monday", "tuesday", "wednesday", "thursday", "friday"]; 
    for(i=0;i<days.length;i++){
        alert(days[i].substring(0,1).toUpperCase()+ days[i].substring(1).toLowerCase())
    };


/* Ejercicio c) Crear una variable llamada “sentence” que tenga un string vacío, luego al array del punto a) recorrerlo con un bucle for para ir guardando cada palabra dentro de la variable sentence. Al final mostrar una única alerta con la cadena completa. */

console.log("Ejercicio 5c:")
    var sentence = " ";
    var days = ["monday", "tuesday", "wednesday", "thursday", "friday"];
    for(i=0;i<days.length;i++){
        sentence += (days[i])
    }
    alert(sentence);

/* Ejercicio d) Crear una array vacío y con un bucle for de 10 repeticiones. Llenar el array con el número de la repetición, es decir que al final de la ejecución del bucle for debería haber 10 elementos dentro del array, desde el número 0 hasta al número 9. Mostrar por la consola del navegador el array final (utilizar console.log) */

console.log("Ejercicio 5d:")
    var emptyArray = [""]
    for(var num=0;emptyArray<10;num++){
        console.log (emptyArray)
        emptyArray = emptyArray + 1;
    }
