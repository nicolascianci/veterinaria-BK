const bcrypt = require('bcrypt')
const User = require('../model/users')
const jwt = require('jsonwebtoken')

const login = async(req, res) => {
  const { email, password } = req.body

  console.log(email)
  const user = await User.findOne({ email });

  if(!user){
    return res.status(404).json({
      message: 'Usuario inexistente'
    })
  };

  const match = bcrypt.compareSync(password, user.password);
  const token = jwt.sign({ user }, 'veterinaria', { expiresIn: '1h' })

  if (match) {
    return res.status(200).json({
      message: 'Usuario logueado correctamente',
      token
    });
  } else {
    return res.status(404).json({
      message: 'Usuario o contraseña invalido'
    });
  }
}

module.exports = { login }
