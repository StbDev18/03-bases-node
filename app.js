const fs = require('fs');
const {crearArchivo} = require('./helpers/multiplicar');
const argv = require('./config/yargs');
require('colors');

console.clear();

/* Primera forma de acceder a los argumentos que vienen desde la consola como el --version */
// const [ , , arg3 = 'base=1'] = process.argv;
// const [ , base = 1] = arg3.split('=');

crearArchivo(argv.b, argv.l, argv.h)
.then(nombreArchivo => console.log(nombreArchivo.rainbow, 'Creado'))
.catch(err => console.log(err));
