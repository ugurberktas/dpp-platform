import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

const SUPABASE_URL = 'https://dgpdjfsgxncxljzmqhuq.supabase.co'
const SUPABASE_KEY = 'sb_publishable_4a1ZiJiPAfNVexKNOszUew_N6gXHNHk'

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY)