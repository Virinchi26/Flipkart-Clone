import express from 'express';
import connectDB from './db/connect.js';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';

import DefaultData from './default.js';

import router from './routes/route.js';

const app = express();

dotenv.config();

app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", router);

const PORT = 8000

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

connectDB(USERNAME, PASSWORD);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    });

DefaultData();