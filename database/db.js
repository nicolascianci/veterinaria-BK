require('dotenv').config()
const mongoose = require('mongoose')

const database =  proccess.env.DB-Local
const connectDb = async() => {
  try {
    await mongoose.connect('database')
    console.log('Db conectada')
  } catch (error) {
    console.error(error)
  }
}

connectDb()