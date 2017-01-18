/**


Mapas: Objetos que permiten la definición de "Elementos => Valor",
tenemos disponibles ciertos métodos como son:
-set
-get
-has
-delete
-keys
-values
-entries-->devuelve un objeto de arreglos
-clear

y la propiedad "size" que nos da el tamaño actual del Map.

 **/
var fruta = new Map();

fruta.set("nombre", "Manzana");

fruta.set("peso", "250 gramos");

console.log(fruta);
console.log(fruta.get("nombre"));
console.log(fruta.has("nombre"));
console.log('name:'+fruta.delete("nombre"));
console.log(fruta.has("nombre"));
