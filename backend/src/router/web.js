import express from 'express';
import userRoute from './user.js';
import categoryRoute from './category.js';


const webRoute = express.Router();
webRoute.use('/users', userRoute);
webRoute.use('/categories', categoryRoute);

export default webRoute;