//?EJERCICIO DE TABLAS

// let number = prompt('¿Qué tabla queres saber?');

// for(let i=0 ; i<=9 ; i++){
//     console.log(`${number}x${i}=${number*i}`);
// }

// //?PROMPT DE EXCALIBUR

// let name='';
// let isKing = false;

// while(name.toLowerCase()!=='arturo' || isKing===false){
//     name=prompt('¿Comó te llamas?');
//     if(name.toLowerCase()==='arturo'){
//         isKing=confirm('¿Sos rey?');
//         if(isKing===false){
//             alert('No sos rey zapato, seguí participando');
//         }
//     }else{
//         alert('No te llamas Arturo, seguí participando');
//     }
// }
// alert('Sacaste el prompt Rey Arturo');

//? INTELGENCIA ARTIFICIAL EN UN HOSPITAL, DOLENCIA: DOLOR ABDOMINAL

let isWoman = confirm('¿Es usted mujer?');

if(isWoman){
    isPregnant = confirm('¿Está embarazada?');
    if(isPregnant){
        alert('A ecografía')
    }else{
        alert('A rayos X');
    }
}else{
    alert('A rayos X');
}