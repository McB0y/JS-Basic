/*

Utilizando typeof e instanceof

*/


(function global() {

//Se crea un nuevo scope en el documento.

   var tiaSegunda = new Familia("Chávez", "Cafes", "Curva", 1.60, "Robusta");

   var familiar = new Familia("Chávez", "Cafes", "Curva", 1.70, "Robusta");

   var tio = new Hijo("Chávez", "Cafes", "Curva", 1.80, "Robusta", "Francisco", "Ingeniero", 2);

   var primo = new Nieto("Chávez", "Cafes", "Curva", 1.80, "Robusta", "Miguel", "Ingeniero", "Sin", "Empleado");

   var intruso = new String("¿Familia cómo están?");

    var segundos = 0;

   //Entra a la mansión del clan alguien cada segundo...
   //
   // setTimeout(function() {
   //    detecta(tiaSegunda);
   //    setTimeout(function() {
   //       detecta(tio);
   //       setTimeout(function() {
   //          detecta(primo);
   //          setTimeout(function() {
   //             detecta(intruso);
   //          },1000)
   //       }, 1000)
   //    },1000)
   // }, 1000);

   var entrada = setInterval(function() {

      //entraron durante 5 segundos
      segundos++;

      if (segundos === 5) {
         clearInterval(entrada);
      }else {

      detecta(familiar);
         }

   },5000);



   function detecta(integrante) {

      console.log("Identificación correcta.");
      try {

      if ((integrante instanceof Familia) && (typeof integrante == "object")) {
         console.log("Bienvenido a la mansión...");
      } else {
         throw{
            situacion : "infiltrado",
            medida : "Se expulso al intruso"
         }
      }

      } catch (e) {

         var momento = new Date();
         console.log("El clan fue amenzado a las : " + momento.getHours() + " " + momento.getMinutes());
         console.log("Problema con un : " + e.situacion + " " + e.medida + " Fuera de peligo...");
      } finally {
         console.log("La mansión siempre sera segura.");
      }
   }

})();
