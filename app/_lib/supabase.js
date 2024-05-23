import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ikcoouuqribzvbrxabrf.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlrY29vdXVxcmlienZicnhhYnJmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTY0MzkyMDUsImV4cCI6MjAzMjAxNTIwNX0.vcUmt34mE6qoPN7hhP2nJuAedTzNL0r-iO6GVt4y9EQ";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
