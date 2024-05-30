//Creamos nuestras strings

const str1 = "La bonita casa azul";
const str2 = "En algun pequeño pueblo del sur de la meseta, un enclénque caballero..."

//Creamos la función

const aMayusculas = (string) => {
    const palabras = string.split(" "); //Nos devuelve un array y le hemos indicado la separación existente entre los elementos, en este caso "espacio".
    const palabrasEnMayuscula = palabras.map(palabra => palabra[0].toUpperCase() + palabra.slice(1));
    console.log(palabrasEnMayuscula); // Nos devuelve un array con la primera letra de cada elemento en mayúscula.
    const resultado = palabrasEnMayuscula.join(' '); //Unimos los elementos del array en una string mediante el separador indicado, en este caso "espacio".
    console.log(resultado)
}

//Probamos la función
aMayusculas(str1);
aMayusculas(str2);