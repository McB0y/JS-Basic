//Preludio del polimorfismo.

function identificada(param) {//identificaremos el tipo de parametro que se esta enviando.
   console.log("Tenemos argumento del tipo :" + typeof param)
   console.log("Tenemos una instancia de : " +  param instanceof Vago);
}

function Vago() {
   this.nombre = "Fernando";
   this.edad = 30;
}

var vago = new Vago();

identificada(vago);
