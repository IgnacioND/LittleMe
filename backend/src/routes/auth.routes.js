const { Router } = require('express');
const passport = require('passport');
const {
  signup,
  login,
  updateToken,
  logOut,
} = require('../controllers/auth.controller');

const authRouter = Router();
authRouter
  .post('/signup',
    passport.authenticate('signup', { session: false }),
    (signup));
authRouter
  .post('/login',
    login);
authRouter
  .route('/token')
  .post(updateToken);
authRouter
  .route('/logout')
  .post(logOut);

module.exports = authRouter;
