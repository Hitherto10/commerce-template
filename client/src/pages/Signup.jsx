import react from 'react';
import axios from 'axios';




async function signUpUser(){
    try {
        const payload = {
            email: 'kcda4468@gmail.com',
            password: '12345678',
        }
        const response = await axios.post('http://localhost:3000/api/signUpUser', payload)

        console.log(response.data.message);
    }
    catch (error) {
        console.log(error);
    }
}


signUpUser();