/*
   McB0y.
   Las funciones en Javascript pueden recibir cualquier tipo de objeto,
   incluidas funciones, estas siempre regresan un valor, se muestran algunos
   ejemplos de su uso a continuación.

   Puedes consultar la siguiente bibliografía:
   Título: Aprendiendo Javascript
   Autor : Carlos Azaustre.
*/



var nombre = "Hugo";
var apellido = "Sánchez";
var profesion = "Futbolista";
var nacionalidad = "Mexicano";
var equipo = "Real Madrid";

/*Se están declarando las variables en los parámetros,
pero si no se declaran en el documento u objeto global marcara error.*/

function getDatos (nombre, apellido, profesion, nacionalidad, equipo) {
 console.log("Los datos del jugador son : " + nombre +
" ," + apellido + " ," + profesion + " ," + nacionalidad + " ," + equipo);
}

//una vez que fueron declaradas las varibles que recibe la funcion procedemos:
getDatos("Ramón", "Caballero", "Godínez", "Programador", "Mexicano", "C0smos");
//pasando valores por valor.

getDatos(nombre, apellido, profesion, nacionalidad, equipo);
//o utilizando valores ya declarados.



   //Declaración del objeto en el documento.
   var persona = {
      nombre: "Hugo",
      apellido: "Sánchez",
      profesion: "Futbolista",
      nacionalidad: "Mexicano",
      equipo: "c0smos"
   };

//Defininimos la función, donde persona es un obj anónimo o un obj prev. declarado.
   function datos(persona){
      console.log(persona.nombre + " " + persona.apellido + " " + persona.profesion
      + " " + persona.nacionalidad + " " + persona.equipo);

      //podemos utilizar los metodos de los objetos:
      var personaCadena = JSON.stringify(persona);
      console.log(personaCadena);
      console.log(personaCadena.length);
      persona = JSON.parse(personaCadena);
      console.log(persona);

      var per = Object.getOwnPropertyNames(persona);
      per.push("Hobie");

      per.forEach(function(elemento, indice) {
         console.log("Propiedad del objeto " + elemento);
      });

      for (var propiedad in persona) {
         if (persona.hasOwnProperty(propiedad)) {
            console.log("Valor : " + persona[propiedad]);//
         }
      }

   }

//de está forma se pueden mandar objetos anónimos a las funciones.
datos({
   nombre: "Ramón",
   apellido: "García",
   profesion: "Franco Tirador",
   nacionalidad: "Mexicano",
   equipo: "c0smos"
});


//También podemos recibir funciones anónimas y ejecutarlas.

function ejecutaAnonima(fn) {
   fn();
}


//declarar antesde usarla para evitar un error.
function suma(a, b, c, d){
   a = a || 10;
   b = b || 20;
   c = c || 30;
   d = d || 40;
   //relizamos varias operaciones.
   aleatorio = Math.random();

   resultado = (a*aleatorio)/(b*aleatorio) + c;

   resultado2 = (a*aleatorio)/(b*aleatorio) + d;

   if(resultado2 > resultado)
      console.log("El resultado2 fue mucho más grande..." + resultado + " " + resultado2);
   else
    console.log("Resultado fue más grande..." + resultado + " " + resultado2);
}


//mandamos la función anonima.
ejecutaAnonima(function() {
   console.log("Quiero ejecutar una función anónima...");
   suma();
});




//ya que las funciones siempre devuelven algo podemos incluso regresar fn anonimas.
//son Closures.


function crearFun ({}) {
   return function(nombre){
      console.log("Regrese de un return anónimo, mi contenido es : " + nombre);
      return function(){
         console.log("Soy un return anónimo y regrese de un return anónimo...");
      }
   }
}
//Para ver el resultado ejecutamos lo sig: returnAnonima();
var returnAnonima = crearFun(persona.nombre);
var segundoCallBack = returnAnonima();



//podemos también asignar a las funciones propiedades, objetos, etc.

function miFuncion() {
   console.log("Soy solamente una funcion más...");
}

miFuncion.nombre = "La funcion";

miFuncion.unObjeto = {
   nombre : "Soy el objeto de la función",
   metodo: "Un método más de la función"
}
