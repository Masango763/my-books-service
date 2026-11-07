import express from 'express';
import bodyParser from 'body-parser';
import { initDb } from './src/db/connect.js';
import router from './src/router.js';
import swaggerUi from 'swagger-ui-express';
import fs from 'fs';

const port = process.env.PORT || 3000;
const app = express();

let swaggerDocument = {};
try {
  const swaggerFile = fs.readFileSync('./swagger-output.json', 'utf8');
  swaggerDocument = JSON.parse(swaggerFile);
} catch (err) {
  console.log('Swagger output file not found yet.');
}

app
  .use(bodyParser.json())
  .use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept, Z-Key'
    );
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
  })
  .use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))
  .use('/', router);

initDb((err) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(port, () => {
      console.log(`Database connected and server running on port ${port}`);
    });
  }
});
