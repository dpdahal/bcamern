import express from 'express';
import dotenv from 'dotenv';
import webRoute from './router/web.js';
import Connection from './config/DB.js';
import DatabaseTableSeeder from './config/seeder/DatabaseTableSeeder.js';

dotenv.config();

Connection.run();
DatabaseTableSeeder.run();

const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3000;

app.use('/', webRoute);

app.listen(PORT, () => {
    console.log(`Server is running on port ${process.env.URL}:${PORT}`);
});