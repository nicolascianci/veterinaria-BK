const User = require('../model/users')
const Consulta = require('../model/consulta')

const createConsulta = async(req,res)=> {
    const {email, motivo, descripcion} = req.body

    try{
        const newConsulta = new Consulta({
            email,
            motivo,
            descripcion,
            resuelta: false,
        })

        await newConsulta.save()

        res.json({
            newConsulta,
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
    // const verify = jwt.verify(token, 'comision24i');
    // if(!verify){
    //     return res.json({
    //         status: 400,
    //         message: "Error en el token"
    //     })
    // }

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


const ResponderConsulta = async(req,res) => {
    const {_id,email,motivo,descripcion,resuelta} = req.body
    
    try {
        
        const consultas = await Consulta.findByIdAndUpdate(_id, {email,motivo,descripcion,resuelta: true})        
        
        if (consultas){            
            res.json({
                message: 'Consultas Actualizada exitosamente',
                consultas
            })
        }
        else{            
            
            res.json({
                message: 'No se encontro consulta',                
            })
        }

    } catch (error) {
        console.log(error)
        res.json({
            message: 'No se pudo actualizar la consulta',            
        })
    }
    
}

module.exports = {createConsulta, buscarConsultaText,buscarTodasConsultas, deleteConsulta, ResponderConsulta}