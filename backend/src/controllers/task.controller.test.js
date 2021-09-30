const taskController = require('./task.controller');
const Task = require('../models/task.model');

jest.mock('../models/task.model');
describe('Given a task controller component', () => {
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
        Task.create.mockResolvedValue({
          mock: 'mockData',
        });

        await taskController.createTask(req.body, res);

        expect(res.json).toHaveBeenCalled();
      });

      test('Then res.json returns object', async () => {
        Task.create.mockResolvedValue({
          mock: 'mockData',
        });

        await taskController.createTask(req.body, res);

        expect(res.json).toHaveBeenCalledWith({
          mock: 'mockData',
        });
      });
    });
    describe('And create method rejects', () => {
      test('Then res.status should be 500', async () => {
        Task.create.mockRejectedValue();

        await taskController.createTask(req, res);

        expect(res.status).toHaveBeenCalledWith(500);
      });
      test('Then res.send is called with error', async () => {
        Task.create.mockRejectedValue(new Error('cant create task'));

        await taskController.createTask(req, res);

        expect(res.send.mock.calls[0][0].message).toBe('cant create task');
      });
    });
  });
  describe('When get method is invoked', () => {
    beforeEach(() => {
      req = {
        params: { taskId: '123456' },
        body: {
          mock: 'mockData',
        },
      };
    });
    describe('And get method resolves', () => {
      test('Then res.json is called', async () => {
        Task.findById.mockResolvedValue({
          mock: 'mockData',
        });

        await taskController.getTask(req, res);

        expect(res.json).toHaveBeenCalled();
      });

      test('Then res.json returns object', async () => {
        Task.findById.mockResolvedValue({
          mock: 'mockData',
        });

        await taskController.getTask(req, res);

        expect(res.json).toHaveBeenCalledWith({
          mock: 'mockData',
        });
      });
    });
    describe('And get method rejects', () => {
      test('Then res.status should be 500', async () => {
        Task.findById.mockRejectedValue();

        await taskController.getTask(req, res);

        expect(res.status).toHaveBeenCalledWith(500);
      });
      test('Then res.send is called with error', async () => {
        Task.findById.mockRejectedValue(new Error('cant get task'));

        await taskController.getTask(req, res);

        expect(res.send.mock.calls[0][0].message).toBe('cant get task');
      });
    });
  });
  describe('When edit method is invoked', () => {
    beforeEach(() => {
      req = {
        params: { taskId: '123456' },
        body: {
          mock: 'mockData',
        },
      };
    });
    describe('And edit method resolves', () => {
      test('Then res.json is called', async () => {
        Task.findByIdAndUpdate.mockResolvedValue({
          mock: 'mockData',
        });

        await taskController.editTask(req, res);

        expect(res.json).toHaveBeenCalled();
      });

      test('Then res.json returns object', async () => {
        Task.findByIdAndUpdate.mockResolvedValue({
          mock: 'mockData',
        });

        await taskController.editTask(req, res);

        expect(res.json).toHaveBeenCalledWith({
          mock: 'mockData',
        });
      });
    });
    describe('And edit method rejects', () => {
      test('Then res.status should be 500', async () => {
        Task.findByIdAndUpdate.mockRejectedValue();

        await taskController.editTask(req, res);

        expect(res.status).toHaveBeenCalledWith(500);
      });
      test('Then res.send is called with error', async () => {
        Task.findByIdAndUpdate.mockRejectedValue(new Error('cant edit task'));

        await taskController.editTask(req, res);

        expect(res.send.mock.calls[0][0].message).toBe('cant edit task');
      });
    });
  });
  describe('When delete method is invoked', () => {
    beforeEach(() => {
      req = {
        params: { taskId: '123456' },
      };
    });
    describe('And delete method resolves', () => {
      test('Then res.json is called', async () => {
        Task.findByIdAndDelete.mockResolvedValue({
          mock: 'mockData',
        });

        await taskController.deleteTask(req, res);

        expect(res.json).toHaveBeenCalled();
      });
    });
    describe('And delete method rejects', () => {
      test('Then res.status should be 500', async () => {
        Task.findByIdAndDelete.mockRejectedValue();

        await taskController.deleteTask(req, res);

        expect(res.status).toHaveBeenCalledWith(500);
      });
      test('Then res.send is called with error', async () => {
        Task.findByIdAndDelete.mockRejectedValue(new Error('cant delete task'));

        await taskController.deleteTask(req, res);

        expect(res.send.mock.calls[0][0].message).toBe('cant delete task');
      });
    });
  });
});
