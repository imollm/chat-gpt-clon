import { useContext, useEffect, useState } from 'react'
import { AddChatIcon, Spinner } from './Icons'
import { useSupabaseClient, useUser } from '@supabase/auth-helpers-react'
import { MiniChat } from './MiniChat'
import { ChatContext } from '@/context/ChatProvider'

export function Aside() {
  const supabase = useSupabaseClient()
  const user = useUser()
  const [loading, setLoading] = useState(true)
  const { chats, setChats } = useContext(ChatContext)

  useEffect(() => {
    getAllChats()
  }, [])

  async function getAllChats() {
    try {
      setLoading(true)

      if (user) {
        const { data, error, status } = await supabase
          .from('chats')
          .select(`*, messages (*)`)
          .eq('user_id', user.id)
          .order('created_at')

        if (error && status !== 406) {
          throw error
        }

        if (data) {
          setChats(data)
        }
      }
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <aside className='fixed flex flex-col w-64 h-screen bg-gptdarkgray'>
      <nav className='flex flex-col flex-1 h-full p-2 space-y-1'>
        <button className='flex items-center gap-3 px-3 py-3 mb-2 text-sm text-white border rounded-md cursor-pointer border-white/20'>
          <AddChatIcon />
          New chat
        </button>
        {loading && <Spinner />}
        <ul>
          {chats &&
            chats.map((chat) => {
              return (
                <MiniChat
                  key={chat.id}
                  {...chat}
                  isLastOne={chats.at(-1).id === chat.id}
                />
              )
            })}
        </ul>
      </nav>
    </aside>
  )
}
