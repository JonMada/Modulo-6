const { random, reduce } = require("lodash");

let saludo = "Hola Git";
console.log(saludo);

let saludo2 = "Hola Git, de parte de otro desarrollador";
console.log(saludo2);

let saludo3 = 'Hola de nuevo';
console.log(saludo3);

//Condicional
const dia = true;
const tarde = false;

if (dia) {
    console.log('Hola, buenos días');
} else if (tarde) {
    console.log('Hola, buenas tardes');
} else {
    console.log('Hola, buenas noches');
}

//Nuevo elemento para probar 'git rebase'
const randomNum = () => {
    console.log(Math.round(Math.random() * 100));
}

randomNum();

//Something else
const reductor = (matriz) => {
    const sum = matriz.reduce((acumulador, elemento) => {
        return acumulador + elemento;
    }, 0);
    
    console.log(sum);
};

const arr1 = [12,3,4,5,6,67,7,7,5,43,2,23,434];

reductor(arr1);

//Another function
const parImpar= (num) => {
    if (num % 2 === 0) {
        console.log("El númmero es par");
    } else {
        console.log("El número es impar");
    }
}

parImpar(234);
parImpar(23245);
