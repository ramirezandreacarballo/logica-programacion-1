



//Debe solicitar al usuario 3 números por prompt y guardarlos en sus respectivas variables.
let num1 =  prompt ("Ingrese primer numero");
let num2 = prompt ("Ingrese segundo numero");
let num3 = prompt ("Ingrese tercer numero");


const numeros = [num1, num2, num3];
//Debe ser capaz de identificar si los números son iguales e imprimir un mensaje por consola o por el DOM diciendo que los números son iguales.
console.log ("tus numero son", numeros )

if (num1 === num2 || num2 === num3 || num1 == num3) {console.log ("tienes dos o más  numeros iguales ")}



//Debe analizar los números, identificar cual es el número mayor, el número del centro y el número menor.

let mayor = numeros[0]

for (let i = 0;i<=numeros.length;i++){
     if ( numeros [i]> mayor ){
        mayor = numeros [i]
     }
}
   
console.log ("El mayor de sus numero es " + mayor)

//Debe imprimir los números por consola o por el DOM ordenados de mayor a menor, y de menor a mayor.
// 1. De Mayor a Menor (b - a)
const numMayorAMenor = [...numeros].sort((a, b) => b - a);
console.log("De mayor a menor: " + numMayorAMenor);

// 2. De Menor a Mayor (a - b)
const numMenorAMayor = [...numeros].sort((a, b) => a - b);
console.log("De menor a mayor: " + numMenorAMayor);


