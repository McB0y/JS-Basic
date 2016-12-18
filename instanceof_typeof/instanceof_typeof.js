/*

         Preludio del polimorfismo.


El operador instanceof regresa verdadero si el objeto especificado es del tipo especificado.
nombreObjeto instanceof tipoObjeto, puede recurrir a diferentes códigos de manipulación de
excepciones dependiendo del tipo de excepción tomada.


Debe especificar un objeto en el lado derecho del operador instanceof.
Por ejemplo, puede especificar una cadena creada con el constructor String,
pero no puede especificar un literal de cadena.

color1=new String("verde")
color1 instanceof String // devuelve verdadero (true)
color2="coral"
color2 instanceof String // devuelve falso (color2 no es un objeto String)


El operador typeof devuelve una cadena que indica el tipo del operando sin evaluarlo.
operando es la cadena, variable, palabra clave u objeto para el que se devolverá su tipo.
Los paréntesis son opcionales.

typeof Date == 'function'
typeof Function == 'function'
typeof Math == 'object'
typeof Object == 'function'
typeof String == 'function'

typeof true == 'boolean'
typeof null == 'object'

*/

(function global() {

   identificado();

   function identificado() {//identificaremos el tipo de parametro que se esta enviando.

      function Man() {
         this.nombre = "Happy";
         this.edad = 30;
      }

      var man = new Man();

      console.log("Tenemos argumento del tipo :" + (typeof man))
      console.log("Tenemos una instancia de : " +  (man instanceof Man));
   }

})();
