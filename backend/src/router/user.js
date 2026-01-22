import express from 'express';
import UsersController from '../controllers/UsersController.js';
import FileUpload from '../middleware/FileUpload.js';

const userRoute = express.Router();
const uInstace = new UsersController();
const fIn= new FileUpload();
const upload = fIn.uploadImageAndFile('users');

userRoute.get('/', uInstace.index);
userRoute.post('/', upload.single('image'), uInstace.insert);
userRoute.get('/:id', uInstace.show);
userRoute.put('/:id', uInstace.update);
userRoute.delete('/:id', uInstace.delete);

export default userRoute;