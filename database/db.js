require('dotenv').config()
const mongoose = require('mongoose')

const connectDB = async() => {
  const url = process.env.DBLocal;

  try {
    await mongoose.connect(url)
    console.log('DB conectada exitosamente')
  } catch (error) {
    console.log(error)
  }
}

connectDB()
