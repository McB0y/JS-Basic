/*
   McB0y.
                           "CALL".

         Uso de las funciones CALL, BIND & APPLY.
         Todo objeto en JS tiene en su prototipo
         estos tres métodos que son de bastante
         utilidad utilizar para pedir prestados datos...

*/

var carro = {
   marca : "Mazda",
   color : "Rojo",
   imprimir : function(){
      var salida = this.marca + "-" + this.color;
      return salida;
   }
}


var carro2 = {
   color : "Negro",
   marca : "Toyota"
}







 function logCarro(arg1, arg2) {
   console.log("Carro :" + this.imprimir());//apunta al obj global
   //por el momento el this apunta hacia el objeto global.
   console.log("nuestros argumentos serian : " + arg1 + " " + arg2);
   console.log("===============================================");
}



logCarro();//error, redireccionamos el apuntador hacia el objeto:




var logModeloCarro = logCarro;

//esto se coloca en el this invocando la funcion bind()
//podemos acceder ahora al  contexto del objeto carro.
logModeloCarro();

logModeloCarro("abc", "xyz");

//una manera más fácil de hacerlo seria utilizando la función call(apuntador al this, ar1, arg2, arg3);

logModeloCarro.call( carro , "Hola", "Mundo");// Log modelo carro hace ref. a logCarro y es por eso que necesita estos datos.
logModeloCarro.apply( carro , ["Gente", "Del futuro"]);//apply espera la referencia del this y un arreglo de argumentos.
//"Muy útil si no se sabe la cantidad de parámetros"



//funciones prestadas... tomaremos prestados los atributos del objeto carro2

console.log( carro.imprimir.call(carro2));//ya que sólo regresa los datos imprimir! :D
