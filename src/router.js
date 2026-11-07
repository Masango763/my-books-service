import { Router } from 'express';
// Import your controllers or sub-routers here if you have them, e.g.:
// import booksRouter from './routes/books.js';
// import authorsRouter from './routes/authors.js';

const router = Router();

// Root JSON message or redirect
router.get('/', (req, res) => {
  res.status(200).json({
    status: "success",
    message: "Welcome to the Books and Authors API",
    documentation: "https://my-books-service.onrender.com/api-docs"
  });
});

// If your routes are mounted via separate route files:
// router.use('/books', booksRouter);
// router.use('/authors', authorsRouter);

export default router;
