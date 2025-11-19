import dotenv from "dotenv";
dotenv.config({ path: '../.env.development'});

import {createClient} from '@supabase/supabase-js';

export function getSupabaseClient() {
    return createClient(
        `${process.env.SUPABASE_URL}`,
        `${process.env.SUPABASE_KEY}`
    );
}