import Book from '../models/book.js'; // Adjust path to your Mongoose model

const getAllBooks = async () => {
  return await Book.find({});
};

const getBookById = async (id) => {
  return await Book.findById(id);
};

const createBook = async (bookData) => {
  const book = new Book(bookData);
  return await book.save();
};

const updateBook = async (id, bookData) => {
  return await Book.findByIdAndUpdate(id, bookData, { new: true, runValidators: true });
};

const deleteBook = async (id) => {
  return await Book.findByIdAndDelete(id);
};

export { getAllBooks, getBookById, createBook, updateBook, deleteBook };
