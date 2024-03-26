import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://gkspiirlvyerhusbbgps.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdrc3BpaXJsdnllcmh1c2JiZ3BzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTAzNDk1OTMsImV4cCI6MjAyNTkyNTU5M30.vuJwgJjpLhniDnyOHHNXBt1Dn_BqTOughMysa8nXJOI";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
