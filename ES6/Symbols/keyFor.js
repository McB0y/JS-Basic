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
