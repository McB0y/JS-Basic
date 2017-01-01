/*
Ciclo FOR OF:
*/


//Podemos usar distintas variantes de ciclo para recorrer un arreglo
//pero entre las más comunes estan los ciclos for each, for in  y for of
//Este ultimo viene con la especificación ES6, u uso es más o menos así:

var gradoAcademico = ["Primaria", "Secundaria", "Media superior", "Superior", "Postgrado"];


//For Each
gradoAcademico.forEach(function(elemento,indice ) {
   console.log("Grado académico : " + elemento);
});


//For In
for(let i in gradoAcademico){
  console.log(gradoAcademico[i]);
}


//For OF ES6
for(let nivel of gradoAcademico){
  console.log(nivel);
}
