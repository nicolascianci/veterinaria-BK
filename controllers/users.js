const User = require('../model/users')
const bcrypt = require('bcrypt')

const createUser = async(req, res) => {
  const { email, password } = req.body

  const passwordEncripted = bcrypt.hashSync(password, 10)

  try {
    const newUser = new User({
      email,     
      password: passwordEncripted,
    })

    await newUser.save()

    res.json({
      message: 'Usuario creado exitosamente'
    })
  } catch (error) {
    res.json({
      error
    })
  }
}

module.exports = { createUser }