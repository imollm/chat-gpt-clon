import { SendIcon } from '@/components/Icons'
import { ChatContext } from '@/context/ChatProvider'
import { useFetch } from '@/hooks/useFetch'
import { getHighestMessageId } from '@/utils'
import { useSupabaseClient } from '@supabase/auth-helpers-react'
import { useContext, useRef, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';

export function ChatForm() {
  const supabase = useSupabaseClient()
  const { selectedChatId, storeMessage } = useContext(ChatContext)
  const [isBtnDisabled, setIsBtnDisabled] = useState(true)
  const textAreaRef = useRef()
  const submitBtnRef = useRef()

  const handleInput = () => {
    const textarea = textAreaRef.current
    textarea.style.height = 'auto' // reset height to auto
    textarea.style.height = textarea.scrollHeight + 'px' // set height to scrollHeight
  }

  const handleValueChange = () => {
    // use setTimeout to ensure scrollHeight is updated correctly
    setTimeout(handleInput, 0)

    setIsBtnDisabled(textAreaRef.current.value.length <= 0)
    submitBtnRef.current.disabled = isBtnDisabled
  }

  const handleFormKeyDown = (event) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault()
      handleSubmit(event)
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    const { value } = textAreaRef.current
    textAreaRef.current.value = ''

    if (selectedChatId && value?.length > 0) {
      const newMessage = {
        chat_id: selectedChatId,
        ai: false,
        message: value
      }

      const lastId = getHighestMessageId()
      if (lastId) {
        newMessage.id = lastId + 1
      }

      try {
        const { data, error } = await supabase
          .from('messages')
          .insert({ ...newMessage })
          .select()
          .single()

        if (error) {
          throw error
        }

        if (data) {
          storeMessage(data)

          const prompt = value
          const response = await useFetch({ prompt })

          if (response.status !== 200) {
            toast.error(`Something went wrong!`)
          }
        }
      } catch (error) {
        console.error(error)
      }
    }
  }

  return (
    <section className='absolute bottom-0 w-full'>
      <form
        onKeyDown={handleFormKeyDown}
        onSubmit={handleSubmit}
        className='relative max-w-3xl mx-auto flex flex-col justify-center items-center'
      >
        <textarea
          onInput={handleInput}
          onChange={handleValueChange}
          ref={textAreaRef}
          rows={1}
          tabIndex={0}
          className='h-12 py-3 pl-6 pr-14 rounded resize-none bg-gptlightgray focus:outline-none 2lg:w-full w-[85%]'
        />
        <button
            disabled
            ref={submitBtnRef}
            type='submit'
            className={`absolute p-1 rounded-md top-3 2lg:right-[3%] right-[9%] ${
              isBtnDisabled
                ? 'hover:cursor-not-allowed'
                : 'hover:bg-gptdarkgray hover:cursor-pointer'
            }`}
          >
            <SendIcon />
          </button>
        <div className='px-3 pt-3 pb-6 text-xs text-gptgray'>
          ChatGPT Feb 13 Version. Free Research Preview. Our goal is to make AI
          systems more natural and safe to interact with. Your feedback will
          help us improve.
        </div>
      </form>
      <Toaster />
    </section>
  )
}
