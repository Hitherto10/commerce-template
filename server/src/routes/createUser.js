import express from 'express';
import {signUpUser} from "../models/users.js";

const router = express.Router();

router.post('/createUser', async (req, res) => {
    const userDetails = await req.body;

    let email = userDetails.email;
    let password = userDetails.password;

    try{
        const createUser = await signUpUser(email, password);

        res.status(200).json({
            success: true,
            message: 'User signed up successfully',
            redirectURL: '/login', // TODO: eventually change to request object params
        })
    }
    catch(error){
        console.log(`An error has occurred while trying to make this Post Request: ${error}`);
    }
})

export default router;