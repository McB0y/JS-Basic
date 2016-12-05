/*
   McB0y.

   Como usar las funciones como clase utilizando el patrón de diseño:
                              "Factory Pattern".

   Puedes consultar la siguiente bibliografía para más ejemplos:
   Título: Aprendiendo Javascript
   Autor : Carlos Azaustre.

*/


function	Tienda(nombre)	{
   this.nombre	=	nombre;
   this.tipo	=	[];
 };

Tienda.prototype	=	{
   	addServicio:	function	(servicio,	estatus)	{
      this.tipo[servicio]	=	estatus;
   	},

		borrarServicio:	function	(servicio)	{
   	delete	this.tipo[servicio];
   	},

		estadoServicio:function	(servicio)	{
      return	this.tipo[servicio];//Regresa el estado del servicio
   	},
		getNombre:	function	()	{
      return	this.nombre;
   }

	};


   var establecimiento = new Tienda ("Michellin");
   establecimiento.addServicio("Cambio de aceite", "Vigente");
   establecimiento.addServicio("Chequeo general", "Vigente");
   establecimiento.addServicio("Balanceo", "Vigente");
   establecimiento. addServicio("Motocicletas" , "Fuera de servicio");
   establecimiento.addServicio("Cambio de motor 2 V", "Fuera de servico");


   var tienda = new Tienda("Walmart");
   tienda.addServicio("Pago de tarjetas", "Vigente");
   tienda.addServicio("Pago de otros Servicios", "Vigente");
   tienda.addServicio("Venta de comida", "Fuera de servicio");
