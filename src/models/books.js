import { getDb } from '../db/connect.js';

const bookProjection = { _id: 0, id: 1, author: 1, title: 1, publicationDate: 1 };

const getAllBooks = async () => {
  const db = getDb();
  const collection = db.collection('books');
  const books = await collection.find({}, { projection: bookProjection }).sort({ id: 1 }).toArray();
  return books;
};

export { getAllBooks };
