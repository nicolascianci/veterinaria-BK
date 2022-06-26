require('dotenv').config()
const mongoose = require('mongoose')

const connectDB = async() => {
  const url = process.env.DBLOCAL;
console.log(url)
  try {
    await mongoose.connect("mongodb://localhost:27017/Veterinaria")
    // await mongoose.connect("mongodb+srv://nicolascianci:<password>@bd.q6rtb.mongodb.net/test")
    // console.log('DB conectada exitosamente')
  } catch (error) {
    console.log(error)
  }
}

connectDB()
