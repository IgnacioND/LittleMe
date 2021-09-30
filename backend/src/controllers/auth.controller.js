/* eslint-disable no-underscore-dangle */
const passport = require('passport');
const jwt = require('jsonwebtoken');
const md5 = require('md5');
const UserModel = require('../models/user.model');

let refreshTokens = [];

// function authController() {
async function signup({ body }, res) {
  const newPassword = md5(body.password);
  const newBody = body;
  newBody.password = newPassword;
  const newUser = await UserModel.create(body);
  res.json(
    {
      message: 'Welcome to LittleMe',
      user: newUser,
    },
  );
}
async function login(req, res) {
  passport.authenticate('login',
    async (err, user) => {
      try {
        if (err || !user) {
          const error = new Error('Something went wrong.');
          res.status(500);
          return res.send(error.message);
        }
        return req.login(
          user,
          { session: false },
          async (error) => {
            if (error) return res.send(error);
            const data = { _id: user._id, email: user.email };
            const token = jwt.sign(
              { user: data },
              process.env.JWT_SECRET,
              { expiresIn: '30m' },
            );
            const refreshToken = jwt.sign(
              { user: data },
              process.env.JWT_SECRET,
            );
            refreshTokens.push(refreshToken);
            return res.json({
              token,
              refreshToken,
              user,
            });
          },
        );
      } catch (error) {
        return res.send(error);
      }
    })(req, res);
}

function updateToken(req, res) {
  const { token } = req.body;
  if (!token) {
    return res.status(401);
  } if (!refreshTokens.includes(token)) {
    return res.status(403);
  }

  return jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      res.status(403);
    }
    const data = { _id: user._id, email: user.email };
    const accesToken = jwt.sign(
      { user: data },
      process.env.JWT_SECRET,
      { expiresIn: '30m' },
    );
    return res.json({
      accesToken,
    });
  });
}
function logOut({ body }, res) {
  const { token } = body;
  refreshTokens = refreshTokens.filter((current) => current !== token);
  res.send('See you soon');
}
//   return {
//     signup,
//     login,
//     updateToken,
//     logOut,
//   };
// }

module.exports = {
  signup,
  login,
  updateToken,
  logOut,
};
