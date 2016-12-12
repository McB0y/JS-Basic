/*
McB0y

   Expresiones regulares y como utilizarlas.

*/




/*hay dos maneras de ejecutar expresiones regulares
1.- La manera explicita.
2.- Por medio del constructor.
*/
var reg1 = RegExp("a");
var reg2 = /a/;//------->Trabajaremos con esta porqué es más comoda que instaciar la clase.

var texto = "Hola mundo";

var arreglo = texto.match(reg2);//Si encuentra por lomenos una letra a en el texto "regresa un arreglo", caso contrario NULL.
console.log(arreglo);

/*
/^a/--> nos dice que buscara la letra al inicio de la oración
/a$/--> la letra este al final de la oración
/.../---> que tres caracteres hagan match
/^.a/--->que este cualquier caracter y después venga una a
/[0-9]/---> se utiliza para leer rangos, de izquierda a derecha:
por ejemplo [a-z] o [A-Z] ya que es key sensitive

*/

var arr1 = texto.match(/[a-zA-Z]$/); // cuaquier letra del final segida de cualquier caracter.

var arr = texto.match(/^[a-zA-Z]/);// lo mismo pero al principio

var arr0 = texto.match(/[a-zA-Z0-9]/);// equivale a lo siguiente === var arr2 = texto.match(/\w/);

var arr3 = texto.match(/\d/);// sólo nos regresa incidencias de números

var arr2 = texto.match(/\s/); // encuentra los espacios y tabluadores


/*
Estos son algunos parámetros de las exp. regulares.

i = insensibles
g = todas las apariciones
m = que sea multilinea
*/

var arr20 = texto.match(/m/i);-->// que encuentre una m sin importar las mayuculas o minusculas
var arr21 = texto.match(/[aeiou]/ig);--> //que busque todas las ocurrencias de las vocales sin importar el
                                         //orden y si hay enter.
var arr22 = texto.match(/[aeiou]|[áéíóúñ]/ig);//---> todos los simbolos en castellano
var arr23 = texto.match(/o+/g);--> //operadores de aparicion (en este ejemapplon dice que tiene que venir una "o")
                                  //seguido de cualquier cantidad de "0"
var arr24 = texto.match(/o?/g);--> //mucho cuidado con este por que dice que tiene  que aparecer la letra o
                                  //o no tiene que aparecer, osea que mal empleado regresaria todo la cadena en forma de arreglo
                                 //un claro ejemplo seria que un string vacio haga match
var arr25 = texto.match(/o*/g);--> //este es que apresca 0 o mas veces es decir : que aparesca una "o" u "oo" u "ooooooo"
var arr26 = texto.match(/o{2}/g);--> //podemos definir cuantas veces aparece un caracter, aqui es por lomenos "2"
var arr27 = texto.match(/o{3,4}/g);-->// Dice que deben de benir 3 "o" o 4 "o" seguidas
var ar = diptongo.match(/\d{2,}/g);-->//Dice que cualquier numero que se repita de 2 a n veces



//////////////////////////////////////////////////////////////////////////////////////////


/*

Ejemplos de expresiones regulares aplicados

*/
var diptongo1 = "La respuesta es 40 + 50 = 60";
var diptongo = "Aeropuerto";
var ar = diptongo.match(/[aeiou]{2,2}/ig);
console.log(ar);
var ar2 = diptongo1.match(/respuesta | \d{2,}/ig);// que aparesca la palabra respuesta seguida de 2 numero consecuentes o n consecuentes
