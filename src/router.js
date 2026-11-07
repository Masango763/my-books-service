import { Router } from 'express';

const router = Router();

// Root JSON message instead of redirect
router.get('/', (req, res) => {
  res.status(200).json({
    status: "success",
    message: "Welcome to the Books and Authors API",
    documentation: "https://my-books-service.onrender.com/api-docs"
  });
});

export default router;
