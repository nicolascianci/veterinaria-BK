const {Schema, model} = require('mongoose')

const mascota = new Schema({
    nombre: String,
    tipo_mascota: Number,
})

module.exports = model('Mascota',mascota)