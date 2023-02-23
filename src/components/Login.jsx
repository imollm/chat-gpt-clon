import { Auth, ThemeMinimal } from '@supabase/auth-ui-react'
import { supabase } from '@/utils/supabase'
import { OpenAiIcon } from './Icons'

export function Login() {
  return (
    <div className='flex flex-col items-center justify-center w-full h-screen'>
      <div>
        <OpenAiIcon />
      </div>
      <div className='w-96'>
        <Auth
          supabaseClient={supabase}
          appearance={{ theme: ThemeMinimal }}
          providers={['github']}
        />
      </div>
    </div>
  )
}
