//! NUMBERS /Vamos a utilizar el objeto Math

//* REDONDEO Y TRUNCAMIENTO
// 35.73
// 36 <-- Redondeo
// 35 <-- Truncamiento

let numberOne = 35.73;

console.log( 'Número redondeado:', Math.round(numberOne));

console.log( 'Número truncado:', Math.trunc(numberOne));

//* ENCONTRAR MÁXIMOS Y MÍNIMOS

let max = Math.max(1,7,84,91,51,35);
let min = Math.min(1,7,84,91,51,35);
console.log('Máximo =', max);
console.log('Mínimo =', min);

//* POTENCIAS Y RAÍCES

console.log('3 al cuadrado es igual a =', Math.pow(3,2));
console.log('3 al cubo es igual a =', Math.pow(3,3));

console.log('La raíz cuadrada de 9 es =', Math.sqrt(9));
console.log('La raíz cúbica de 27 es =', Math.cbrt(27));

//* OBTENER NÚMERO ALEATORIO

let random = Math.random();
console.log(random);

//? OBTENGAMOS UN NÚMERO ALEATORIO DEL 0 AL 9

let random2 = Math.round(Math.random()*10);
console.log(random2);
// (0-1)*10--> 0 -20

//* PARSEO DE CADENAS

let string = '15.25asd';
console.log(string);

console.log(Number(string));
console.log(parseInt(string));
console.log(parseFloat(string));

//* LIMITAR CANTIDAD DE DECIMALES
//0.12938213213213 $
let number3 = Number(Math.random().toFixed(2));

console.log(number3);