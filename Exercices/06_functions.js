/* Ejercicio a) Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la función y guardar el resultado en una variable, mostrando el valor de dicha variable en la consola del navegador.*/

console.log("Ejercicio 6a: ");
    function sum(num1, num2){
        return num1+num2
    } 
        sum(5,4); 

    var numberResult = sum(5,4)
console.log(numberResult);

/* Ejercicio b) A la función suma anterior, agregarle una validación para controlar si alguno de los parámetros no es un número, mostrar una alerta aclarando que uno de los parámetros tiene error y retornar el valor NaN como resultado. */

console.log("Ejercicio 6b: ");
function red(num1, num2){    
    if(typeof num1 !== "number" || typeof num2 !== "number"){
      alert("one of the parameters its wrong")
      return "NaN"
    }return num1+num2;
}
 dataResult = red(4,"4")
console.log(dataResult)

/* Ejercicio c) Crear una función validate integer que reciba un número como parámetro y devuelva verdadero si es un número entero.*/

console.log("Ejercicio 6c: ");
var integer = function validation(number1){
    return (!isNaN(number1) && parseInt(number1) === number1)
}

console.log(integer(3))
console.log(integer(3.5))

/* Ejercicio d) A la función suma del ejercicio 6b) agregarle una llamada que valide que los números sean enteros. En caso que haya decimales mostrar un alerta con el error y retorna el número convertido a entero (redondeado).*/

console.log("Ejercicio 6d:")
function blue(num1, num2){
    if(typeof num1 !== "number" || typeof num2 !== "number"){
        alert("one of the parameters its wrong")
        return "NaN"
    }else if (parseInt(num1) === num1 && parseInt(num2) === num2){  
      return num1+num2;
    }else { alert("WARNING! The numbers must be integers")
        return parseInt(num1 + num2)
    } 
};   
  result = blue (4,10.62);
  console.log(result);

/* Ejercicio e) Convertir la validación del ejercicio 6b) en una función separada y llamarla dentro de la función suma probando que todo siga funcionando igual. */

console.log("Ejercicio 6e: ")
function orange(){    
    if(typeof num1 !== "number" || typeof num2 !== "number"){
      alert("one of the parameters its wrong")
      return "NaN"
    }
}
function base(num1, num2){
    orange();
    return (num1 + num2)
}  
var numberResult = base(5,4)
console.log(numberResult);

