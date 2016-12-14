/*
   McB0y.
                           "BIND".

         Uso de las funciones CALL, BIND & APPLY.
         Todo objeto en JS tiene en su prototipo
         estos tres métodos que son de bastante
         utilidad utilizar para pedir prestados datos...

*/


//una manera más fácil de hacerlo seria utilizando la función call(apuntador al this, ar1, arg2, arg3);

logModeloCarro.call( carro , "Hola", "Mundo");// Log modelo carro hace ref a logCarro y es por eso que necesita estos datos.
logModeloCarro.apply( carro , ["Gente", "Del futuro"]);//apply espera la referencia del this y un arreglo de argumentos.
//"Muy útil si no se sabe la cantidad de parametros"



//funciones prestadas... tomaremos prestados los atributos del objeto carro2

console.log( carro.imprimir.call(carro2));//ya que sólo regresa los datos imprimir! :D
