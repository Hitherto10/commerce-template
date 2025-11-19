import { getSupabaseClient } from '../db_config/database.js';

export async function fetchUsers(){
    try{
        const supabase = getSupabaseClient();
        const {data} = await supabase.from('users').select('*');
        console.log(data)
    }
    catch(error){
        console.log(error);
    }
}


export async function signUpUser(email, password){
    try{
        const supabase = getSupabaseClient();
        const {data, error} = await supabase.auth.signUp({
            email: email,
            password: password,
        })
        console.log(data);
    }
    catch(error){
        console.log(error);
    }

}
