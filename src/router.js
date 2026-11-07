import { Router } from 'express';
import { getDb } from './db/connect.js';
import { ObjectId } from 'mongodb';

const router = Router();

// Root route JSON message
router.get('/', (req, res) => {
  res.status(200).json({
    status: "success",
    message: "Welcome to the Books and Authors API",
    documentation: "https://my-books-service.onrender.com/api-docs"
  });
});

// ==================== BOOKS ROUTES ====================
router.get('/books', async (req, res) => {
  try {
    const db = getDb();
    const books = await db.collection('books').find().toArray();
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(books);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get('/books/:id', async (req, res) => {
  try {
    const db = getDb();
    const bookId = new ObjectId(req.params.id);
    const book = await db.collection('books').findOne({ _id: bookId });
    if (!book) {
      return res.status(404).json({ message: 'Book not found' });
    }
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(book);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// ==================== AUTHORS ROUTES ====================
router.get('/authors', async (req, res) => {
  try {
    const db = getDb();
    const authors = await db.collection('authors').find().toArray();
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(authors);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get('/authors/:id', async (req, res) => {
  try {
    const db = getDb();
    const authorId = new ObjectId(req.params.id);
    const author = await db.collection('authors').findOne({ _id: authorId });
    if (!author) {
      return res.status(404).json({ message: 'Author not found' });
    }
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(author);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
