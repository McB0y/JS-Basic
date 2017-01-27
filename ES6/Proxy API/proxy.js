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
