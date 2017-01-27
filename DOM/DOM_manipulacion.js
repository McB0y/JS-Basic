//Tenemos muchos elemetos para manipular el DOM
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
var p1 = document.createElement("p");
var p2 = document.createElement("p");
var aside = document.createElement("aside");


body.appendChild(h1);
body.appendChild(h2);
body.appendChild(h3);
body.appendChild(div);
div.appendChild(p);

//establecer y quitar los atributos de un nodo elemento
h1.setAttribute("class", "moca");
h1.setAttribute("id", "moca");
h1.setAttribute("name", "moca");
h1.removeAttribute("class");
h1.removeAttribute("id");
h1.removeAttribute("name");//puede ser cualquier propiedad.



//Insertando elementos en orden
var h3 = document.createElement("h3");
var h4 = document.createElement("h4");
body.insertBefore(h3, aside);//un h3 antes de un aside.
aside.insertBefore(h3, this.target);//aparecera dentro del aside en primer lugar;

//removiendo elementos hijos
div.removeChild(p);


//remplazando elementos existentes.
var aside1 = document.createElement("aside");
body.replaceChild(aside1, div);


// podemos hacer otro tipo de manipulaciones con el DOM por ejemplo
var plantilla = new Array();
plantilla = ["<p>", "Soy un Array Plantilla", "</p>"];
plantilla.join("");
// nos regresa lo siguiente ya que es es un array.
//"<p>Soy un Array Plantilla</p>"





//Suponiendo que los elemenentos existen.
//recorriendo el Dom y comprobando el tipo y de que instancia derivan
//se obtienen lo siguiente:

var menu = document.getElementById("menuBoton")
//<div id="menuBoton"></div> es la salida
//su prototipo es "menu.__proto__" y regresa HTMLDivElement
//que en realidad es un object y su prototipo es Node

typeof menu;//"object"
menu instanceof Node//true

var cabecera = document.querySelector("header");
var hijos = cabecera.children;
//cabecera.__proto__ = "HTMLElement"
//al usar var hijos = cabecera.children "children en específico"
//nos regresa un HTMLCollection "NO UN ARREGLO".
hijos.__proto__;//HTMLCollection {Symbol(Symbol.toStringTag): "HTMLCollection"}


var hijos1 = cabecera.childNodes
hijos1.__proto__;//NodeList {Symbol(Symbol.toStringTag): "NodeList"}
//si accedemos al atributo 'nodeList'  lo que nos regresa es
//un NodeList de nuevo "NO ES UN ARREGLO"!!
//Una forma de saber rapidamente de el prototipo usando Reflect API.
Reflect.getPrototypeOf(hijos)//HTMLCollection
Reflect.getPrototypeOf(hijos1)//NodeList.


//Suponiendo que se tiene un elemento de tipo body
var body = document.querySelector("body");
//seleccionamos los elementos hijos
var elementosBody = body.children.
elementosBody[0].children//regresa un HTMLCollection
elementosBody[0].firstChild//REGRESA LA INSTANCIA DE UN ELEMENTO HTML
var img = elementosBody[0].firstChild;
img instanceof HTMLElement//true
img instanceof HTMLImageElement//true


//className --> regresa un string con las clases de el elemento.
//classList --> regresa un DOMTokenList[]. "NO UN ARREGLO."
//ambos pueden ser seteados igalandolos a un String e.g

img.classList = "parallax-slider"
img.className = "parallax-slider"
//para setear más de una clase al mismo tiempo
img.className = "parallax-slider esta aquella"
img.classList = "parallax-slider esta aquella"
