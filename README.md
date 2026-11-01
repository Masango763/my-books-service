# my-books-service

[![Live API](https://img.shields.io/badge/Live%20API-Render-46E3B7?logo=render&logoColor=white)](https://my-books-service.onrender.com)
[![GET /books](https://img.shields.io/badge/GET-/books-blue)](https://my-books-service.onrender.com/books)
[![Node.js](https://img.shields.io/badge/Node.js-339933?logo=nodedotjs&logoColor=white)](https://nodejs.org)
[![Express](https://img.shields.io/badge/Express-000000?logo=express&logoColor=white)](https://expressjs.com)
[![MongoDB Atlas](https://img.shields.io/badge/MongoDB%20Atlas-47A248?logo=mongodb&logoColor=white)](https://www.mongodb.com/atlas)
[![ESLint](https://img.shields.io/badge/ESLint-4B32C3?logo=eslint&logoColor=white)](https://eslint.org)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Closed issues](https://img.shields.io/github/issues-closed/Masango763/my-books-service)](https://github.com/Masango763/my-books-service/issues?q=is%3Aissue+is%3Aclosed)
[![Pull requests](https://img.shields.io/github/issues-pr-closed/Masango763/my-books-service)](https://github.com/Masango763/my-books-service/pulls?q=is%3Apr+is%3Aclosed)

CSE 341 Web Services - Week 01 Books API built with Express, MVC, and MongoDB.

## Deployed URL
https://my-books-service.onrender.com

The free Render instance sleeps when idle, so the first request can take 30 to 50 seconds.

## Routes
| Method | Path | Success | Errors |
|---|---|---|---|
| GET | `/books` | 200, array of books | 500 `{ "message": "Internal server error" }` |
| GET | `/books/:id` | 200, one book | 404 `{ "message": "Book not found" }`, 500 |

Example book:

```json
{ "id": "b1", "author": "Maya Rivera", "title": "Patterns of Light", "publicationDate": "2021-08-17" }
```

## Run locally
1. `npm install`
2. Create a `.env` file with `PORT`, `MONGODB_URI` and `MONGODB_DB_NAME` (never commit it)
3. `npm run dev`

## Scripts
`npm run dev` | `npm start` | `npm run lint` | `npm run lint:fix`
