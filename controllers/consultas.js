const User = require('../model/users')
const Consulta = require('../model/consulta')

const createConsulta = async(req,res)=> {
    const {motivo, descripcion} = req.body

    try{
        const newConsulta = new Consulta({
            motivo,
            descripcion,
        })

        await newConsulta.save()

        res.json({
            message:"Consulta Creada"
        })
    } catch(error){
        res.jason({
            error
        })
    }
}

module.exports = {createConsulta}