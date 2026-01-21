import express from 'express';
import UsersController from '../controllers/UsersController.js';

const userRoute = express.Router();
const uInstace = new UsersController();

userRoute.get('/', uInstace.index);
userRoute.post('/', uInstace.insert);
userRoute.get('/:id', uInstace.show);
userRoute.put('/:id', uInstace.update);
userRoute.delete('/:id', uInstace.delete);

export default userRoute;