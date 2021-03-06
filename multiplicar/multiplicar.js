const fs = require('fs');
const colors = require('colors');


let listarTabla = (base, limite = 10) => {

    console.log("=============================".green);
    console.log(`=====Tabla del ${base}=======`.blue);
    console.log("=============================".green);

    for (let i = 1; i <= limite; i++) {

        console.log(`${base} * ${i} = ${base * i}`);

    }

}



let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El dato ingresado ${base} No es un número. Favor de ingresar otro valor.`);
            return;
        }

        let data = '';
        let dir = 'Archivos-Tablas';

        for (let i = 1; i <= limite; i++) {

            data += `${base} * ${i} = ${base * i}\n`;

        }


        fs.writeFile(`${dir}/Tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`Tabla-${base}-al-${limite}.txt`);

        });

    });

}

module.exports = {
    crearArchivo,
    listarTabla
}