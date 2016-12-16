//Creando una cookie, de manera muy básica.
document.cookie= "Ramón Valdez";
//leyendo
var cookies = document.cookie;
console.log(cookies);



//Creando un par de cookies


setCookie("Nombre", "Manuel", "1980, 02, 19");
setCookie("Dirección", "Col. del valle CDMX");
setCookie("Correo", "manuel.estrada_bon@gmail.com");
getCookies("nombre");
