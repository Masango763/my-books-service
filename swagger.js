import swaggerAutogen from 'swagger-autogen';

const doc = {
  info: {
    title: 'Books and Authors API',
    description: 'CSE 341 Web Services - Books and Authors API',
  },
  host: 'localhost:3000',
  schemes: ['http', 'https'],
};

const outputFile = './swagger-output.json';
const endpointsFiles = ['./src/router.js'];

swaggerAutogen()(outputFile, endpointsFiles, doc);
