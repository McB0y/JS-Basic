
/*

Un poco más sobre las cookies

La cookie se compone de lo siguiente:
una pareja nombre/valor. --> INFO
Un dominio -->DE DONDE SE ENVIA
una ruta--> ES ACCESIBLE DESDE ESA RUTA
la fecha de expiración
la marca de solo conexión segura
marca del protocolo HTTP



document.cookie :
define modifica o borra una cookie si ya existe
devuelve todas las cookies de la pagina actual
el acceso no es directo ya que devuelve una unica cadena que tiene todas las cookies
separadas por ;


podemos ver las cookies poniendo en la barra

javascript:alert(document.cookie)

otra forma en consola es la opción : resourses-cookies ((visualizamos todas las cookies ))

*/



function setCookie(nombre, valor, fecha) {
   valor = escape(valor);//Esta función nos permite ver todos los caracteres especiales.
   var fecha =  new Date();
   fecha.setMonth( fecha.getMonth() + 1 );//Siempre expirara 1 mes después de la fecha.
   document.cookie = nombre + "=" + valor + ";expires=" + fecha.toUTCString() + ";";
}



function getCookies(nombre) {

   var cookies = document.cookie;//capturamos todas las cookies.
   var cookieArray = cookies.split("; ");//separa la cadena.
   //console.log( cookieArray );
   var long = cookieArray.length;

   for (var i = 0; i < long; i++) {
      var parArray = cookieArray[i].split("=");//crea otro arreglo
      cookieArray[i] = parArray;//inserta el valor del parArray con cada iteración.


      /*Ya que lo que se quiere es el contenido de la cookie,
      checamos en cada iteracion si lo que hay en el arreglo
      parArray en su posición 0 "el nombre de la cookie" es lo que pedimos,
      si es asi se regresa ese valor con la funcion unescape()*/

      if (parArray[0] === nombre) {
         return unescape(parArray[1]);
      }
   }
   return undefined;
}



//Volvemos a setear el valor de expiración de nuestra cookie.
function deleteCookie(nombre) {//nombre de la cookie
 var hoy = new Date();
 hoy.setMonth( hoy.getMonth() - 1 );
 //Al ver que el mes pasado fue la fecha destruye automaticamente la cookie
 valor = getCookies(nombre);//obtenemos su contenido llamando a la cookie
 document.cookie = nombre + "=" + valor + ";expires=" + hoy.toUTCString() + ";";
}
