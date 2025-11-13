import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import {signUp} from "./models/users.js";

const app = express();
dotenv.config({path: './.env.development'});

app.use(express.json());
app.use(cors());

app.post('/api/signUpUser', async (req, res) => {
    const userDetails = await req.body;

    let email = userDetails.email;
    let password = userDetails.password;

    try{
        const createUser = await signUp(email, password);
        console.log(createUser);

        res.status(200).json({
            success: true,
            message: 'User signed up successfully',
            redirectURL: '/login',
        })
    }
    catch(error){
        console.log(`An error has occurred while trying to make this Post Request: ${error}`);
    }
})

const PORT = process.env.SERVER_PORT;
console.log(`the port is ${PORT}`)
app.listen(PORT, () => console.log(`Listening at port: ${PORT}`));


