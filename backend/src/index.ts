import express from 'express';
import logger from 'morgan';
import cors from 'cors';

const port = 3000;
const app = express();

app.use(cors());
app.use(logger('dev'));

app.get('/', (_req, res) => res.send({ message: 'Hello World from backend!' }));

app.listen(port, () =>
    console.log(`🔥 Server is running at https://localhost:${port}`)
);