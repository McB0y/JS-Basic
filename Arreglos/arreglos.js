/*
   McB0y.
   Ejemplos relacionados a los arreglos y los métodos que podemos utilizar
   para manipularlos.


   Puedes consultar la siguiente bibliografía:
   Título: Aprendiendo Javascript
   Autor : Carlos Azaustre.
*/


//transformaremos las siguientes cadenas en arreglos y los manipularemos.

var pensamiento = "Hoy es el día que puedo practicar mis conocimientos de javascript"
var frase = "El respeto al derecho ageno es la paz"
var listaDeCompras = "huevo, leche, arroz, azucar, cereal, jugo"
var gadgets = "iphone, ipad, zenBook, VRealGlasses, smartWatch, etc"
var educacion = "kinder, primaria, secundaria, bachillerato, superio"
var texto = "jsdipovhnaworuvnosdjnoufbrvuhsdnkch ewoifhwioj uwrhgiohwdoiwhrg"


function primerCaracter() {
   var prim = frase.charAt(0);

      var prim1 = listaDeCompras.charAt(0);

         var prim2 = gadgets.charAt(0);

            var prim3 = educacion.charAt(0);

               var prim4 = texto.charAt(0);

               console.log("Las primeras letras son :" + prim + prim1 + prim3 + prim4);
            }


function Arreglos() {
   //el método split nos permite transformar cadenas en arreglos pasando como parametro
   //un caracter que servira como separador de los elementos.

   frase = frase.split(" ");
   listaDeCompras = listaDeCompras.split(",");
   pensamiento = pensamiento.split(" ");
   gadgets = gadgets.split(",");
   educacion = educacion.split(",");
   texto = texto.split("");

   console.log("He aqui los arreglos :" + frase + "\n" + listaDeCompras + "\n" +
   pensamiento + "\n" + gadgets + "\n" + educacion + "\n" + texto + "\n");
}




function longitudes() {

   pensamiento = pensamiento.length;
   frase = frase.length;
   listaDeCompras = listaDeCompras.length;
   gadgets = gadgets.length;
   educacion = educacion.length;
   texto = texto.length;

   console.log("Las longitudes de las cadenas son : "+ pensamiento + " " + frase + " " + listaDeCompras
   + " " + gadgets + " " + educacion +  " " + texto);

}



//arreglos

var	miArrayNum	=	[1, 2, 3, 4];	//	Array	de	números
var	miArrayCad	=	["Hola",	"que", "tal"];//	Array	de	Strings
var	miArrayObj	=	[	{propiedad:	"valor1"	},	{	propiedad:	"valor2"	}];	//	Array	de	objetos
var	miArrayMatriz	=	[[2,	4],	[3,	6]];	//	Array	de	arrays,	(Matriz);
var	miArrayM	=	[1,	true,	[3,2],	"Hola",	{clave:	"valor"}];	//	Array	mixtos

// NOTE: los arreglos de tipo numérico resultantes
var cadenaAsc = miArrayNum.sort();
var cadenaDes = miArrayNum.reverse();
var cadenaIns = miArrayNum.push(dato1, dato2 , dato3);
var cadenaPrincipio = miArrayN.unshift(dato1, dato2, dato3);//agrega elementos al principio del arreglo
var cadenaDel = miArrayNum.pop(dato);
var cadenaDelP = miArrayNum.shift(dato);//borra el elemento del principio
var cadenaString = miArrayNum.join();// NOTE: este método nos regresa una cadena de texto del arreglo, se le puede pasar un string separador.
var vacio = miArrayNum.splice(indiceComienzo, indiceFinal);//eleimina elementos del array ("indice donde comienza", "cuantos elementos elimina");
//Se puede también agregar elementos con splice pasando desde el tercer parametro en adelante los elementos por ejemplo;
miArrayNum.splice(1,1, "Nuevo1", "Nuevo2");//empieza a eleiminar en el índice 1 borra solo un elemento y agrega los siguientes dos en la posicin 1.
var cadenaCut = miArrayNum.slice(indice, indiceFinal); // NOTE: corta el arreglo tomando como referencia al índice y el segundo parametro donde termina "NO MODIFICA EL ARRAY ORIGINAL"

// NOTE: los arreglos de tipo cadena resultantes

var numericoAsc = miArrayCad.sort();
var numericoDes = miArrayCad.reverse();
var numericoIns = miArrayCad.push(cad1, cad2, cad3);
var numericoDel = miArrayCad.pop(cad1);
var numericoDelP = miArrayCad.shift(cad1);
var numericoString = miArrayCad.join(); // NOTE: Nos regresa su equivalente en cadena.
var numericoCut = miArrayCad.splice(indiceComienzo, indiceFinal);
 var vacio = miArrayCad.slice(indice, indiceFinal);
// NOTE: los arreglos de objetos

var objetoAsc = miArrayObj.sort(); // NOTE:  Notese que respetara la jerarquía del primer criterio que encuentre para ordenar
var objetosDes = miArrayObj.reverse(); // NOTE: toma como base para ordenar el contenido del arreglo
var objetosInsP = miArrayObj.unshift(obj1, obj2, obj3);//agrego al principio.
var objetosIns = miArrayObj.push(obj1, obj2, obj3);// NOTE: insertando 3
var objetoDel = miArrayObj.pop(obj1); // NOTE: retirando 3 objetos
var objetoStrig = miArrayObj.join();// NOTE: representacion del arreglo de objetos en cadena de caracteres
var objetoCut = miArrayObj.slice(indice, indiceFinal); // NOTE: cortando el objeto
var vacio= miArrayObj.splice(indiceComienzo, indiceFinal);

// NOTE: Los arreglos que forman matrices

var matrizAsc = miArrayMatriz.sort();
var matrizDes = miArrayMatriz.reverse();
var matrizIns = miArrayMatriz.push(array1, array2, array3);
var matrizDel = miArrayMatriz.pop(array1);
//agregar shift() y unshift()., slice() y splice()
var matrizString = miArrayMatriz.join();


// NOTE: Arrays mixtos


var mixAsc = miArrayM.sort();
var mixDes = miArrayM.reverse();
var mixIns = miArrayM.push(elemnt1, elemnt2, elemnt3);
var mixDel = miArrayM.pop(elemnt1, elemnt2, elemnt3);
var mixString = miArrayM.join();

//agregar shift() y unshift(), slice() y splice()




//funcion map(); aplica a todos los elementos del arreglo, regresando un arreglo con los valores resultantes


miArrayNum.map(function(elemento) {
   return elemento*=2;
});

miArrayCad.map(function(elemento) {
   return elemento.concat(" Palabra")
});


miArrayObj.map(function(elemento) {
   return JSON.stringify(elemento);
});

var nuevesito = miArrayMatriz.map(function(elemento) {
   return elemento.push(1);
});


//sólo aplica a los elementos del arreglo en ciertas condiciones,
//sustituye a un ciclo pero más especifico. Regresa un arreglo resultante,
//con las posiciones de los respectivos elementos;

miArray.filter(function(elemento){
return	elemento	%	3	===	0; });

miArrayM.filter(function(elemento){
return	typeof(elemento) ===	"number"; });

miArrayM.filter(function(elemento){
return	typeof(elemento) ===	"boolean"; });
