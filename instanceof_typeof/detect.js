/*

Utilizando typeof e instanceof

*/


(function global() {

//Se crea un nuevo scope en el documento.

   var tiaSegunda = new Familia("Chávez", "Cafes", "Curva", 1.60, "Robusta");

   var tio = new Hijo("Chávez", "Cafes", "Curva", 1.80, "Robusta", "Francisco", "Ingeniero", 2);

   var primo = new Nieto("Chávez", "Cafes", "Curva", 1.80, "Robusta", "Miguel", "Ingeniero", "Sin", "Empleado");

   var intruso = new String("¿Familia cómo están?");


   //poniendo a prueba
   detecta(tiaSegunda);
   detecta(tio);
   detecta(primo);
   detecta(intruso);



   function detecta(integrante) {

      console.log("Sólo se dara la bienvenida a los que sean integrantes de la familia.");
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
