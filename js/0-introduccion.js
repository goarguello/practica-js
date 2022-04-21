// //* VARIABLES

// let numero1 = 15;

// let numero2 = 3;

// //* TIPOS DE DATOS

// //? Strings

// let string = "Hola mundo, soy Gonzalo😎"

// //? Numbers

// let number = 15;

// //? Booleans

// let boolean = true;

// let booleanFalse = false;

// //? Arrays

// let array = ['pan', 'agua', 'frutas', true, 15, [true, 15]];

// //? Objects

// let object ={
//     propiedad1 : 'valor de la propiedad 1',
//     propiedad2 : 'valor de la propiedad 2'
// }

// let fruta = {
//     nombre: 'banana',
//     color: 'amarillo',
//     fechaDeDescubrimiento: 12
// }

// //? Null

// let vacia = null;

// //? Undefined

// let indefinida;

// //* TIPOS DE VARIABLE

// var variablevar = 'soy un var';
// let variablelet = 'soy un let';
// //-----------------------------
// const variableconst = 'soy una const';
// if(true){
//     var variablevar = 'soy un var';
//     //var variablelet = 'soy un let';
//     console.log(variablelet);
// }

// console.log(variablevar);
// console.log(variablelet);

// variablevar = 15;

// variablelet = 30;

// // variableconst = 54;

// var hola = 'hola';
// let chau = 'chau';

// if(true){
//     var hola = 'buen dia';
//     let chau = 'chau chau'

// console.log(hola);
// console.log(chau);
// }

// console.log(hola);
// console.log(chau);

// // buen día
// // chau chau
// // buen día
// // chau

// //* COMENTARIOS

// //? Comentario de una sola linea

// // SOy un comentario de una sola linea

// //? Comentario multilinea

// /* Soy
// un
// comentario
// multilinea */

// //* OPERADORES

// //? Asignacion

// // el simbolo igual =

// //? Aritmetica

// console.log('El resultado de la suma es: ', 15+3);
// console.log('El resultado de la resta es: ', 15-3);
// console.log('El resultado de la multiplicación es: ', 15*3);
// console.log('El resultado de la división es: ', 15/3);
// console.log('El resultado del resto es: ', 16%3);

// //? Unitarios

// let num = 4;
// num++;
// console.log(num);
// num--;
// console.log(num);

// console.log(!boolean);

// //? Relacionales
// let num1 = 7;
// let num2 = '7';

// console.log( 'Comparaciones', num1 > num2 );
// console.log( 'Comparaciones', num1 >= num2 );
// console.log( 'Comparaciones', num1 > num2 );
// console.log( 'Comparaciones', num1 >= num2 );
// console.log( 'Comparaciones', num1 == num2 );
// console.log( 'Comparaciones', num1 === num2 );
// console.log( 'Comparaciones', num1 != num2 );
// console.log( 'Comparaciones', num1 !== num2 );

// //? Lógicos
// //AND se conforma con todos true
// console.log('logicas', num1 === num2 && 7==7); // --> false
// console.log('logicas', num1 == num2 && 7==7); // --> true
// /*true*/        /*true*/
// //OR se conforma con un solo true
// console.log('logicas', num1 === num2 || 7==7); // --> true
// console.log('logicas', num1 === num2 && 7==8); // --> false

// //? Condicional

// 8 > 5 ? console.log('es mayor') : console.log('es menor'); //Es mayor
// 15 == "15" ? console.log('es igual') : console.log('es distinto'); //Es igual

//                 /*TRUE*/                    /*FALSE*/

// //* ALERT AND PROMPTS

// // alert('Soy una alerta');
// // document.write('Hola mundo');

// // let respuestaDelUsuario = prompt('Cuantos años tenes?');

// // console.log(respuestaDelUsuario);

// //ToDo EJERCICIO:
// //ToDo Pido 2 valores y muestro en consola la suma y el producto, si la suma o el producto es mayor a
// //ToDo 20, mostrar en consola que hay un valor mayor a 20 //

// //? AYUDA: La respuesta del usuario en prompt es guardada en un string, para usarla como número
// //? hay que encerrar la respuesta en un Number(). Por ejemplo Number("15") será igual a 15.

// let number1 = Number(prompt('Inserte numero el primero número'));
// let number2 = Number(prompt('Inserte numero el segundo número'));

// let suma = number1 + number2;
// let multiplicacion = number1 * number2;

// console.log(suma);
// console.log(multiplicacion);

// suma > 20  || multiplicacion >20 ? console.log('Hay un valor mayor a 20') : console.log('No hay un valor mayor a 20');

// //LISTA DE CANCIONES ALBUM

// [
//     {
//         nombre: 'waka waka',
//         autor: 'shakira',
//         duracion: 150,
//         masEscuchadas: false,
//     },
//     {
//         nombre: 'la bicicleta',
//         autor: 'shakira',
//         duracion: 120,
//         masEscuchadas: ture,
//     }
// ]

//ToDo

const constant1 = 3;
const constant2 = 30;
let variable3;
let suma = constant1 + constant2;
let producto = constant1 * constant2;
let resta = constant1 - constant2;

console.log("SUMA: ", suma);
console.log("RESTA: ", resta);
console.log("MULTIPLICACIÓN: ", producto);
console.log("DIVISIÓN: ", constant1 / constant2);

// 4/2=2 --> RESTO=0
// 5/2=2 --> RESTO=1

constant1 % 2 == 0
  ? console.log("El número 1 es par")
  : console.log("El número 1 es impar");
constant2 % 2 == 0
  ? console.log("El número 2 es par")
  : console.log("El número 2 es impar");

variable3 = 10;
let resultado = suma + variable3; //33 + 10 = 43
resultado = resultado * producto; //43 * 90 = 3870
resultado = resta - resultado; //-27-3870 = -3897

console.log(resultado);