//Sub-clases nos permiten extender objetos
//para poder generar nuestras propias funciones.

class convertibleArray extends Array {
   convert() {
      let returnArray = [];
      this.forEach(value => returnArray.push('convirtiendo! ' + value));
      return returnArray;
   }
}

let numberArray = new convertibleArray();
numberArray.push(1);//convirtiendo! 1
numberArray.push(2);//convirtiendo! 2
numberArray.push(3);//convirtiendo! 3
