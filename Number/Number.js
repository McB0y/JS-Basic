/*
   McB0y.
   Ejemplos de la clase "Number" sobre el core de JS,
   son codificados en formato de coma flotante de doble precisión.
   (64 bits/8 bytes). y podemos operar en un rango de :
   ~1,797x10^3085x10^-324


   Puedes consultar la siguiente bibliografía:
   Título: Aprendiendo Javascript
   Autor : Carlos Azaustre.
*/


//parseInt()

//1.-Por defecto sólo se regresa el número en notación de entero.
//2.-Base décimal. El primer parámetro es un número cualquiera y el segundo la base.
//3.-Base octal.
//4.-Base hexadécimal.
//La estructura seria ("número", BASE); : Donde el número sería cualquiera en notación de cadena.
//y BASE sería la notación que se desea obtener.


parseInt("1111");//regresa 1111
parseInt("1111",2);// regresa 15
parseInt("1111",8);//regresa 585
parseInt("1111",16); //regresa 4369



//parseFloat()


//Muy similar al método Int pero con la excepción de que nos regresa
//la parte decimal de número que se le está pasando como parámetro
//por defecto nos regresara el número de la cadena que se le pase.

parseFloat("1111");//regresa el número 1111 ya que no detecta un flotante.
parseFloat("512.36");//regresa 512.36 ya que si es número flotante.
parseFloat("5e3");//devuelve 5000
parseFloat("5e30");//si la notación es muy grande regresa 5e+30
parseFloat("0x12FA");//devuelve 0.


//redondeo con .toFixed(x) y .toExponential(x)


//Ambos métodos nos regresan una cadena.
//numero.toFixed(x) redondea un número tomando cómo digitos el parámetro "x", redondeando los números restantes
//numero.toExponential(x) convierte un número a su base exponencial tomando a "x" como parámetro.


46578.9897.toFixed(0);//"46578"
46578.9897.toFixed(2);//"46578.99"
46578.9817.toFixed(2);//"46578.98" redondea hacia abajo



46578.9897.toExponential(2);//"4.66e+4" primero redondea y después hace el cambio.
4657898.97.toExponential(2);//"4.66e+6"
4651848.17.toExponential(2);//"4.65e+6"


//.toString(x)


//numero.toString(x) este método nos permite conseguir una cadena con el valor del número
//en la base que se le pasa como parámetro "x"


(1111).toString();//"1111" por defecto.
(1111).toString(2);//"10001010111".
(1111).toString(8);//"2127"
(1111).toString(0);//"ERROR" ya que no existe la base 0.



//Adicional a estos métodos la clase Number incluye Infinity y -Infinity para números muy grandes.
//Incluye también el valor "NaN" para indicar que la operación no se completo ya que no regresa un número.


var div = 1/0;//regresa Infinity
var div = -(1)/0;//regresa -Infinity
var ex = 1000000e100000000;// regresa Infinity
var ex = -(1000000e100000000); //regresa -Infinity

var nan = "numero"/ 1000; //regresa NaN
var nan1 = 1000/ "@"; //regresa NaN

var nan2 = 1000/ {nombre : "Rafael", apellido : "Cisneros", edad : 23};// Regresa NaN
var nan3 = [1,2,3,4]/ {nombre : "Rafael", apellido : "Cisneros", edad : 23};// Regresa NaN

//Podemos ver que no se cubre las operaciones entre lo que son objetos como: Cadenas, arreglos u objetos.

var nan4 = 1000/ + ; //ERROR
