import { initDb, getDb } from './src/db/connect.js';

const sampleBooks = [
  { title: "Patterns of Light", author: "Maya Rivera", publicationDate: "2021-08-17", genre: "Fiction", pages: 310 },
  { title: "Node.js Architecture Guide", author: "Masango Dewheretsoko", publicationDate: "2023-04-12", genre: "Technology", pages: 420 },
  { title: "Database Systems: MongoDB Atlas", author: "Alex Chen", publicationDate: "2022-11-05", genre: "Computer Science", pages: 280 }
];

const sampleAuthors = [
  { name: "Maya Rivera", nationality: "Mexican", birthYear: 1985, active: true },
  { name: "Masango Dewheretsoko", nationality: "Zimbabwean", birthYear: 1999, active: true },
  { name: "Alex Chen", nationality: "Canadian", birthYear: 1978, active: true }
];

async function seed() {
  initDb(async (err) => {
    if (err) {
      console.error('Failed to connect to DB:', err);
      process.exit(1);
    }
    const db = getDb();
    
    // Clear and insert books
    await db.collection('books').deleteMany({});
    await db.collection('books').insertMany(sampleBooks);
    console.log('Successfully seeded 3 Books!');

    // Clear and insert authors
    await db.collection('authors').deleteMany({});
    await db.collection('authors').insertMany(sampleAuthors);
    console.log('Successfully seeded 3 Authors!');

    process.exit(0);
  });
}

seed();
