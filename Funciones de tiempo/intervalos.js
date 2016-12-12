/*
   McB0y.
   Un par de ejemplos de cómo usar las funciones
   para establecer intervalos de tiempo.

*/

 var segundos = 0;


//1.-Podemos establecer un tiempo con la funcion setTimeout(callback, tiempo).
setTimeout(function() {
   console.log("paso solo un segundo");
}, 1000);


//2.Podemos repetir una acción x en un intervalo de tiempo
//la estructura es: setInterval(callback, tiempo).
setInterval(function() {
   segundos++;
   console.log("segundos", segundos);
}, 1000);//el intervalo para que se repita.




//3.Podemos limpiar la funcion repetitiva con clearInterval(intervalo).
//donde el intervalo es la funcion setInterval() ;

var intervalo = setInterval(function() {

   segundos++;

   if (segundos === 5) {
      clearInterval(intervalo);
   }else {
      console.log("Nada...");
   }

},1000);
