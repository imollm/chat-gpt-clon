import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'
import { Layout } from '@/components/Layout'
import { Chat } from '@/components/Chat'
import { Login } from '@/components/Login'
import { Aside } from '@/components/Aside'
import { ChatProvider } from '@/context/ChatProvider'

const Home = () => {
  const session = useSession()
  const supabase = useSupabaseClient()

  return (
    <>
      {!session ? (
        <Login supabase={supabase} />
      ) : (
        <Layout>
          <ChatProvider>
            <Aside />
            <Chat session={session} />
          </ChatProvider>
        </Layout>
      )}
    </>
  )
}

export default Home
