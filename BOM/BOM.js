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
