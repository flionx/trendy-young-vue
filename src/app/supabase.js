import { createClient } from "@supabase/supabase-js";

const supabaseUrl = 'https://txehppwhjaeybizxvleu.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR4ZWhwcHdoamFleWJpenh2bGV1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDUzOTcxNzMsImV4cCI6MjA2MDk3MzE3M30.pqT0xX_Y49_Q-A5l5l4ijhSkWBpGnzBrLbiBG853SKY';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;