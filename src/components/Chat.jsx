import { useState, useEffect, useContext } from 'react'
import { Message } from '@/components/Message'
import { ChatForm } from '@/components/ChatForm'
import { useSupabaseClient, useUser } from '@supabase/auth-helpers-react'
import { Spinner } from './Icons'
import { ChatContext } from '@/context/ChatProvider'

export function Chat({ session }) {
  const supabase = useSupabaseClient()
  const user = useUser()
  const [loading, setLoading] = useState(true)
  const [messages, setMessages] = useState([])
  const [username, setUsername] = useState(null)
  const [avatar_url, setAvatarUrl] = useState(null)
  const { selectedChatId, setSelectedChatId, chats } = useContext(ChatContext)

  useEffect(() => {
    getProfile()
  }, [session])

  useEffect(() => {
    getMessagesByChat()
  }, [selectedChatId])

  async function getProfile() {
    try {
      setLoading(true)

      let { data, error, status } = await supabase
        .from('profiles')
        .select(`full_name, avatar_url`)
        .eq('id', user.id)
        .single()

      if (error && status !== 406) {
        throw error
      }

      if (data) {
        setUsername(data.full_name)
        setAvatarUrl(data.avatar_url)
      }
    } catch (error) {
      alert('Error loading user data!')
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  async function getMessagesByChat() {
    try {
      // When its first render and no chat id is selected
      if (!selectedChatId) {
        const { data, error, status } = await supabase
          .from('chats')
          .select('id')
          .eq('user_id', user.id)
          .order('created_at', { ascending: false })
          .limit(1)
          .single()

        if (error && status !== 406) {
          throw error
        }

        if (data) {
          setSelectedChatId(data.id)
        }
      } 
      // When user click and switch chat on the aside
      if (selectedChatId) {
        if (!chats) {
          const { data, status, error } = await supabase
            .from('messages')
            .select('*')
            .eq('chat_id', selectedChatId)

          if (error && status !== 406) {
            throw error
          }

          setMessages(data)
          return
        }

        const chat = chats.find(c => c.id == selectedChatId)
        setMessages(chat.messages)
      }
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className='relative flex flex-col flex-1 h-full ml-64'>
      <main className='flex flex-col items-center gap-3'>
        {loading && (
          <div className='pt-6'>
            <Spinner />
          </div>
        )}
        {messages &&
          messages.map((message) => {
            return <Message key={message.id} {...message} avatar={avatar_url} />
          })}
      </main>
      <ChatForm />
    </div>
  )
}
