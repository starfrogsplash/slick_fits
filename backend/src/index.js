import dotenv from 'dotenv'
import cookieParser from 'cookie-parser';
import jwt from 'jsonwebtoken'

dotenv.config({ path: 'variables.env' });

// import createServer from './createServer';
const createServer = require('./createServer');
// import db from './db'
const db = require('./db');
const server = createServer();

// TODO Use express middlware to handle cookies (JWT)
server.express.use(cookieParser())
// TODO Use express middlware to populate current user

server.express.use((req, res, next)=> {

  const {cookies:{token}} =  req

  if (token){
   const {userId} = jwt.verify(token, process.env.APP_SECRET)
   req.userId = userId;
  } 
  next()
})

// 2. Create a middleware that populates the user on each request

server.express.use(async (req, res, next) => {
  // if they aren't logged in, skip this
  if (!req.userId) return next();
  const user = await db.query.user(
    { where: { id: req.userId } },
    '{ id, permissions, email, name }'
  );
  console.log("user===", user)
  req.user = user;
  next();
});


server.start(
  {
    cors: {
      credentials: true,
      origin: process.env.FRONTEND_URL,
    },
  },
  deets => {
    console.log(`Server is now running on port http://localhost:${deets.port}`);
  }
);
