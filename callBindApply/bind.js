/*
   McB0y.
                           "BIND".

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






//console.log("Tenmos la siguiente salida :" this.imprimir()); deberia haber error ya que no existe imprimir en el obj global.

var logCarro = function(arg1, arg2) {
   console.log("Carro :" + this.imprimir());//apunta al obj global
   console.log("nuestros argumentos serian : " + arg1 + " " + arg2);
   console.log("===============================================");
};



logCarro();//error, redireccionamos el apuntador hacia el objeto:




var logModeloCarro = logCarro.bind(carro);//esto se setea en el this invocando la funcion bind()
logModeloCarro();//podemos acceder ahora al  contexto del objeto carro.

logModeloCarro("abc", "xyz");
