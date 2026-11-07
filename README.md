# my-books-service

[![Live API](https://img.shields.io/badge/Live%20API-Render-46E3B7?logo=render&logoColor=white)](https://my-books-service.onrender.com/api-docs)
[![Swagger UI](https://img.shields.io/badge/Swagger-API%20Docs-85EA2D?logo=swagger&logoColor=black)](https://my-books-service.onrender.com/api-docs)
[![Node.js](https://img.shields.io/badge/Node.js-339933?logo=nodedotjs&logoColor=white)](https://nodejs.org)
[![Express](https://img.shields.io/badge/Express-000000?logo=express&logoColor=white)](https://expressjs.com)
[![MongoDB Atlas](https://img.shields.io/badge/MongoDB%20Atlas-47A248?logo=mongodb&logoColor=white)](https://www.mongodb.com/atlas)
[![ESLint](https://img.shields.io/badge/ESLint-4B32C3?logo=eslint&logoColor=white)](https://eslint.org)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Closed issues](https://img.shields.io/github/issues-closed/Masango763/my-books-service)](https://github.com/Masango763/my-books-service/issues?q=is%3Aissue+is%3Aclosed)
[![Pull requests](https://img.shields.io/github/issues-pr-closed/Masango763/my-books-service)](https://github.com/Masango763/my-books-service/pulls?q=is%3Apr+is%3Aclosed)

CSE 341 Web Services - Week 02 Books and Authors API built with Express, MVC, MongoDB Atlas, and Swagger UI documentation.

## Deployed URL & Documentation
* **Live API Base:** [https://my-books-service.onrender.com](https://my-books-service.onrender.com)
* **Swagger API Docs:** [https://my-books-service.onrender.com/api-docs](https://my-books-service.onrender.com/api-docs)

> **Note:** The free Render instance sleeps when idle, so the first request may take 30 to 50 seconds to spin up.

## API Routes & Documentation

### Books Collection
| Method | Path | Success | Errors / Status Codes |
|---|---|---|---|
| GET | `/books` | 200, array of books | 500 Internal server error |
| GET | `/books/:id` | 200, single book | 404 Book not found, 500 |
| POST | `/books` | 201 Created | 400 Bad Request, 500 |
| PUT | `/books/:id` | 204 No Content / 200 | 400 Bad Request, 404, 500 |
| DELETE | `/books/:id` | 200 OK / 204 | 404 Not Found, 500 |

### Authors Collection
| Method | Path | Success | Errors / Status Codes |
|---|---|---|---|
| GET | `/authors` | 200, array of authors | 500 Internal server error |
| GET | `/authors/:id` | 200, single author | 404 Author not found, 500 |
| POST | `/authors` | 201 Created | 400 Bad Request, 500 |
| PUT | `/authors/:id` | 204 No Content / 200 | 400 Bad Request, 404, 500 |
| DELETE | `/authors/:id` | 200 OK / 204 | 404 Not Found, 500 |

## Run locally
1. Clone the repository and run `npm install`.
2. Create a `.env` file with `PORT`, `MONGODB_URI`, and `MONGODB_DB_NAME` (never commit your `.env` file).
3. Run `npm run dev` to start with nodemon.
4. Open `http://localhost:3000/api-docs` to view the interactive Swagger documentation.

## Available Scripts
* `npm start` - Starts production server
* `npm run dev` - Starts development server with nodemon
* `npm run swagger` - Generates Swagger documentation output (`swagger-output.json`)
* `npm run lint` - Runs ESLint checks
* `npm run lint:fix` - Automatically fixes fixable ESLint errors
