// Validar si se ingresa un valor entero con exactamente tres digitos

/*let valor = prompt('Ingrese un numero entero positivo de 3 digitos',0);

let patron = new RegExp('^[0-9]{3}$');

// test() prueba mi expresion regular al string que le paso y devuelve un booleano

if (patron.test(valor)) {
    // true
    alert('Se ingreso un valor entero positivo de 3 digitos')
} else {
    // false
    alert('No se ingreso el valor esperado')
}*/

// Ingresar una oracion por teclado y luego imprimir un mensaje si la oracion ingresada contiene la palabra 'hora'

/*let oracion = prompt('Ingrese una oracion')
let patron = /hora/gi;

if (patron.test(oracion)) {
    document.write('contiene hora')
} else {
    document.write('no contiene hora')
}*/

// OPERADOR TERNARIO

// (condicion) ? ejecuta esto si es true : ejecuta esto si es false
// condicion ? instruccion 1 caso true : instruccion 2 case false
/*
let numero = parseInt(prompt('ingrese un numero',0));

// ? quiere decir 'si' se cumple... ejecuta esto y : significa 'sino'
numero > 50 ? console.log('es mayor a 50') : console.log('no es mayor a 50');


numero > 50 && console.log('es mayor a 50');
*/

/*let amigos = [];

for (let i = 0; i < 5; i++) {
    let amigo = prompt('ingrese un nombre de un amigo')
    amigos.push(amigo);
}

let patron = /sol/gi

for (let i = 0; i < amigos.length; i++) {
    patron.test(amigos[i]) ? console.log(`iteracion ${i}: `,true) : console.log(`iteracion ${i}: `, false);
}*/

/*let numeros = [];

for (let i = 0; i < 5; i++) {
    let numero = parseInt(prompt('ingrese un numero',0));
    numeros.push(numero);
}

for (let i = 0; i < numeros.length; i++) {
    numeros[i] > 10 ? console.log(`iteracion ${i}: `,true) : console.log(`iteracion ${i}: `, false);
}*/

const alumnasAnsiosas = ["Naty", "Caro", "Jenni", "Mika", "Chari", "Gabi", "Jose"];
const lista = document.querySelector('#lista');

// const li = document.createElement('li');
// lista.appendChild(li);

/*lista.innerHTML = `<li>${alumnasAnsiosas[0]}</li>
                    <li>${alumnasAnsiosas[1]}</li>
                    <li>${alumnasAnsiosas[2]}</li>
                    <li>${alumnasAnsiosas[3]}</li>
                    <li>${alumnasAnsiosas[4]}</li>
`*/

for (let i = 0; i < alumnasAnsiosas.length; i++) {
    lista.innerHTML += `<li class="estilo">${alumnasAnsiosas[i]}</li>`;
}