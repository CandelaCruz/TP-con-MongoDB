import mongoose from 'mongoose'
process.loadEnvFile()

const URI_DB = process.env.URI_DB || ""

const connectDB = async () => {
 try {
  await mongoose.connect(URI_DB) //uri de mongo
  console.log("DB connected")
 } catch (error) {
  console.log("Error connecting to DB", error)
 }
 }
 
export { connectDB }