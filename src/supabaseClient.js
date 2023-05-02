import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://vdigcedocqbiuyvtdzqw.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZkaWdjZWRvY3FiaXV5dnRkenF3Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY4Mjk5MTgxNiwiZXhwIjoxOTk4NTY3ODE2fQ.HfR7R0dqbtlTZD1stAr_RwcezsiPTJMsKSNe77dcdEc";

export const supabase = createClient(supabaseUrl, supabaseKey);