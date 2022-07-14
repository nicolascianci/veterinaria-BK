const {Schema, model} = require('mongoose')

const consulta = new Schema({
    email: String,
    motivo: String,
    descripcion: String,
    resuelta: Boolean,
})

module.exports = model('Consultas',consulta)