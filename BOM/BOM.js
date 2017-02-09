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
.scrollTo(x,y);
.scrollBy(x,y);

*/
