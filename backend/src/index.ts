import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import logger from 'morgan';
import cors from 'cors';

dotenv.config({ path: path.resolve(__dirname, '..', '..', '.env') });

const port = process.env.BACKEND_PORT || 3000;
const app = express();

app.use(cors());
app.use(logger('dev'));

app.get('/', (_req, res) => res.send({ message: 'Hello World from backend!' }));

app.listen(port, () =>
    console.log(`🔥 Server is running at https://localhost:${port}`)
);