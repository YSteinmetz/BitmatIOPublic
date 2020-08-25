import express from 'express'
import newUserController from './controller/newUserController';

const routes = express.Router();
const userController = new newUserController();

routes.post('/createNU', userController.create);
routes.get('/login', userController.login);

export default routes;