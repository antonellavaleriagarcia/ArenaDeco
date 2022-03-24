 //WHILE
 //El usuario ingresa dos numeros enteros (minimo y maximo). Luego ingresa numeros situados entre el minimo
 //y el maximo, se debe informar la cantidad de numeros que se ingresaron. El programa finaliza cuando se 
 //ingresa un numero que no pertenece a ese intervalo
 let minimo = parseInt(prompt("Ingrese el primer numero"))
 let maximo = parseInt(prompt("Ingrese el segundo numero"))
 var numeros=0;
 var contador=0;
 numeros = parseInt(prompt("Ingrese un numero entre el minimo y el maximo"))
 while (numeros>minimo&&numeros<maximo) {

     numeros = parseInt(prompt("Ingrese un numero entre el minimo y el maximo, para cortar ingrese un numero fuera del rango"))
     contador=contador+1;
 }

 alert(`La cantidad de numeros que ingreso es ${contador}.`);


 //DO WHILE
 //El usuario debe ingresar un numero positivo, le preguntamos si desea ingresar otro numero, debe responder
 //por S/N, mostraremos la suma de todos los numeros ingresados
 let sumatoria=0;
 let respuesta;
 let numero=0;
 do {
     numero = parseInt(prompt("Ingrese un numero"));
     sumatoria=sumatoria+numero;
     respuesta = prompt("¿Desea ingresar otro numero? Ingrese S si su respuesta es si y N si es no")
 } while (respuesta!="N");

 alert(`La suma de todos los numeros ingresados es ${sumatoria}.`);