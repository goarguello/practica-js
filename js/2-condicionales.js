//* ESTRUCTURAS CONDICIONALES

//? SIMPLE
// let edad = Number(prompt('¿Cuál es tu edad?'));
// if(edad>=18){
//     console.log('Entraste a ver los goles de Messi');
// }

// //? DOBLES
// if(edad>=18){
//     console.log('Entraste a ver los goles de Messi');
// }else{
//     console.log('Andá a ver los goles de Icardi');
// }

//? EJERICICIO: SOLO RESPUESTAS DE SI Y NO EN EL CEMENTERIO INDIO

let anteojos = prompt('¿Trajiste anteojos?');

if(anteojos.toLowerCase()==='si'){
    console.log('Corre wachin');
}else{
    if(anteojos.toLowerCase()==='no'){
        console.log('Compra bro, no hay drama');
    }else{
        console.log('Solo respuestas de si y no admitidas');
    }
    
}

// const day = new Date().getDay();

// switch(day){
//     case 1:
//         console.log('Hoy es Lunes de clases');
//         break;
//     case 2:
//         console.log('Hoy es Martes aburrido');
//         break;
//     case 3:
//         console.log('Hoy es Miercoles de 35');
//         break;
//     case 4:
//         console.log('Hoy es Jueves de repaso de la clase de ayer');
//         break;
//     case 5:
//         console.log('Hoy es Viernes de hacer quices antes de ir a la previa');
//         break;
//     case 6:
//         console.log('Hoy es Sabado de leer teoria y practicar Js');
//         break;
//     case 7:
//         console.log('Hoy es Domingo de resaca y lectura de 35');
//         break;
// }