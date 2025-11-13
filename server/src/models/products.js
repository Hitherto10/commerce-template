import { supabase } from '../db_config/database.js';

async function fetchProducts(){
    try{
        const {data} = await supabase.from('products').select('*');
        console.log(data)
    }
    catch(error){
        console.log(error);
    }
}

fetchProducts()