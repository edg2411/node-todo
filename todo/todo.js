const fs = require('fs');
// const colors = 

let listadoPorHacer = [];

const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);
    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new Error('no se pudo grabar', err);
        // if (err) throw err;
        // console.log('The file has been saved!');
    });
}

const cargarDB = () => {
    try {
        listadoPorHacer = require('../db/data.json');
    } catch (error) {
        listadoPorHacer = [];
    }
    // console.log(listadoPorHacer);
}

const crear = (descripcion) => {

    cargarDB();

    let porHacer = {
        descripcion,
        completado: false
    };

    listadoPorHacer.push(porHacer);

    guardarDB();

    return porHacer;
}
const getListado = () => {
    /*     fs.readFile('db/data.json', (err, data) => {
            if (err) throw err;
            console.log(data);
        }); */
    cargarDB();
    return listadoPorHacer;
}

const actualizar = (descripcion, completado = true) => {
    cargarDB();
    let index = listadoPorHacer.findIndex(tarea => {
        return tarea.descripcion === descripcion;
    });
    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }
}

const borrar = (descripcion) => {
    cargarDB();
    // let index = listadoPorHacer.findIndex(tarea => {
    let nuevoListado = listadoPorHacer.filter(tarea => {
        // return tarea.descripcion === descripcion;
        return tarea.descripcion !== descripcion;
    });
    // if (index >= 0) {
    //     listadoPorHacer[index] = [];
    //     guardarDB();
    //     return true;
    // } else {
    //     return false;
    // }
    if (listadoPorHacer.length === nuevoListado.length) {
        return false;
    } else {
        listadoPorHacer = nuevoListado;
        guardarDB();
        return true;
    }
}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}