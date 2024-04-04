import { createClient } from '@supabase/supabase-js'

export const supabaseUrl = 'https://wfmcitfxyuqaduywzhlp.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndmbWNpdGZ4eXVxYWR1eXd6aGxwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA3NDI4OTksImV4cCI6MjAyNjMxODg5OX0.z9PJaEw13fR_Rp9oOeJSaACi1lwM8us91z7M9q7NBv0"
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;