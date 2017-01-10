/*

McB0y

   Ejercicios utilizando "BIND"

*/


var desktopComputer = {
   monitor : "OLED",
   teclado : "mecánico",
   refrijeracion : "cooler liquido",
   procesador : "i5 Intel",
   tarjetaDeRed : "Alto desempeño",
   almacenamiento : "SSD 1TB",
   encender : function() {
      console.log("Encendiendo el monitor " + this.monitor);
   },
   conectar : function() {
      console.log(this.tarjetaDeRed + " para la conexión");
   }
};

var laptop = {
   monitor : "LCD",
   teclado : "reticular",
   refrijeracion : "cooler master",
   procesador : "AMD A10",
   almacenamiento : "SSD 1TB",
   encender : function() {
      console.log("Encendiendo...");
   }
};


var laptopGaming = {
   monitor : "OLED 17' ",
   teclado : "mecánico",
   refrijeracion : "refrijeración liquida",
   procesador : "i7 Intel",
   tarjetaDeRed : "Alto desempeño",
   almacenamiento : "SSD 1TB",
   overclocking : function(){
      console.log("Acelerando nuestro proesador al máximo!");
   },
   modoConsola : function() {
      console.log("PS4, XBOX ONE, NINTENDO, EMULS," +
                  " sin importar que sea correra mil veces mejor aquí... xD ");
   }

};


var raspBerryPi = {
   monitor : "sin monitor ",
   teclado : "sin teclado",
   procesador : "ARM",
   conexionDeRed : "J45 ETHERNET",
   almacenamiento : "micro SD expandible...",
   gpios : 40,
   conectarTeclado : function(tipoTeclado) {
      console.log("Conectando nuestro teclado de tipo : " + tipoTeclado);
   },
   conectarPantalla : function(tipoPantalla) {
      console.log("Conectando un@, " + tipoPantalla);
   },
   desarrolo : function(componentes, aplicacionIoT) {//componentes es un arreglo
      console.log("Desarrollando proyecto de IoT...");
      console.log("Material : " + componentes + " " + "aplicada en : " + aplicacionIoT);
   }
};


//1.-raspBerryPi pide prestado el metodo encender() de desktopComputer


function encenderPi(){
   return this.encender();//queremos que apunte a quien tiene el método.
}

var accion = encenderPi.bind(desktopComputer);//Pasamos al parametro el objeto al que apunta this
//podria ser tambien así al ejecutar: encenderPi.bind(desktopComputer)();

accion();



//2.- laptop pide prestado el metodo overclocking() de la laptopGaming

function acelerando() {
console.log("Habra overclocking, bajo su propio riesgo : ");
return this.overclocking();
}


var accion = acelerando.bind(laptopGaming);//Pasamos al parametro el objeto al que apunta this
//podria ser tambien así al ejecutar: encenderPi.bind(desktopComputer)();

accion();


//3.-Pidiendo prestadas propiedades.

function cambioCPU() {
   console.log("Antes tenia un procesador de gama media ahora...");
   return this.procesador;
}

var swit = cambioCPU.bind(laptopGaming);
swit();




/*Un ejemplo que encontre sobre el uso de bind para resolver el lexical this de pentacode.com */

// Solving lexical "This" with .bind()
var myVar = {};

myVar.name = 'pentacode';
myVar.numbers = [1,2,3,4,5];

myVar.printNumbers = function() {

  this.numbers.forEach(function(number) {
      console.log(this.name + ' counts ' + number);
  }.bind(this));
  
}
myVar.printNumbers();
