/*
DOM "DOCUMENT OBJECT MODEL"
NOTE: "EL DOM NO FORMA PARTE DE LA ESPECIFICACIÓN
       ECMA SCRIPT asi que NO ES JAVASCRIPT!, comocueriosidad."
El API del DOM es un conjunto de métodos que nos permiten
la manipulación de un documento HTML o XML.
Este transforma el documento en un arbol de nodos jerárquico,
que es facilmente manipulable, los nodos más importantes son:

-"Document". ---> "El nodo Ráiz todo el (HTML)".
-"Element". ---> "Está definido por un elemento html".
-"Attr". ---> Se define como los atributos de los elementos HTML.
-"Text". ---> Se define como el contenido textual de los elementos.
*/


//Manipulando el DOM.
var html = document.createElement("html");
//o podriamos poner para todos loselementos :
//var html = document.documentElement;
//var body = document.body;
//var head = document.head;...etc
var body = document.querySelector("body");
var footer = document.createElement("footer");
var main = document.createElement("main");
var section = document.createElement("section");
var aside = document.createElement("aside");
var video = document.createElement("video");
var h1 = document.createElement("h1");

/*De manera estricta podemos ver que estos no serias elementos
ya que un elemento se corresponde a una etiqueta.
Por tanto los siguientes serian propiedades del documento.*/
var url = document.URL;
var domanin = document.domain;
var scripts = document.scripts;
var css = document.styleSheets;
var charset = document.charset;

/*Locurioso es que también podriamos acceder a propiedades como :*/
var links = document.links;
var imagenes = document.images;
var formularios = document.forms;

html.appendChild(head);
html.appendChild(body);
body.appendChild(main);
html.appendChild(footer);
body.appendChild(h1);

//creando nodos atributos.
var class = document.createAttribute("class");
var id = document.createAttribute("id");
var name = document.createAttribute("name");
//para poder agregar y setar nodos atributo hay una forma mucho mas sencilla de lograrlo.
h1.setAttribute('name', "miNombre");

//creando nodos de texto.
var texto = document.createTextNode("El texto que se dese en el elemento.");
//para agregarlo al elemento se puede hacer de la siguiente manera.
var h1.append(texto);

//Para poder agregar estilos a un elemento hay distintas formas
//la forma más comoda para mi es la siguiente ya que permite pasar
//las propiedades con la sintaxis de tipo css.
// elemento.style.cssText = "porpiedades css"; Ejemplo:

h1.style.cssText= "color : red";

//para poder agregar elementos a otros elementos podemos
//ocupar el metodo .innerHTML que crea un html text o devuelve el
//contenido de algun elemento HTML a continueción un ejemplo:

var div = document.createElement("div");
div.innerHTML = "<p>Soy el parrafo dentro del div!</p>";//Asigno ese comtenido!
div.innerHTML; //regresa una cadena con el contenido del div
//"<p>Soy el parrafo dentor del div!</p><p>Soy el parrafo!</p>"
p.style.cssText="padding : 0px; border : 0px; color : red;";//agregar estilos.



//Podemos saber los estilos de un elemento cualquiera, aunque sera
//sólo lectura
var p  = document.querySelector("div > p");
var estilos = getComputedStyle(p, null);//regresa un objeto con todos los estilos
//para saber una propiedad en específico:
estilos.backgroundColor;
