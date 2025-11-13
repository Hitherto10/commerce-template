import { supabase } from '../db_config/database.js';

async function fetchOrders(){
    try{
        const {data} = await supabase.from('orders').select('*');
        console.log(data)
    }
    catch(error){
        console.log(error);
    }
}

fetchOrders()