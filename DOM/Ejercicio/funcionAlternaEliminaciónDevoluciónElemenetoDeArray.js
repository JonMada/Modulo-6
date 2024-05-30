/* La lógica de la función debe ser la siguiente:
Si contamos con la matriz siguiente: [1,2,3,4,5]
La función debería devolver: 1,5,2,4,5. */

//Creamos las clases que alternan izquierda y derecha

class ArrayPopper {

    constructor (arr) {
        this.arr = arr;
        this.final = true;
    }

    //Creamos nuestro método

    tooglePopper () {
        this.final = !this.final; //Alterna el valor de inicio
        console.log (this.final ? this.arr.pop() : this.arr.shift()); //Si inicio es true...pop()...si inicio es false...shift()
    }
}


//Creamos nuestra instancia

const array = new ArrayPopper ([1,2,3,4,5]);

//LLamamos al método de la clase
array.tooglePopper(); // 1
array.tooglePopper(); // 5
console.log(array.arr); //salida --> [ 2, 3, 4 ]
array.tooglePopper(); // 2
array.tooglePopper(); // 4
array.tooglePopper(); // 3