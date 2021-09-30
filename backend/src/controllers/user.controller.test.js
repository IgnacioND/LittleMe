const userController = require('./user.controller');
const User = require('../models/user.model');

jest.mock('../models/user.model');
describe('Given a user controller component', () => {
  let req;
  let res;
  beforeEach(() => {
    res = {
      json: jest.fn(),
      status: jest.fn(),
      send: jest.fn(),
    };
  });
  describe('When create method is invoked', () => {
    beforeEach(() => {
      req = {
        body: {
          mock: 'mockData',
        },
      };
    });
    describe('And create method resolves', () => {
      test('Then res.json is called', async () => {
        User.create.mockResolvedValue({
          mock: 'mockData',
        });

        await userController.createUser(req.body, res);

        expect(res.json).toHaveBeenCalled();
      });

      test('Then res.json returns object', async () => {
        User.create.mockResolvedValue({
          mock: 'mockData',
        });

        await userController.createUser(req.body, res);

        expect(res.json).toHaveBeenCalledWith({
          mock: 'mockData',
        });
      });
    });
    describe('And create method rejects', () => {
      test('Then res.status should be 500', async () => {
        User.create.mockRejectedValue();

        await userController.createUser(req, res);

        expect(res.status).toHaveBeenCalledWith(500);
      });
      test('Then res.send is called with error', async () => {
        User.create.mockRejectedValue(new Error('cant create user'));

        await userController.createUser(req, res);

        expect(res.send.mock.calls[0][0].message).toBe('cant create user');
      });
    });
  });
  describe('When get method is invoked', () => {
    beforeEach(() => {
      req = {
        params: { userId: '123456' },
        body: {
          mock: 'mockData',
        },
      };
    });
    describe('And get method resolves', () => {
      beforeEach(() => {
        User.findById
          .mockReturnValue({
            populate: jest.fn()

              .mockReturnValue({
                populate: jest.fn()

                  .mockReturnValue({
                    populate: jest.fn().mockResolvedValue({
                      mock: 'mockData',
                    }),
                  }),

              }),
          });
      });
      test('Then res.json is called', async () => {
        await userController.getUser(req, res);
        expect(res.json).toHaveBeenCalled();
      });

      test('Then res.json returns object', async () => {
        await userController.getUser(req, res);

        expect(res.json).toHaveBeenCalledWith({
          mock: 'mockData',
        });
      });
    });
    describe('And get method rejects', () => {
      beforeEach(() => {
        User.findById
          .mockReturnValue({
            populate: jest.fn()

              .mockReturnValue({
                populate: jest.fn()
                  .mockReturnValue({
                    populate: jest.fn()

                      .mockRejectedValue(new Error('cant get user')),

                  }),
              }),
          });
      });
      test('Then res.status should be 500', async () => {
        await userController.getUser(req, res);

        expect(res.status).toHaveBeenCalledWith(500);
      });
      test('Then res.send is called with error', async () => {
        await userController.getUser(req, res);

        expect(res.send.mock.calls[0][0].message).toBe('cant get user');
      });
    });
  });
  describe('When edit method is invoked', () => {
    beforeEach(() => {
      req = {
        params: { userId: '123456' },
        body: {
          mock: 'mockData',
        },
      };
    });
    describe('And edit method resolves', () => {
      beforeEach(() => {
        User.findByIdAndUpdate
          .mockReturnValue({
            populate: jest.fn()

              .mockReturnValue({
                populate: jest.fn()

                  .mockReturnValue({
                    populate: jest.fn().mockResolvedValue({
                      mock: 'mockData',
                    }),
                  }),

              }),
          });
      });
      test('Then res.json is called', async () => {
        await userController.editUser(req, res);

        expect(res.json).toHaveBeenCalled();
      });

      test('Then res.json returns object', async () => {
        await userController.editUser(req, res);

        expect(res.json).toHaveBeenCalledWith({
          mock: 'mockData',
        });
      });
    });
    describe('And edit method rejects', () => {
      beforeEach(() => {
        User.findByIdAndUpdate
          .mockReturnValue({
            populate: jest.fn()

              .mockReturnValue({
                populate: jest.fn()
                  .mockReturnValue({
                    populate: jest.fn()

                      .mockRejectedValue(new Error('cant edit user')),

                  }),
              }),
          });
      });
      test('Then res.status should be 500', async () => {
        await userController.editUser(req, res);

        expect(res.status).toHaveBeenCalledWith(500);
      });
      test('Then res.send is called with error', async () => {
        await userController.editUser(req, res);

        expect(res.send.mock.calls[0][0].message).toBe('cant edit user');
      });
    });
  });
  describe('When delete method is invoked', () => {
    beforeEach(() => {
      req = {
        params: { userId: '123456' },
      };
    });
    describe('And delete method resolves', () => {
      test('Then res.json is called', async () => {
        User.findByIdAndDelete.mockResolvedValue({
          mock: 'mockData',
        });

        await userController.deleteUser(req, res);

        expect(res.json).toHaveBeenCalled();
      });
    });
    describe('And delete method rejects', () => {
      test('Then res.status should be 500', async () => {
        User.findByIdAndDelete.mockRejectedValue();

        await userController.deleteUser(req, res);

        expect(res.status).toHaveBeenCalledWith(500);
      });
      test('Then res.send is called with error', async () => {
        User.findByIdAndDelete.mockRejectedValue(new Error('cant delete user'));

        await userController.deleteUser(req, res);

        expect(res.send.mock.calls[0][0].message).toBe('cant delete user');
      });
    });
  });
});
