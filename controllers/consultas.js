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

const buscarConsulta = async(req,res)=>{
    const {text} = req.body

    try{
        const consultas = await Consulta.find({})
        console.log(consultas)
        console.log(text)

        const result = consultas.filter(con => con.descripcion.indexOf(text) !== -1)
        res.json({
            message: 'Consultas obtenidos exitosamente',
            result
        })
    }catch(error){
        res.json({
            message: 'ERROR AL BUSCAR CONSULTAS',
            error: consultas
        })
    }
}

module.exports = {createConsulta, buscarConsulta}