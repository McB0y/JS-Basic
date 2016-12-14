/*

McB0y

   Ejercicio utilizando "APPLY".


*/


var desktopComputer = {
   monitor : "OLED",
   teclado : "mecánico",
   refrijeracion : "cooler liquido",
   procesador : "i5 Intel",
   tarjetaDeRed : "Alto desempeño",
   almacenamiento : "SSD 1TB",
   encender : function() {
      console.log("Encendiendo...");
   },
   conectar : function() {
      console.log("Conectarse a la red...");
   }
};

var smartTV = {
   monitor : "OLED 80' ",
   tarjetaDeRed : "Alto desempeño",
   navegador : "si",
   verNextflix : function(serie, pelicula) {//la tomaremos prestada
      console.log("Estamos viendo : " + serie);
      console.log("Después veremos : " + pelicula);
      console.log("===============================================");
      console.log("En colección : " + serie + ", " + pelicula + " ¿Quiere seleccionar más?");

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
   },
   caracteristicas : function() {//la tomaremos prestada
      console.log("Caracteristicas técnicas : " + this.monitor + " " +  this.refrijeracion +
       " " + this.procesador + " " + this.tarjetaDeRed + " " + this.almacenamiento);
   },
   distraerse : function(arg1, arg2) {
      return this.verNextflix(arg1, arg2);
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
   },
   movieCenter : function(arg1, arg2) {
      return this.verNextflix(arg1, arg2);
   }
};

//1.- Viendo Nextflix en la laptopGaming y en la raspBerryPi


//funciono con call
laptopGaming.distraerse.apply(smartTV, ["Breaking Bad", "Star Wars"]);
raspBerryPi.movieCenter.apply(smartTV, ["Maratón de series", "Maratón de películas"]);




/*

StackOverFlow

function product(name, value)
{
  this.name = name;
  if (value >= 1000)
    this.value = 999;
  else
    this.value = value;
}

function prod_dept(name, value, dept)
{
  this.dept = dept;
  product.apply(this, arguments);
}
prod_dept.prototype = new product();

// since 5 is less than 1000 value is set
var cheese = new prod_dept("feta", 5, "food");

// since 5000 is above 1000, value will be 999
var car = new prod_dept("honda", 5000, "auto");

*/
