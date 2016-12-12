/*
   McB0y.
   Ejemplos para el uso de excepciones en JS.
*/


try {
   //Clasificación de distintos tipos de errores
   var dato = 20*(Math.random());

   if (dato < 5) {
      throw 1;
   }else if ( dato>5) {
      throw 2;//podira ser una funcion o una cadena incluso un objeto.
   }else {
      throw new Error("Error Lógico");
   }

   //puede ser cualquier numero, funcion, objeto, etc. por ejemplo: throw "error"; o thow function(){}.
   //se rrecomienda que se utilice throw new Error("Nombre del error "); esto si se considera que es un error de javascipt

} catch (e) {
   //Llamada a la función personalizada.
   registroErr(e);

} finally {
   console.log("Finalizando...");
}

function registroErr(e){
   var ahora = new Date();
   console.log("se detecto un error :", e , "A las: ", ahora);

   //otra forma de desplegar el error en el navegador...
   detalleError();
}


function detalleError() {

   var fechaError = new Date();//la fecha actual.
   //se puede pasar una fecha para comprobar funcionamiento "new Date(2016, 12, 12)"
   console.log(fechaError);
   var dias = fechaError.getDate();
   console.log(dias);
   var mes = (1 + fechaError.getMonth());
   console.log(mes);
   var anio = fechaError.getFullYear();
   console.log(anio);
   var hora = fechaError.getHours();
   console.log(hora);
   var minutos = fechaError.getMinutes();
   console.log(minutos);
   var segundos = fechaError.getSeconds();
   console.log(segundos);
   var milisegundos = fechaError.getMilliseconds();
   console.log(milisegundos);


   console.log("Ocurrencia del error en " + "Día :" + dias + " Mes : "  + mes +
   " Año : " + anio + " Hora : " + hora + " Minutos : " + minutos + " Segundos : " + segundos + " Milisegundos : " + milisegundos );

}
