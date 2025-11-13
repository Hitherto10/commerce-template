import { supabase } from '../db_config/database.js';

async function fetchStaff(){
    try{
        const {data} = await supabase.from('staff').select('*');
        console.log(data)
    }
    catch(error){
        console.log(error);
    }
}

fetchStaff()