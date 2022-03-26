//Buscar valores con includes() es mucho mas facil.

let numbers = [1, 2, 4, 3, 2, 9, 10];

if (numbers.includes(4)) {
    console.log ('si se encuentra el valor 4');
}else{
    console.log('No se encuentra');
}

//Como elevar a la potencia (Se usa el doble asterisco **)

let base = 4;
let exponente = 3;
let result = base ** exponente;

console.log(result);