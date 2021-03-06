const oferta = require('./pruebas/oferta');
const oferta2 = require('./pruebas/oferta2');
const prueba2 = require('./pruebas/prueba2');
const tarjetaRipley = require('./pruebas/tarjetaRipley');
const ripleyMovil = require('./pruebas/ripleyMovil');
const tarjetaMastercard = require('./pruebas/tarjetaMastercard');
const planPrueba = require('./pruebas/planPrueba');
const argv = require('yargs').argv;

let cmd = argv._[0];


switch(cmd){
    case 'oferta' : oferta.prueba();
    break;

    case 'tarjetaripley' : tarjetaRipley.prueba();
    break;
    
    case 'ripleymovil' : ripleyMovil.prueba();
    break;

    case 'oferta2' : oferta2.prueba();
    break;

    case 'offerctavista' : prueba2.prueba2();
    break;

    case 'tarjetaMastercard' : tarjetaMastercard.prueba();
    break;

    case 'planprueba' : planPrueba.prueba();
    break;

    default : console.log('VALOR POR DEFECTO!');
}

