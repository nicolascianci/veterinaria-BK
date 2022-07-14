const User = require('../model/users')
const Consulta = require('../model/consulta')

const createConsulta = async(req,res)=> {
    const {email, motivo, descripcion} = req.body

    try{
        const newConsulta = new Consulta({
            email,
            motivo,
            descripcion,
            resulta: false,
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

const buscarConsultaText = async(req,res)=>{
    const {text} = req.body

    try{
        const consultas = await Consulta.find({})       

        const result = consultas.filter(con => con.motivo.indexOf(text) !== -1)
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

const buscarTodasConsultas = async(req,res)=>{
    
    try{
        const consultas = await Consulta.find({})
                        
        res.json({
            message: 'Consultas obtenidos exitosamente',
            consultas
        })

        
    }catch(error){
        res.json({
            message: 'ERROR AL BUSCAR CONSULTAS',
            error: consultas
        })
    }
}

const deleteConsulta = async(req,res) =>{
    const {id} = req.body
    try{
        console.log(id)
        const consultas = await Consulta.findByIdAndDelete({_id:id})
        res.json({
            message: 'Consultas eliminada exitosamente',
            consultas
        })
    }
    catch(error){
        res.json({
            message: 'ERROR AL BUSCAR CONSULTAS',
            error
        })
    }
}

module.exports = {createConsulta, buscarConsultaText,buscarTodasConsultas, deleteConsulta}