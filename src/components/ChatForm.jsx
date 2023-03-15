import { SendIcon } from '@/components/Icons'
import { useRef } from 'react'

export function ChatForm({ selectedChatId }) {
  const textAreaRef = useRef()

  const handleSubmit = (event) => {
    event.preventDefault()

    const { value } = textAreaRef.current
    textAreaRef.current.value = ''
  }

  const handleInput = () => {
    const textarea = textAreaRef.current;
    textarea.style.height = 'auto'; // reset height to auto
    textarea.style.height = textarea.scrollHeight + 'px';
  }

  const handleValueChange = () => {
    setTimeout(handleInput, 0)
  }

  const handleFormKeyDown = (event) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault()
      handleSubmit(event)
    }
  }

  return (
    <section className='absolute bottom-0 w-full'>
      <form
        onKeyDown={handleFormKeyDown}
        onSubmit={handleSubmit}
        className='relative max-w-3xl mx-auto'
      >
        <textarea
          onInput={handleInput}
          onChange={handleValueChange}
          ref={textAreaRef}
          rows={1}
          tabIndex={0}
          className='w-full h-12 py-3 pl-6 pr-14 rounded resize-none bg-gptlightgray focus:outline-none'
        />
        <button
          type='submit'
          className='absolute p-1 rounded-md top-3 right-3 hover:bg-gptdarkgray hover:cursor-pointer'
        >
          <SendIcon />
        </button>
        <div className='px-3 pt-3 pb-6 text-xs text-gptgray'>
          ChatGPT Feb 13 Version. Free Research Preview. Our goal is to make AI
          systems more natural and safe to interact with. Your feedback will
          help us improve.
        </div>
      </form>
    </section>
  )
}
