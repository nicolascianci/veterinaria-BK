const {Schema, model} = require('mongoose')

const consulta = new Schema({
    motivo: String,
    descripcion: String,
})

module.exports('Consulta',consulta)