import { createClient } from '@supabase/supabase-js'

export const supabaseUrl = 'https://gxbmcmkkerhemnmtjdfb.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd4Ym1jbWtrZXJoZW1ubXRqZGZiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzA2NDQ2MjcsImV4cCI6MjA0NjIyMDYyN30.LzMVgOXeeHT0QcKsOgBvgLz2kstiYQfOEjdVLr8KHf8"
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;