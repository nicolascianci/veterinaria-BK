require('dotenv').config()
const jwt = require("jsonwebtoken")

// const secretKey = process.env.SECRET_KEY

const jwtValidator = async(req,res,next) => {
    const {accessToken} = req.body
    try {
        const verify = jwt.verify(accessToken, 'veterinaria')        
        
        if (verify) {
            return res.json({
                message: 'Token valido'
            })
            //next()
        }

        return res.json({
            message: 'Token invalido'
        })
} catch (error) {
    return res.json({
        message: 'No autorizado'
    })
}

}


module.exports = {jwtValidator}