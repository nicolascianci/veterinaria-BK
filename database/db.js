require('dotenv').config()
const mongoose = require('mongoose')

const connectDB = async() => {
  const url = process.env.DB;
  console.log(`${url}`)
  try {
    //await mongoose.connect('mongodb://localhost:27017/Veterinaria')
    await mongoose.connect("mongodb+srv://nico1996:4253709nico@veterinaria.w9ahm.mongodb.net/test")
    console.log('DB conectada exitosamente')
  } catch (error) {
    console.log(error)
  }
}

connectDB()
