const { Router } = require('express');
const houseController = require('../controllers/house.controller');
const littleController = require('../controllers/little.controller');
const taskController = require('../controllers/task.controller');
const userController = require('../controllers/user.controller');

const mainRoutes = new Router();

mainRoutes
  .route('/house/:houseId')
  .get(houseController.getHouse)
  .put(houseController.editHouse)
  .delete(houseController.deleteHouse);
mainRoutes
  .route('/house')
  .post(houseController.createHouse);

mainRoutes
  .route('/little/:littleId')
  .get(littleController.getLittle)
  .put(littleController.editLittle)
  .delete(littleController.deleteLittle);
mainRoutes
  .route('/little')
  .post(littleController.createLittle);
mainRoutes
  .route('/task/delete/:taskId')
  .put(taskController.deleteTask);
mainRoutes
  .route('/task/done/:taskId')
  .put(taskController.doneTask);
mainRoutes
  .route('/task/:taskId')
  .get(taskController.getTask)
  .put(taskController.editTask);
mainRoutes
  .route('/task/:userId')
  .post(taskController.createTask);
mainRoutes
  .route('/user/:userId')
  .get(userController.getUser)
  .put(userController.editUser)
  .delete(userController.deleteUser);
mainRoutes
  .route('/user')
  .post(userController.createUser);

module.exports = mainRoutes;
