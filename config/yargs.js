const argv = require('yargs')
    .option('b', {
        alias: 'base', // Alias del parametro
        type: 'number', // Tipo de dato a llegar
        demandOption: true, // Obliga a ingresar el parametro
        describe: 'Base de la multiplicación'
    })
    .option('h', {
        alias: 'hasta', // Alias del parametro
        type: 'number', // Tipo de dato a llegar
        default: 10, // Valor por defecto
        describe: 'Hasta donde ira la multiplicación'
    })
    .option('l', {
        alias: 'listar', // Alias del parametro
        type: 'boolean', // Tipo de dato a llegar
        default: false, // Valor por defecto
        describe: 'Muestra la tabla en consola'
    })
    .check((argv, options) => {
        if (isNaN(argv.base)) {
            throw 'La base tiene que ser un número';
        }

        return true
    })
    .argv;

module.exports = argv;