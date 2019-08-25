import dotenv from 'dotenv'
dotenv.config({ path: 'variables.env' });

// import createServer from './createServer';
const createServer = require('./createServer');
// import {db }from './db'
// const db = require('./db');
const server = createServer();

// TODO Use express middlware to handle cookies (JWT)
// TODO Use express middlware to populate current user

server.start(
  {
    cors: {
      credentials: true,
      origin: process.env.FRONTEND_URL,
    },
  },
  deets => {
    console.log(`Server is now running on port http:/localhost:${deets.port}`);
  }
);
