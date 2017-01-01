/*
Párametros REST:
*/

//Contrario a los paramtros SPREAD en este caso tendremos un número,
//indeterminado de parámetros.

function sumarElementos(...elementos){
  var suma = 0;
  for(let i= 0; i <elementos.length; i++){
    suma += elementos[i];
  }
  return suma;
}

console.log(sumarElementos(1,2,3,4));
