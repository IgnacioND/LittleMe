const jwt = require('jsonwebtoken');
const passport = require('passport');
const authController = require('./auth.controller');

jest.mock('jsonwebtoken');
jest.mock('passport');

describe('Given an Auth controller', () => {
  describe('When signup is called', () => {
    describe('And req contains user', () => {
      test('Shoud return res.json', async () => {
        const res = {
          json: jest.fn(),
        };
        const req = {
          user: '',
        };
        await authController.signup(req, res);
        expect(res.json).toHaveBeenCalled();
      });
    });
  });
});
// describe('When login is called', () => {
//   describe('And there is no user', () => {
//     test('Shoud return error status 500', async () => {
//       const res = {
//         status: jest.fn(),
//         send: jest.fn(),
//         json: jest.fn(),
//       };
//       const req = {
//         login: jest.fn(),
//       };
//       passport.authenticate = jest.fn(() => () => { '500'; });
//       await authController.login(req, res);
//       expect(res.status).toBe(500);
//     });
//   });
describe('When updateToken is called', () => {
  describe('And there is no token', () => {
    test('Shoud return error status 401', async () => {
      const req = {
        body: { },

      };
      const res = {
        status: jest.fn(),
      };

      await authController.updateToken(req, res);
      expect(res.status).toHaveBeenCalledWith(401);
    });
  });
  describe('And there is incorrect token', () => {
    test('Shoud return error status 403', async () => {
      const req = {
        body: {
          token: '1234',
        },
      };
      const res = {
        status: jest.fn(),
      };

      await authController.updateToken(req, res);
      expect(res.status).toHaveBeenCalledWith(403);
    });
  });
  //   describe('And there is correct token', () => {
  //     test('Shoud call jwt function', async () => {
  //       const refreshTokens = ['1234'];
  //       const req = {
  //         body: {
  //           token: '1234',
  //         },
  //       };
  //       const res = {
  //         status: jest.fn(),
  //       };
  //       jwt.verify = jest.fn();

//       await authController.login(req,res);
//       await authController.updateToken(req, res);
//       expect(jwt.verify()).toHaveBeenCalled();
//     });
//   });
});
