import { useMessageResponse } from "@/store/messages"
import { Message } from "@/components/Message"
import { ChatForm } from "@/components/ChatForm"

export function Chat() {
  const messages = useMessageResponse((state) => state.messages)

  return (
    <div className='relative flex flex-col flex-1 h-full ml-64'>
      <main className='flex flex-col items-center gap-3'>
        {messages.map((message) => {
          return <Message key={message.id} {...message} />
        })}
      </main>
      <ChatForm />
    </div>
  )
}
