import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'
import { Layout } from '@/components/Layout'
import { Chat } from '@/components/Chat'
import { Login } from '@/components/Login'

const Home = () => {
  const session = useSession()
  const supabase = useSupabaseClient()

  return (
    <>
      {!session ? (
        <Login supabase={supabase} />
      ) : (
        <Layout>
          <Chat session={session} />
        </Layout>
      )}
    </>
  )
}

export default Home
