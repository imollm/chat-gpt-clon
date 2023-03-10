import { useState, useEffect } from 'react'
import { Message } from '@/components/Message'
import { ChatForm } from '@/components/ChatForm'
import { useSupabaseClient, useUser } from '@supabase/auth-helpers-react'
import { Spinner } from './Icons'

export function Chat({ session }) {
  const supabase = useSupabaseClient()
  const user = useUser()
  const [loading, setLoading] = useState(true)
  const [lastChatId, setLastChatId] = useState(null)
  const [messages, setMessages] = useState([])
  const [username, setUsername] = useState(null)
  const [avatar_url, setAvatarUrl] = useState(null)

  useEffect(() => {
    getProfile()
  }, [session])

  useEffect(() => {
    getMessagesLastChat()
  }, [user])

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

  async function getMessagesLastChat() {
    try {
      let { data, error, status } = await supabase
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
        setLastChatId(data.id)
      }
    } catch (error) {
      console.error(error)
    }

    if (lastChatId) {
      let { data, error, status } = await supabase
        .from('messages')
        .select('*')
        .eq('chat_id', lastChatId)

      if (error && status !== 406) {
        throw error
      }

      if (data) {
        setMessages(data)
      }
    }

    setLoading(false)
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
