//Object entries

const data = {
    frontend: 'Gerardo',
    backend: 'Stefany',
    server: 'Roberto',
}

const entries = Object.entries(data);
console.log(entries); //devuelve matriz con cada objeto con su elemento.


//Objects values (Ordena y muestra en array los valores que tenemos sin mostrar su asiganción)
const data = {
    frontend: 'Gerardo',
    backend: 'Stefany',
    server: 'Roberto',
}

const values = Object.values(data);
console.log(values);


//PADDING

const string = 'Hello';
console.log(string.padStart(7, 'hi '));

console.log(string.padEnd(12, '-----'));


// Asinc y Await

const helloWolrd = () => {
    return new Promise((resolve, reject) => {
    (true)
        ? setTimeout(() => resolve('Hello World'), 3000)
        :   reject(new Error('Errorsaso!!!'))
            
})
};

const helloAsync = async () => {
    const hello = await helloWolrd();
    console.log(hello);
}

helloAsync();

const anotherFunction = async () => {
    try {
        const hello = await helloWolrd();
        console.log(hello);
    } catch (error) {
        console.log(error);
    }
}