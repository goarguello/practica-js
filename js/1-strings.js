// "Soy un string";
// "También soy un string";
// '1?2*´"[][:[ASD◀';

// //* Escapando al string
// console.log("'Leo Messi' dijo: \"La comision 1i es la mejor\"");

// //* CONCATENACION DE STRING
// console.log("HOLA " + "MANOLA");

// console.log(15 + "15");

// console.log("15" + 15 + 15);

// console.log(15 + 15 + "15");

// //* JS LEE DE ARRIBA A BAJO E IZQUIERDA A DERECHA

// //* TEMPLATE LITERALS

// let ganador = "Pau";
// let proyecto = "Avances en JS";
// let premio = "USD 10000";

// console.log("El ganador fue " + ganador); //CONCATENACION

// console.log(
//   "El ganador fue " +
//     ganador +
//     " por su proyecto " +
//     proyecto +
//     " y ganó " +
//     premio
// ); //CONCATENACION

// //! USAR COMILLA INVERTIDA PARA TODO SL STRING Y LAS VARIABLES CON UN SIGNO PESOS ANTES Y
// //! ENCERRADAS ENTRE LLAVES
// console.log(
//   `El ganador fue ${ganador} por su proyecto ${proyecto} y ganó ${premio}`
// );

// //* METODOS DE STRING

// //toUpperCase --> Pasa todo a mayusculas

// console.log('Hola, soy DIEGOTE'.toUpperCase().toLowerCase());
// console.log(ganador.toUpperCase());

// //toLowerCase --> Pasa todo a minusculas

// console.log('Hola, esta va en minuscula'.toLocaleLowerCase());
// console.log(premio.toLowerCase());

// //length --> ver cantidad de caracteres

// console.log('Hola, aca va a haber 23'.length);
// console.log(ganador.length);

// //charAt --> ver posición de un caracter

// console.log('Diego Fernandez'.charAt(6)); //La posición comenza en cero.
// console.log(ganador.charAt(2));

// //substr --> Obtenes una porción del string

// console.log('Hola, soy Diego'.substr(0,4));

// //trim --> Elimina espacions iniciales y finales

// console.log('             Diego Fernandez         '.trim());

// //includes --> Verifica si un string se encuentra dentro de otro string

// console.log('Estoy buscando a Nemo'.includes('Nemo'));

// console.log('Estoy buscando a Doris'.includes('Nemo'));

//EJERCICIO: Recibir el apellido del usuario y mostrar por consola la última letra

// let apellido = prompt('Dame tu apellido');

// console.log(apellido.charAt(apellido.length-1));
//Última posicion = length-1

//EJERCICIO 2: Recibir el nombre del usuario y mostrar por consola el nombre con la primera letra en mayuscula

let nombre = prompt('Dame tu nombre');
let firstLetter = nombre.substr(0,1).toUpperCase();
let resto = nombre.substr(1, nombre.length-1);
console.log(firstLetter+resto);