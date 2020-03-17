// const opts = {
//     descripcion: {
//         demand: true,
//         alias: 'd',
//         desc: 'descripcion de la tarea por hacer'
//     },
//     completado: {
//         alias: 'c',
//         default: true,
//         desc: 'marca como completado o pendiente la tarea'
//     }
// }

const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'descripcion de la tarea por hacer'
};
const completado = {
    alias: 'c',
    default: true,
    desc: 'marca como completado o pendiente la tarea'
};

const argv = require('yargs')
    .command('crear', 'crea nueva tarea', { descripcion })
    .command('actualizar', 'actualiza tarea', { descripcion, completado })
    .command('borrar', 'borra tarea', { descripcion })
    // .command('listar', 'lista tareas', opts)
    .help()
    .argv;

module.exports = {
    argv
}