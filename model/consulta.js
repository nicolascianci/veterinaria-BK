const {Schema, model} = require('mongoose')

const consulta = new Schema({
    email: String,
    motivo: String,
    descripcion: String,
})

module.exports = model('Consultas',consulta)