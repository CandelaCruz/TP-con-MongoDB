import { createBook, deleteBook, getBookById, getBooks, updateBook } from "./controllers";

//Prueba de las funciones CRUD:

//se crea un nuevo objeto para crear un libro en la base de datos
(async () => {
  const newBook = {
    title: "El Principito",
    author: "Antoine de Saint-Exupéry",
    genre: "Fábula",
    publicationDate: "1943-04-06",
    available: true,
    rating: 9.7
  };

  const created = await createBook(newBook);// se llama a la funcion y este guarda el libro en la base de datos
  if (!created?._id) return;

  const id = created._id.toString();// convierte el id del libro a string para usarlo en las otras funciones 

  await getBooks();//obtiene todos los libros y los muestra en consola
  await getBookById(id);//obtiene el libro por su id y lo muestra
  await updateBook(id, { available: false, rating: 10 });//se actualiza el libro cambiando su disponibilidad y su rating
  await deleteBook(id); //elimina el libro de la base de datos con su id
})();
