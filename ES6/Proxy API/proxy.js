/*
   McB0y: Al igual que los los simbolor y el API Reflect
          La proxy API nos ayuda con la metaprogramación
          algo que anteriormente en JS era bastante enredoso
          de poder manipular.


          En especifico nos ayuda a envolver objetos, funciones
          o lo que sea en realidad, poniendo trampas al intentar
          acceder a las propiedades, puedes verlo como un filtro
          que deberas pasar para poder acceder al objeto.
*/


var boy ={
   name: "Oliver",
   age: 25
}

//El constructor espera 2 argumentos
//el primeros es el "target", el segundo el "handler"
//este segundo es el que contiene toda la lógica de nuestro proxy.



// el handler puede crear todas las trampas que quieras,
//pues el el el PROXY lo que recibe el get es el objetivo
//"el objeto", y el segundo es la propiedad a la que accesar.




var handler = {
   get : function(target, name) {
      return name in target ?  target[name] : "No existe";
   }

   set : function(target, property, value) {//exacactamente igual que el Reflect API

   }
}

var proxy = new Proxy(boy, handler);

console.log(proxy.name);
console.log(proxy.age);
console.log(proxy.surname);


var persona = {
   name : "Ródrigo",
   surname : "Vázquez",
   greet(){
      console.log("Hey everyone!");
   }
};

var handler = {
   get : function(target, name) {
   return name in target ? target[name] : "No existe";
   },
   set : function(target, property, value) {// === Reflect API
   if (value.length >= 4) {
      Reflect.set(target, property, value);
      }
   }
};

var proxy = new Proxy(persona , handler);
proxy.name = "R";
console.log(proxy.name);//Ródrigo
proxy.name = "Raphael";
console.log(proxy.name);//Raphael .
