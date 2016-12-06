
/*
   McB0y.
   Ejemplos relacionados con cadenas "Strings" y algunos métodos para
   para manipularlas.


   Puedes consultar la siguiente bibliografía:
   Título: Aprendiendo Javascript
   Autor : Carlos Azaustre.
*/


var cadena = "Javascript";

var strin0 = "javascript"[2];	//	Acceso	como	array,	devuelve	el	tercer	carácter	"v",	ya	que	la	primera	posición	es	0
var string1 = "javascript".length;	//	Devuelve	10
var string2 =  "javascript".charCodeAt(2);	//	Devuelve	el	caracter	en	formato	UNICODE	de	"v",	el	118
var string3 =  "javascript".indexOf("script");	//	Devuelve	el	índice	donde	comienza	el	string	"script",	el	4
var string4 = "javascript".substring(4,10);

Un String puede ser convertido en un arreglo

var	fecha	=	new	Date();
fecha	=	fecha.toString();	//	"Wed	May	20	2015	20:16:25	GMT+0200	(CEST)"
fecha	=	fecha.split("	");	//	["Wed",	"May",	"20",	"2015",	"20:16:25",	"GMT+0200",	"(CEST)"]
fecha[4];//Nos regresa la hora
