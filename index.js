const oferta = require('./pruebas/oferta');
const oferta2 = require('./pruebas/oferta2');
const prueba2 = require('./pruebas/prueba2');
const argv = require('yargs').argv;

let cmd = argv._[0];


switch(cmd){
    case 'oferta' : oferta.prueba();
    break;

    case 'oferta2' : oferta2.prueba();
    break;

    case 'offerctavista' : prueba2.prueba2();
    break;

    default : console.log('VALOR POR DEFECTO!');
}

