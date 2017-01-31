/*RECUPERANDO INFORMACIÓN DEL REGISTRO GLOBAL DE SIMBOLOS*/






var globalSym = Symbol.for('foo'); // create a new global symbol
Symbol.keyFor(globalSym); // "foo"
globalSym.valueOf();

var localSym = Symbol();
Symbol.keyFor(localSym); // undefined

// well-known symbols are not symbols registered
// in the global symbol registry
Symbol.keyFor(Symbol.iterator) // undefined




// NOTE: El código anterior es la muestra de MDN. Para más infoconsulte en la página.


// NOTE: solo funciona con claves compartidas y
//es para obtener el valor de las claves



// NOTE: esto podria ser útil si queremos pasar
//un objeto o un arreglo como identificador, y
//quisieramos recuperar de nuevo la estructura.



//1.- El objeto que sera identificador desde ahorita.
var desCuenta  = {
   nombre : "Cuenta Maestra",
   iva : "no aplica",
   CAT : 7.8,
   tasaMoratoriaAnual : 60.61,
   tasaMoratoriaMensual : 5.05
}

//2.- Si es un objeto, debemos convertirlo a cadena



var aCadena = JSON.stringify(desCuenta);


var simbolo = Symbol.for(aCadena);


// NOTE:Symbol("obj") --> de esta manera no se podra recuperar
// NOTE: debe ser compartido .for(); de lo contrario regresa "undefined".
// NOTE: no importa si es arreglo u obj


Symbol.keyFor(simbolo);//RECUPERAMOS NUESTRA OBJETO-CADENA.



/*
// NOTE: La salida:
"{"nombre":"Cuenta Maestra","iva":"no aplica","CAT":7.8,"tasaMoratoriaAnual":60.61,"tasaMoratoriaMensual":5.05}"
*/
