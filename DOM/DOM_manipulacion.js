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
