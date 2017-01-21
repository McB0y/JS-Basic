/*

Los generadores son parecidas a las funciones,
con y podemos tener el control de ciclos dentro de ellos,
mediante la palabra reservada yield.
"En cada iteración nos devuelve un objeto con el estado del generador."

*/
function *Contador(){
  var i = 0;
  while(1<2) {
  	  yield i;
  	  yield "hola";
  	  yield "...";
  	  yield "bye"
      i++;
  }
}

var contador = Contador();

console.log(contador.next()); // {value: 0, done:false}
miContador.next().value; //te devuelve la propiedad
miContador.next().value;  //te devuelve el estado;si no ha terminado false o en caso contrario true
console.log(contador.next()); // {value: 1, done:false}
console.log(contador.next()); // {value: 2, done:false}
console.log(contador.next()); // {value: 2, done:false}
console.log(contador.next()); // {value: 2, done:false}
console.log(contador.next()); // {value: 2, done:false}
console.log(contador.next()); // {value: 2, done:false}
console.log(contador.next()); // {value: 2, done:false}
console.log(contador.next()); // {value: 2, done:false}
console.log(contador.next()); // {value: 2, done:false}
console.log(contador.next()); // {value: 2, done:false}
console.log(contador.next()); // {value: 2, done:false}
