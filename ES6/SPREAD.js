/*
 PARAMETROS SPREAD:
*/

var array = new Array("Mamifero", "Anfibio", "Ave", "Reptil");

var arreglo = [1,2,3,4,5,6];

var spread = function(a,b,c,d){
    console.log (a + " " + b + " " + c + " " + d);
}

spread(...array);

var spread1 = function(a,b,c,d){
   return (d+b+c)*a;
}

spread1(...arreglo)//Sólo tomara los primeros 4 valores ya que es el número de parámetros definidos
