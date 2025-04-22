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
  _id: ObjectId;
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

//Functions CRUD:
//Create Book

export const createBook = async (newBook: object): Promise<BooksInterface | undefined> => {
  try {
    const book = new Books(newBook);
    const savedBook = await book.save();
    console.log("Book created:", savedBook);
    return savedBook;
  } catch (error) {
    console.error(" Book not created:", error);
  }
};

//GET BOOKS
export const getBooks = async (): Promise<BooksInterface[] | undefined> => {
  try {
    const books = await Books.find();
    console.log(" Books:", books);
    return books;
  } catch (error) {
    console.error(" Books not found:", error);
  }
};

//get book by id
export const getBookById = async (id: string): Promise<BooksInterface | null | undefined> => {
  try {
    const book = await Books.findById(id);
    if (!book) {
      console.log("Book not found");
    } else {
      console.log("Book:", book);
    }
    return book;
  } catch (error) {
    console.error("Book not found for id:", error);
  }
};

//update book
export const updateBook = async (
  id: string,
  updates: Partial<BooksInterface>
): Promise<BooksInterface | null | undefined> => {
  try {
    const updatedBook = await Books.findByIdAndUpdate(id, updates, { new: true });
    console.log("Book updated:", updatedBook);
    return updatedBook;
  } catch (error) {
    console.error("Book not updated:", error);
  }
};

//delate book

export const deleteBook = async (id: string): Promise<BooksInterface | null | undefined> => {
  try {
    const deletedBook = await Books.findByIdAndDelete(id);
    console.log("Book deleted:", deletedBook);
    return deletedBook;
  } catch (error) {
    console.error("Book not deleted:", error);
  }
};





