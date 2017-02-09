/*

BOM: Modelo de objetos del navegador (Browser Object Model).

Este modelo define al navegador (scroll, history, screen, etc).

*/

//El objeto principal es window y podemos tener acceso a propiedades
//directas ya que todas ellas tienes acceso a este objeto de mayor
//jerarquía por ejemplo:


window.innerHeight;// === innerHeight
window.alert("Un mensaje!"); // alert("Un mensaje!")


/*Tenemos métodos disponibles como:
.open('url');
.close()
.moveTo(x,y);
resizeTo(x,y);
.print();
.scrollTo(x,y);//Es la referencia desde la parte superior (inicial)
.scrollBy(x,y);//E con respecto a la posición actual

*/

// NOTE: Los navegadores comparten muchas tecnologias
// pero hay muchas otras que estos no comparten.

window.chrome;//regresa un objeto si este es ejecutado sobre google chrome
window.chrome;//regresa undefined en mozilla por ejemplo.


// NOTE: La siguiente es una buena forma de poder detectar los navegadores
//http://stackoverflow.com/questions/9847580/how-to-detect-safari-chrome-ie-firefox-and-opera-browser


//LOCATION : Elobjeto que nos permite conocer la estructura de una URL.
/*

Entre sus propiedades tenemos los siguiente.

.hash
.host
.hostname
.href
.origin
.protocol
.pathname//el complemento que viene despues del dominio.

//Podemos colocarnos en un elemento de la página desde la url haciendo lo siguiente:

"url".html#'idDelElemento'
agregando '#' + el id de un elemento podemos colocarnos en el mismo

ejemplo:
http://www.mipagina.com/unsubdominio.html#elParrafo

redireccionar la página:

solo es necesaria la propiedad href del objeto location

*/

setTimeout(function() {
   location.href = "http://google.com";
},3000);//funcion de redirección automatica.


/*
Tenemos un par de métodos disponibles:
.assign('url'); ---> nos redirecciona a esta url.
.replace('url'); --->Nos redirecciona pero sin meter la URL al historial.

*/
