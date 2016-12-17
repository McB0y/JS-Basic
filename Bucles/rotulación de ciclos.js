/*
McB0y

Rotulación de ciclos y sentencias de escape.

*/

//Basta con poner una etiqueta indicando donde empieza el ciclo.

      for_principal:
      for(var i = 1; i<=5; i++){
         console.log("i", i);
         for_secundario:
         for(var j = 1; j<=5; j++){
            console.log("j", j);
            for(var x=1; x<=5; x++){
             console.log("El valor de x ", x);
               break;//salir de este ciclo
               break for_secundario; //salir del secundario
               break for_principal; //salir del ciclo principal.
            }
         }
      }

//'continue' es utilizado para saltar a la siguiente linea de código
      for (var i = 0; i < 10; i++) {

         if (i === 5)
         continue;
         console.log("i vale : " + i);

      }


//Se puede rotular cualquier tipo de ciclo como while

      var condicion = 0;
      var condicion2 = 0;

      while (condicion<=2) {
         console.log("Vuelta no. " + condicion);


         while_secundario://rotulando el ciclo.
         while (condicion2 <=5) {
            console.log("ciclo secundario :" + condicion2);
            if (condicion2 === 4) {
               break while_secundario;
            }else
            console.log("En orden...");
            condicion2++;
         }

         condicion++;
      }
