// window.onload = function() {//Hasta que cargue la ventana
//De esta forma se puede crear el contexto pero es mejor de la siguiente manera:
// }();


document.addEventListener('DOMContentLoaded', function(e) {

   (function(){

   'use strict';

   var titulo = document.querySelector('h1');

   titulo.addEventListener('click', function(e){
       console.log(e);//Hace referencia al objeto evento.
       console.log(e.target);//Hace referencia al elemento que disparo el evento o donde se inicia el evento
       console.log(this);//hace referencia al elemento HTML que dispara el evento
       console.log(e.currentTarget);//Lo mismo que this.
       titulo.style.color = "red";
   });



   })();
});
