import Head from 'next/head'
import { AddChatIcon, Avatar, OpenAiIcon, SendIcon } from '@/components/Icons'
import { TypingEffect } from '@/components/TypingEffect'
import { useMessageResponse } from '@/store/messages'
import { useRef } from 'react'

function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Chat GPT</title>
      </Head>
      <div className='relative w-full h-screen bg-gptgray'>
        <Aside />
        {children}
      </div>
    </>
  )
}

function Aside() {
  return (
    <aside className='fixed flex flex-col w-64 h-screen bg-gptdarkgray'>
      <nav className='flex flex-col flex-1 h-full p-2 space-y-1'>
        <button className='flex items-center gap-3 px-3 py-3 mb-2 text-sm text-white border rounded-md cursor-pointer border-white/20'>
          <AddChatIcon />
          New chat
        </button>
      </nav>
    </aside>
  )
}

function Chat() {
  const messages = useMessageResponse(state => state.messages)
  console.log(messages)
  return (
    <div className='relative flex flex-col flex-1 h-full ml-64'>
      <main className='flex flex-col items-center gap-3'>
        {
          messages.map(message => {
            return (
              <Message key={message.id} {...message} />
            )
          })
        }
      </main>
      <ChatForm />
    </div>
  )
}

function Message({ ai, message, avatar }) {
  const avatarEl = ai ? <OpenAiIcon /> : <Avatar src={avatar} />
  const textToRender = ai ? <TypingEffect text={message} /> : message

  return (
    <div className={`${ai ? 'bg-gptlightgray' : 'bg-gptgray'} w-full`}>
      <article className='flex w-full max-w-3xl gap-4 py-6 m-auto'>
        {avatarEl}
        <p className='flex-1 text-gray-300'>
          {textToRender}
        </p>
      </article>
    </div>
  )
}

function ChatForm() {
  const sendPrompt = useMessageResponse(state => state.sendPrompt)
  const textAreaRef = useRef()

  const handleSubmit = (event) => {
    event.preventDefault()

    const { value } = textAreaRef.current
    sendPrompt({ prompt: value })
    textAreaRef.current.value = ''
  }

  const handleChange = () => {
    const el = textAreaRef.current
    const scrollHeight = el.scrollHeight
    el.style.height = scrollHeight + 'px'
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault()
      handleSubmit(event)
    }
  }

  return (
    <section className='absolute bottom-0 w-full'>
      <form onKeyDown={handleKeyDown} onSubmit={handleSubmit} className='relative max-w-3xl mx-auto'>
        <textarea
          onChange={handleChange}
          ref={textAreaRef}
          rows={1}
          tabIndex={0}
          className='w-full h-12 py-3 pl-6 rounded resize-none bg-gptlightgray focus:outline-none'
        />
        <button type='submit' className='absolute p-1 rounded-md top-3 right-3 hover:bg-gptdarkgray hover:cursor-pointer'>
          <SendIcon />
        </button>
        <div className='px-3 pt-3 pb-6 text-xs text-gptgray'>
          ChatGPT Feb 13 Version. Free Research Preview. Our goal is to make AI systems more natural and safe to interact with. Your feedback will help us improve.
        </div>
      </form>
    </section>
  )
}

export default function Home() {
  return (
    <Layout>
      <Chat />
    </Layout>
  )
}
