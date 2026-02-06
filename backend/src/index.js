import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import webRoute from './router/web.js';
import Connection from './config/DB.js';
import DatabaseTableSeeder from './config/seeder/DatabaseTableSeeder.js';

dotenv.config();

Connection.run();
DatabaseTableSeeder.run();

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static('public'));
const PORT = process.env.PORT || 3000;

app.use('/', webRoute);

app.listen(PORT, () => {
    console.log(`Server is running on port ${process.env.URL}:${PORT}`);
});