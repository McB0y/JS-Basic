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



addEventHandler('click', function() {
   console.log(this);
});
