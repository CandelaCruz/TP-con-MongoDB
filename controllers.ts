import mongoose, { Document, ObjectId, Schema } from "mongoose";
import { connectDB } from "./config/mongo";
connectDB()

//ESQUEMA DE LIBROS

//Title->string->required
//Author->string->required
//Genre->string->required
//Publication Date->string->required
//Available->boolean->required
//Rating->number->required

interface BooksInterface extends Document {
  title: string,
  author: string,
  genre: string,
  publicationDate: string,
  available: boolean,
  rating: number
}



const booksSchema = new Schema<BooksInterface>({
  title: { type: String, required: true },
  author: { type: String, required: true },
  genre: { type: String, required: true },
  publicationDate: { type: String, required: true },
  available: { type: Boolean, required: true },
  rating: { type: Number, required: true }
})

booksSchema.set("strict", true)

const Books = mongoose.model<BooksInterface>("Books", booksSchema)