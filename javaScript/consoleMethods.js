// `console.log()`
const objeto = {
    nombre: "Jon"
};

console.log('Hola', objeto, 'una string después del objeto'); //Salida --> Hola { nombre: 'Jon' } una string después del objeto

// `console.table()`
const objetoDos = [
    {nombre: "Jon", edad: 25},
    {nombre: "Valeria", edad: 30},
    {nombre: "Bruce", edad: 6}
]

console.table(objetoDos);

//`console.error()`
const mensaje = "Disculpa, se produjo un error";
console.error(mensaje);

//`console.warn()`
const mensajeAdvertencia = "Es posible que esta acción produzja cambios inesperados";
console.warn(mensajeAdvertencia);
