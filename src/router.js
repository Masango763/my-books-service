import { Router } from 'express';

const router = Router();

// Root redirect to Swagger API documentation
router.get('/', (req, res) => {
  res.redirect('/api-docs');
});

// Books Routes (Example endpoints - adjust path to your controller if needed)
router.get('/books', (req, res) => {
  // If you have a books controller, call it here, e.g.:
  // booksController.getAllBooks(req, res);
});

router.get('/books/:id', (req, res) => {
  // booksController.getBookById(req, res);
});

router.post('/books', (req, res) => {
  // booksController.createBook(req, res);
});

router.put('/books/:id', (req, res) => {
  // booksController.updateBook(req, res);
});

router.delete('/books/:id', (req, res) => {
  // booksController.deleteBook(req, res);
});

// Authors Routes
router.get('/authors', (req, res) => {
  // authorsController.getAllAuthors(req, res);
});

router.get('/authors/:id', (req, res) => {
  // authorsController.getAuthorById(req, res);
});

router.post('/authors', (req, res) => {
  // authorsController.createAuthor(req, res);
});

router.put('/authors/:id', (req, res) => {
  // authorsController.updateAuthor(req, res);
});

router.delete('/authors/:id', (req, res) => {
  // authorsController.deleteAuthor(req, res);
});

export default router;
