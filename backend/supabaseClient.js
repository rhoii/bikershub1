
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://pkhfvsyqwxsnegpmabrg.supabase.co'
const supabaseKey = process.env.SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)