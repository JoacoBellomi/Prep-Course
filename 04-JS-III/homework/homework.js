// No cambies los nombres de las funciones.

const { exists } = require("@11ty/eleventy/src/TemplatePath");

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  return array[0];
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return array[array.length-1];
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length;
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  for(var cont = 0; cont < array.length; cont++){
    array[cont] += 1;
  }
  return array;
}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento);
  return array;
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento);
  return array;
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  var nuevostr = '';
  for(var cont = 0; cont < palabras.length; cont++){
    if(cont === 0){
      nuevostr = palabras[cont];  
    }
    else{
    nuevostr = nuevostr + ' ' + palabras[cont];
  }
  }
  return nuevostr;
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  for(var cont = 0; cont < array.length; cont++){
    if(array[cont] === elemento){
      return true;
    }
  }
  return false;
}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  var suma = 0;
  for(var cont = 0; cont < numeros.length; cont++){
    suma += numeros[cont];
  }
  return suma;
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  var suma = 0;
  for(var cont = 0; cont <resultadosTest.length; cont++){
    suma += resultadosTest[cont];
  }
  return suma / resultadosTest.length;
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  var grande = 0;
  for(var cont = 0; cont < numeros.length -1; cont++){
      if(numeros[cont] > grande){
        grande = numeros[cont];
      }
  }
  return grande;
}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  if(arguments.length === 0){
    return 0;
  }
  if(arguments.length === 1){
    return arguments[0];
  }
  var multi = 1;
  for(var cont = 0; cont < arguments.length; cont++){
    multi *= arguments[cont];
  }
  return multi;

  
}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  function elementoMayor(arreglo){
    var mayores18 = 0;
    for(var cont = 0; cont < arreglo.length; cont++){
      if(arreglo[cont] > 18){
        mayores18++;
      }
    }
    return mayores18;
  }
  return elementoMayor(arreglo);
}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
  function semana(numeroDeDia){
    if(numeroDeDia === 1 || numeroDeDia === 7){
      return 'Es fin de semana';
    }
    else if(numeroDeDia > 1 && numeroDeDia < 7){
      return 'Es dia Laboral';
    }
  }
  return semana(numeroDeDia);
} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  function arranca9(n){
    n = n + '';
    if(n[0] === '9'){
      return true;
    }
    return false;
  }
  return arranca9(n);
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  function sonIguales(arreglo){
    comprobar = true;
    for(var cont = 0; cont < arreglo.length - 1; cont++){
      if(arreglo[cont] !== arreglo[cont+1]){
          comprobar = false;
        }
    }
    return comprobar;
  }
  return sonIguales(arreglo);
} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  var meses = [];
  for(var cont = 0; cont < array.length; cont++){
    if(array[cont] === 'Enero' || array[cont] === 'Marzo' || array[cont] === 'Noviembre'){
      meses.push(array[cont]);
    }
  }
  if(meses.length === 3){
    return meses;
  }
  return 'No se encontraron los meses pedidos';
}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  var nuevoarray = [];
  for(var cont = 0; cont < array.length; cont++){
    if(array[cont] > 100){
      nuevoarray.push(array[cont]);
    }
  }
  return nuevoarray;
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  var nuevoarray = [];
  for(var cont = 0; cont < 10; cont++){
    if(numero + 2 === cont){
    return 'Se interrumpió la ejecución';
    }
    numero += 2;
    nuevoarray.push(numero);
  }
  return nuevoarray;
}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  var nuevoarray = [];
  for(var cont = 0; cont < 10; cont++){
    if(cont !== 5){
      numero += 2;
      nuevoarray.push(numero);
    }
  }
    return nuevoarray;
  
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
