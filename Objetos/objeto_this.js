/*

El contexto de la palabra this varia con respecto a 3 situaciones.

1.- Dentro de una función devolvera el objeto global "window".
1.a- Usando modo estricto sera "undefined"
2.- Dentro de un método se refiere al objeto
2.a-Si se usa en un evento se refiere a quien lo dispara.
3.-En un constructor se refiere a la estructura que lo define,
es decir hacer referencia al objeto del que fue instanciado.
*/

(function() {
   "use strict"
   console.log(this);//Regresa undefined.

})();


var button = document.querySelector('#siguiente');
button.addEventHandler('click', function() {
   console.log(this);//Es el elemento HTML que disparo este evento
});

class ThisIs {
   constructor(valor, contexto) {
      this.valor = valor;
      this.contexto = contexto;
   }
   vale(){
      console.log("this dentro del constructor hace referencia a la instancia.");
      console.log(this);//Hace referencia a toda la clase
/*
En otras palabras "nombreDeLaInstancia.constructor" ==> regresa la estructura de la clase
Dentro del metodo de la clase cosntructor ==> ThisIs {valor: "mi valor", contexto: "mi contexto"}
*/
   }
};

var valorThis = new ThisIs();
