import dotenv from 'dotenv';
dotenv.config({path: './.env.development'});
import express from 'express';
import cors from 'cors';

import createUser from './routes/createUser.js';
const app = express();

app.use(express.json());
app.use(cors());



app.use('/api', createUser);



const PORT = process.env.SERVER_PORT;
app.listen(PORT, () =>
    console.log(`Listening at port: ${PORT}`)
);


