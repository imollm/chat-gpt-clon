import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'
import { Layout } from '@/components/Layout'
import { Chat } from '@/components/Chat'
import { Login } from '@/components/Login'
import { Aside } from '@/components/Aside'
import { useState } from 'react'

const Home = () => {
  const session = useSession()
  const supabase = useSupabaseClient()
  const [selectedChatId, setSelectedChatId] = useState()

  function handleSwitchChat(chatId) {
    setSelectedChatId(chatId)
  }

  return (
    <>
      {!session ? (
        <Login supabase={supabase} />
      ) : (
        <Layout>
          <Aside handleSwitchChat={(chatId) => handleSwitchChat(chatId)} />
          <Chat session={session} selectedChatId={selectedChatId} />
        </Layout>
      )}
    </>
  )
}

export default Home
