require('dotenv').config();
const passport = require('passport');
const express = require('express');
const morgan = require('morgan');
const debug = require('debug')('server');

const server = express();
const port = process.env.PORT;

server.use(express.json());
server.use(morgan('dev'));
server.use(passport.initialize());

const authRouter = require('./src/routes/auth.routes');
const mainRouter = require('./src/routes/main.routes');

require('./src/config/database.config');
require('./src/config/passport.config');

server.use('/api/auth/', authRouter);

server.use(
  '/api',
  passport.authenticate('jwt', { session: false }),
  mainRouter,
);

server.listen(port, debug(`server is running on port ${port}`));
