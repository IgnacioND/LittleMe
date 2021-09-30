const houseController = require('./house.controller');
const House = require('../models/house.model');

jest.mock('../models/house.model');
describe('Given a house controller component', () => {
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
        House.create.mockResolvedValue({
          mock: 'mockData',
        });

        await houseController.createHouse(req.body, res);

        expect(res.json).toHaveBeenCalled();
      });

      test('Then res.json returns object', async () => {
        House.create.mockResolvedValue({
          mock: 'mockData',
        });

        await houseController.createHouse(req.body, res);

        expect(res.json).toHaveBeenCalledWith({
          mock: 'mockData',
        });
      });
    });
    describe('And create method rejects', () => {
      test('Then res.status should be 500', async () => {
        House.create.mockRejectedValue();

        await houseController.createHouse(req, res);

        expect(res.status).toHaveBeenCalledWith(500);
      });
      test('Then res.send is called with error', async () => {
        House.create.mockRejectedValue(new Error('cant create house'));

        await houseController.createHouse(req, res);

        expect(res.send.mock.calls[0][0].message).toBe('cant create house');
      });
    });
  });
  describe('When get method is invoked', () => {
    beforeEach(() => {
      req = {
        params: { houseId: '123456' },
        body: {
          mock: 'mockData',
        },
      };
    });
    describe('And get method resolves', () => {
      test('Then res.json is called', async () => {
        House.findById.mockResolvedValue({
          mock: 'mockData',
        });

        await houseController.getHouse(req, res);

        expect(res.json).toHaveBeenCalled();
      });

      test('Then res.json returns object', async () => {
        House.findById.mockResolvedValue({
          mock: 'mockData',
        });

        await houseController.getHouse(req, res);

        expect(res.json).toHaveBeenCalledWith({
          mock: 'mockData',
        });
      });
    });
    describe('And get method rejects', () => {
      test('Then res.status should be 500', async () => {
        House.findById.mockRejectedValue();

        await houseController.getHouse(req, res);

        expect(res.status).toHaveBeenCalledWith(500);
      });
      test('Then res.send is called with error', async () => {
        House.findById.mockRejectedValue(new Error('cant get house'));

        await houseController.getHouse(req, res);

        expect(res.send.mock.calls[0][0].message).toBe('cant get house');
      });
    });
  });
  describe('When edit method is invoked', () => {
    beforeEach(() => {
      req = {
        params: { houseId: '123456' },
        body: {
          mock: 'mockData',
        },
      };
    });
    describe('And edit method resolves', () => {
      test('Then res.json is called', async () => {
        House.findByIdAndUpdate.mockResolvedValue({
          mock: 'mockData',
        });

        await houseController.editHouse(req, res);

        expect(res.json).toHaveBeenCalled();
      });

      test('Then res.json returns object', async () => {
        House.findByIdAndUpdate.mockResolvedValue({
          mock: 'mockData',
        });

        await houseController.editHouse(req, res);

        expect(res.json).toHaveBeenCalledWith({
          mock: 'mockData',
        });
      });
    });
    describe('And edit method rejects', () => {
      test('Then res.status should be 500', async () => {
        House.findByIdAndUpdate.mockRejectedValue();

        await houseController.editHouse(req, res);

        expect(res.status).toHaveBeenCalledWith(500);
      });
      test('Then res.send is called with error', async () => {
        House.findByIdAndUpdate.mockRejectedValue(new Error('cant edit house'));

        await houseController.editHouse(req, res);

        expect(res.send.mock.calls[0][0].message).toBe('cant edit house');
      });
    });
  });
  describe('When delete method is invoked', () => {
    beforeEach(() => {
      req = {
        params: { houseId: '123456' },
      };
    });
    describe('And delete method resolves', () => {
      test('Then res.json is called', async () => {
        House.findByIdAndDelete.mockResolvedValue({
          mock: 'mockData',
        });

        await houseController.deleteHouse(req, res);

        expect(res.json).toHaveBeenCalled();
      });
    });
    describe('And delete method rejects', () => {
      test('Then res.status should be 500', async () => {
        House.findByIdAndDelete.mockRejectedValue();

        await houseController.deleteHouse(req, res);

        expect(res.status).toHaveBeenCalledWith(500);
      });
      test('Then res.send is called with error', async () => {
        House.findByIdAndDelete.mockRejectedValue(new Error('cant delete house'));

        await houseController.deleteHouse(req, res);

        expect(res.send.mock.calls[0][0].message).toBe('cant delete house');
      });
    });
  });
});
