class Familia {
   constructor(apellidoPaterno, ojos, nariz, estatura, complexion) {
      this.apellidoPaterno = apellidoPaterno;
      this.ojos = ojos;
      this.nariz = nariz;
      this.estatura = estatura;
      this.complexion = complexion;
   }

   function nacer(){
      console.log("Nacio un nuevo integrante de la Familia.");
   }

   function reunirse() {
      console.log("Reuniones familiares son una tradición");
   }

   function apoyarse() {
      console.log("La familia siempre se apoya...");
   }

};


class Hijo extends Familia {
   constructor(apellidoPaterno, ojos, nariz, estatura, complexion, nombre, profesion, hijos) {
      super(apellidoPaterno, ojos, nariz, estatura, complexion, nombre, profesion, hijos);
      this.nombre = nombre;
      this.profesion = profesion;
      this.hijos = hijos;
   }

   function trabajar() {
      console.log("Estamos trabajando muy duro diariamente!");
   }

};
