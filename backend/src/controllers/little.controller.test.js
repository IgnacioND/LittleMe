const littleController = require('./little.controller');
const Little = require('../models/little.model');

jest.mock('../models/little.model');
describe('Given a little controller component', () => {
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
        Little.create.mockResolvedValue({
          mock: 'mockData',
        });

        await littleController.createLittle(req.body, res);

        expect(res.json).toHaveBeenCalled();
      });

      test('Then res.json returns object', async () => {
        Little.create.mockResolvedValue({
          mock: 'mockData',
        });

        await littleController.createLittle(req.body, res);

        expect(res.json).toHaveBeenCalledWith({
          mock: 'mockData',
        });
      });
    });
    describe('And create method rejects', () => {
      test('Then res.status should be 500', async () => {
        Little.create.mockRejectedValue();

        await littleController.createLittle(req, res);

        expect(res.status).toHaveBeenCalledWith(500);
      });
      test('Then res.send is called with error', async () => {
        Little.create.mockRejectedValue(new Error('cant create little'));

        await littleController.createLittle(req, res);

        expect(res.send.mock.calls[0][0].message).toBe('cant create little');
      });
    });
  });
  describe('When get method is invoked', () => {
    beforeEach(() => {
      req = {
        params: { littleId: '123456' },
        body: {
          mock: 'mockData',
        },
      };
    });
    describe('And get method resolves', () => {
      test('Then res.json is called', async () => {
        Little.findById.mockResolvedValue({
          mock: 'mockData',
        });

        await littleController.getLittle(req, res);

        expect(res.json).toHaveBeenCalled();
      });

      test('Then res.json returns object', async () => {
        Little.findById.mockResolvedValue({
          mock: 'mockData',
        });

        await littleController.getLittle(req, res);

        expect(res.json).toHaveBeenCalledWith({
          mock: 'mockData',
        });
      });
    });
    describe('And get method rejects', () => {
      test('Then res.status should be 500', async () => {
        Little.findById.mockRejectedValue();

        await littleController.getLittle(req, res);

        expect(res.status).toHaveBeenCalledWith(500);
      });
      test('Then res.send is called with error', async () => {
        Little.findById.mockRejectedValue(new Error('cant get little'));

        await littleController.getLittle(req, res);

        expect(res.send.mock.calls[0][0].message).toBe('cant get little');
      });
    });
  });
  describe('When edit method is invoked', () => {
    beforeEach(() => {
      req = {
        params: { littleId: '123456' },
        body: {
          mock: 'mockData',
        },
      };
    });
    describe('And edit method resolves', () => {
      test('Then res.json is called', async () => {
        Little.findByIdAndUpdate.mockResolvedValue({
          mock: 'mockData',
        });

        await littleController.editLittle(req, res);

        expect(res.json).toHaveBeenCalled();
      });

      test('Then res.json returns object', async () => {
        Little.findByIdAndUpdate.mockResolvedValue({
          mock: 'mockData',
        });

        await littleController.editLittle(req, res);

        expect(res.json).toHaveBeenCalledWith({
          mock: 'mockData',
        });
      });
    });
    describe('And edit method rejects', () => {
      test('Then res.status should be 500', async () => {
        Little.findByIdAndUpdate.mockRejectedValue();

        await littleController.editLittle(req, res);

        expect(res.status).toHaveBeenCalledWith(500);
      });
      test('Then res.send is called with error', async () => {
        Little.findByIdAndUpdate.mockRejectedValue(new Error('cant edit little'));

        await littleController.editLittle(req, res);

        expect(res.send.mock.calls[0][0].message).toBe('cant edit little');
      });
    });
  });
  describe('When delete method is invoked', () => {
    beforeEach(() => {
      req = {
        params: { littleId: '123456' },
      };
    });
    describe('And delete method resolves', () => {
      test('Then res.json is called', async () => {
        Little.findByIdAndDelete.mockResolvedValue({
          mock: 'mockData',
        });

        await littleController.deleteLittle(req, res);

        expect(res.json).toHaveBeenCalled();
      });
    });
    describe('And delete method rejects', () => {
      test('Then res.status should be 500', async () => {
        Little.findByIdAndDelete.mockRejectedValue();

        await littleController.deleteLittle(req, res);

        expect(res.status).toHaveBeenCalledWith(500);
      });
      test('Then res.send is called with error', async () => {
        Little.findByIdAndDelete.mockRejectedValue(new Error('cant delete little'));

        await littleController.deleteLittle(req, res);

        expect(res.send.mock.calls[0][0].message).toBe('cant delete little');
      });
    });
  });
});
