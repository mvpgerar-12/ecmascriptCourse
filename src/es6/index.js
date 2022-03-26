//en javascript normal

function newFunction(name, age, country){
    var name = name || 'oscar';
    var age = age || 32;
    var country = country || 'Venezuela';
}

//en ES6

function newFunction2(name = 'oscar', age = '32', country = "Vzla"){
    console.log(name, age, country);
}

newFunction2(); //Imprime valores por defecto
newFunction2('Gerardo', '25', 'VE'); // Sustituye por lo que le pasamos.

//concatenar template literal

let hello = "Hello";
let world = "World";
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);

//Multilinea en los strings

let lorem = `Otra frase epica que necesitamos
Ahora es otra frase epica
`;
console.log(lorem);

//Desestructuración de elementos

let person = {
    'name': 'Gerardo',
    'age': '25',
    'country': 'VE'
}

let {name, age, country} = person;
console.log(name, age, country);

//Operador de propagación (Unir Arrays)

let team1 = ['Gerardo', 'Oscar', 'Ricardo'];
let team2 = ['Stefany', 'Valeria', 'Camila'];

let education = ['David', ...team1, ...team2];
console.log(education);

//Let es una variable que esta solo disponible dentro del Scope
//Var es una variable dispoible globalmente
//const es una variable que no se puede cambiar.

//Objetos mejorados

let name2 = 'Gerardo';
let age2 = 25;

obj = { name2, age2};
console.log(obj);

//Funciones de tipo Flecha (Arrow Functions)

const names = [
    {name1: 'Gerardo', age: 25},
    {name1: 'Stefany', age: 26},
]

//Antes (Sin arrow function):
let listOfNames = names.map(function(item){
    console.log(item.name1);
})

//Ahora:
let listOfNames2 = names.map(item => console.log(item.name1));

//para una sola variable (arrow function)
const listOfNames3 = name => {

}
//Para declarar variables como funciones:
const square = num => num*num;

console.log(square(10)); //devuelve 100 --> 10*10


//Promesas

const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if (true){
            resolve('Sew resolvio la promesa!');
        }else{
            reject('Mamaste no se resolvio nada!!');
        }
    });
}

helloPromise().then(response => console.log(response)).catch(error => console.log(error));


//Clases

class calculator {
    constructor(){
        this.valueA = 0;
        this.valueB = 0;
    }
    sum(valueA, valueB) {
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
}

const calc = new calculator();

console.log(calc.sum(5, 10));

const hello = require('./module')
console.log(hello());



//Generators (Funcion especial que retorna una serie de valores en orden según el algoritmo que se use)

function* helloWorld() {
    if (true) {
        yield 'Hello, ';
    }
    if (true) {
        yield 'World';
    }
};

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);

