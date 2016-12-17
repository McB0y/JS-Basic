/*
   McB0y.
   Ejemplos para el uso de excepciones en JS,
   tenemos la posibilidad de lanzar excepciones
   de distintas formas en JS, este script muestra algunas.
*/

//Forma 1 para lanzar una excepción.

try {

   //Suponiendo que se intento ingresar con password incorrecto más de 5 veces... y regresa un "false"

   var intento = false;


   if (intento === false) {
      throw function() {
         console.log("Lanzamos la excepción después de alguna validación");
      }();
   }else {
      console.log("Bienvenido al sistema , por favor actualice su passsword seguido...");
   }



   //si aqui hay código ya no se ejecuta...

} catch (e) {

   console.log(e);//la ejecución del código...
   console.log("Podemos tener más código para tratar la excepción...");


} finally {

   console.log("Está parte del código siempre se ejecuta...");

}






//Segunda forma para lanzar excepciones "Considerando que throw es un objeto".


try {


   var valores = 9;

   if (valores < 10 ) {
      throw{
         nombreError : "Excepción no.1",
         medidas : "Verifique el proceso nuevamente",
         codError : 1
      };
   }else if (valores === 10) {
      console.log("Todo esta en orden...");
   }

} catch (e) {
   console.log(e);
   console.log(e.nombreError);
   console.log(e.medidas);
   console.log(e.codError);
} finally {
   console.log("Se puede cerrar alguna conexión a DB, etc...");
}




//Tercera forma de lanzar una Excepción... "invocación de la excepción": e();



try {
   //Algo en el código va mal... entonces :

   e();//se manda a llamar directamente al código del bloque catch().

} catch (e) {


   console.log("Tenmos una invocación por llamada a la función");

} finally {

   console.log("Ya saben siempre se ejecuta este bloque...");

}


//En conclución podemos ver que throw regresa : una función, un objeto o algo más.
