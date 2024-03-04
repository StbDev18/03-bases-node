const fs = require('fs');
const colors = require('colors');

/* Async Await */
const crearArchivo = async (base = 5, listar, hasta=10) => {

    try {
        let salida = '';
        let consola = '';

        for (let i = 0; i < hasta; i++) {
            // console.log(`${base} x ${i+1} = ${multPorCinco(i+1)}`);
            salida += `${base} x ${i + 1} = ${multPorCinco(base, i + 1)}\n`;
            consola += `${base} ${'x'.green} ${i + 1} ${'='.green} ${multPorCinco(base, i + 1)}\n`;
        }

        if (listar) {
            console.log('========================'.green);
            console.log('   Tabla del'.green, colors.blue(base));
            console.log('========================'.green);
            console.log(consola);
        }

        const nombreArchivo = `tabla-${base}.txt`;

        fs.writeFileSync('./salida/' + nombreArchivo, salida);
        return nombreArchivo;
    } catch (error) {
        throw error;
    }
}

/* Promise */
// const crearArchivo = async (base = 5) => {

//     return new Promise((resolve, reject) => {
//         console.log('========================');
//         console.log('   Tabla del', base);
//         console.log('========================');
//         let salida = '';
//         const cantMult = 10;

//         for (let i = 0; i < cantMult; i++) {
//             // console.log(`${base} x ${i+1} = ${multPorCinco(i+1)}`);
//             salida += `${base} x ${i + 1} = ${multPorCinco(base, i + 1)}\n`;
//         }

//         console.log(salida);

//         const nombreArchivo = `tabla-${base}.txt`;

//         fs.writeFileSync(nombreArchivo, salida);
//         resolve(nombreArchivo);
//     })

// }

const multPorCinco = (base, num) => {
    return base * num;
}

module.exports = {
    crearArchivo
}
