// let, const, var

var a = 4;
if (true) {
    var b = 5;
}
console.log(a + b);

let a = 4;
if (true) {
    let b = 5;
}
console.log(a + b);

const a = 4;
if (true){
    a = 5
}
console.log(a)


// declaração de funções

// const sum = (a, b = 1) => {
//     console.log(a + b)
// }
// sum(1,2);
// sum(1);

// rest parameters -> antigo arguments

// const read = (...params) => {
//     for(let param of params){
//         console.log(param)
//     }
// }
// read(1,2,3)

// arrow functions

// const minus = (a,b) => console.log(a - b)

// minus(14,2)


// destructuring

// const [a, b] = [1, 2]
// console.log(a,b)

// const [a, b, ...rest] = [1,2,3,4,5]
// console.log(a, b, rest)

// const cotec = {cidade: "sobral", estado: "ce"}
// const {cidade, estado} = cotec
// console.log(cidade, estado)

// require

// antes
// var ReactRouter = require('react-router');
// var Route = ReactRouter.Route;
// var Link = ReactRouter.Link;
// var Router = ReactRouter.Router;

//depois
// const {
//     Route,
//     Link,
//     Router
// } = require('react-router')

// classes

// class Animal {
//     constructor(name) {
//         this.name = name
//     }

//     getName() {
//         return this.name
//     }

//     setName(name) {
//         this.name = name
//     }
// }

// const animal = new Animal('dog')
// console.log(animal.getName())
// animal.setName('cat')
// console.log(animal.getName())

// export 

// functions.js
// export function sum(x, y) {
//     return x + y
// }
// export function mult(x, y) {
//     return x * y
// }
// end file

// import { sum, mult } from 'lib'

// Promises

// const notifyAll = (fnSms) => {
//     console.log('Iniciando...');
//     setTimeout(() => {
//         fnSms();
//     }, 2000);
// }
// notifyAll(() => {
//     console.log("Enviando SMS ..");
// });
// console.log("SMS Enviado");

// const response = new Promise((resolve, reject) => {
//     notifyAll(() => {
//         console.log("Enviando SMS ..");
//         resolve("SMS Enviado")
//     })
// })

// response.then((response) => {
//     console.log(response);
// })

// Async Await

// const getData = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('GET DATA')
//             resolve()
//         }, 2000);
//     })
// }

// const print = () => {
//     console.log('Acabou')
// }

// const search = async () => {
//     await getData();
//     print();
// }

// search()

// https://caniuse.com