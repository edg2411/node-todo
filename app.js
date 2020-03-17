// const argv = require('yargs').argv;
const argv = require('./config/yargs').argv;
const porHacer = require('./todo/todo');
const colors = require('colors');


// console.log(argv);

let comando = argv._[0];

switch (comando) {
    case 'crear':
        // console.log('crear tareas por hacer');
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'listar':
        // console.log('mostrar tareas por hacer');
        let listado = porHacer.getListado();
        console.log(listado);
        for (let tarea of listado) {
            console.log('Por hacer'.green);
            console.log(tarea.descripcion);
            console.log('Estado', tarea.completado);
            console.log('========='.green);
        }
        break;
    case 'actualizar':
        // console.log('actualizar tareas por hacer');
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        break;
    case 'borrar':
        // console.log('borrar tareas por hacer');
        let borrado = porHacer.borrar(argv.descripcion);
        console.log(borrado);
        break;
    default:
        console.log('comando no reconocido');
        break;
}