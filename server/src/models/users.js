import { supabase } from '../db_config/database.js';

export async function fetchUsers(){
    try{
        const {data} = await supabase.from('users').select('*');
        console.log(data)
    }
    catch(error){
        console.log(error);
    }
}
export async function signUp(email, password){
    const {data, error} = await supabase.auth.signUp({
        email: email,
        password: password,
    })
    console.log(data);
    console.error(error)
}

// signUp('kcda4468@gmail.com', 'Kenechukwu10')
