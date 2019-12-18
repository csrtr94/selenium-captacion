const oferta = require('./pruebas/oferta');
const prueba2 = require('./pruebas/prueba2');
const argv = require('yargs').argv;

let cmd = argv._[0];


switch(cmd){
    case 'oferta': oferta.prueba();
    break;

    case 'offerctavista' : prueba2.prueba2();
    break;

    default : console.log('VALOR POR DEFECTO!');
}

