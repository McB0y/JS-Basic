//Propiedades de los nodos.

var html = document.createElement("html");
var head= document.createElement("head");
var body= document.createElement("body");
var footer= document.createElement("footer");
html.appendChild(head);
html.appendChild(body);
html.appendChild(footer);

var h1 = document.createElement("h1");
var h2 = document.createElement("h2");
var h3 = document.createElement("h3");
var div = document.createElement("div");
var p = document.createElement("p");
var aside = document.createElement("aside");


body.appendChild(h1);
body.appendChild(h2);
body.appendChild(h3);
body.appendChild(div);
body.appendChild(aside);
div.appendChild(p);

h1.setAttribute("class", "moca");
h1.setAttribute("id", "moca");
h1.setAttribute("name", "moca");

h2.setAttribute("class", "vanilla");
h2.setAttribute("id", "vanilla");
h2.setAttribute("name", "vanilla");

h3.setAttribute("class", "coco");
h3.setAttribute("id", "coco");
h3.setAttribute("name", "coco");

div.setAttribute("class", "contenedor");
div.setAttribute("id", "contenedor");
div.setAttribute("name", "contenedor");

aside.setAttribute("class", "aside");
aside.setAttribute("id", "aside");
aside.setAttribute("name", "aside");

p.setAttribute("class", "parrafo");
p.setAttribute("id", "parrafo");
p.setAttribute("name", "parrafo");

/*De la misma forma tenemos el método "getAtributes" para obtener
el atributo de un elemento y para obtener una lista de atributos
usamos el método 'attributes'
de dos formas:
1.- elemento.getAtribute('atributo')
sólo regresa el atributo que se especifica.
2.-elemento.attributes

*/


                  //PROPIEDADES
//Si queremos conocer el nombre de un elemento,
//podemos usar la propiedad name que devuelve
//en mayúsculas el nombre, lo que es útil cuando queremos
//conocer que tipo de elemento es por ejemeplo:


body.insertBefore(texto, aside);
body.nodeName;//"BODY"
var contenedor = document.createElement("section");
contenedor.nodeName;//"SECTION"


//className : Regresa una cadena con todas las clases de elemento
// puede serutilizado también para setear nuevos valores.
//classList : Regresa un arreglo con todas las clases,
//pueden setearse nuevos valores pasandole una cadena.

contenedor.className = " contenedor section1 dividido";
contenedor.classList = " rojo blanco azul";


/*ACCESO A TEXTOS:
Dos formas:
elemento.textContent --> elementos que si tienen cierre y que contienen texto
elemento.value---> en elementos que no tienen cierre de etiqueta y cuentan con este atributo
                   por ejemplo: imput, select, etc. Nos trae el contenido

Ambas propiedades sirven como set y get, lo curioso es que si se quieren los contenidos
texto de los hijos de un contenedor podemos usar .textContent para obtenerlos.
*/


//NodeValue: Nos regresara el valor del nodo dependiendo de si es un
//nodo de tipo elemento devuelve null, si es nodo de tipo texto el contenido.

contenedor.NodeValue;
//regresa null por que es un elemento
var texto = document.createTextNode("Soy un texto!");
texto.NodeValue;//nos regresa la cadena "Soy un texto!".


//title: nos permite setear de manera directa el valor del attr title
contenedor.title = "el titulo del contenedor"

//tagName similar a nodeName pero solo con los elementos HTML

contenedor.tagName;//regresa la cadena "SECTION".

//childNodes : Nos regresa un array de nodos incluyendo los nodos de texto como comentarios
// NOTE: NO ES UN ARREGLO!!!! es un "NODELIST".
body.childNodes; //[h1, h2, h3, div, text, aside]

//children sólo nos regresa los nodos elemento.
// NOTE: Cabe aclarar que no tenemos acceso a los metodos de este arreglo
//porqué no es un arreglo! "ES UN HTML COLLECTION"
body.children;//[h1, h2, h3, div, aside]


//SI SE USA UNA SELECCION DE DOM -- ESO SI TE DEVUELVE UN ARREGLO!
