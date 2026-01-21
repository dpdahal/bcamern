import express from 'express';
import CategoryController from '../controllers/CategoryController.js';

const categoryRoute = express.Router();
const cInstance = new CategoryController();
categoryRoute.get('/', cInstance.index);
export default categoryRoute;