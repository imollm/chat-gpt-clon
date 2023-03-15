import { Avatar, OpenAiIcon } from '@/components/Icons'
import { TypingEffect } from './TypingEffect'

export function Message({ ai, message, avatar }) {
  const avatarEl = ai ? <OpenAiIcon /> : <Avatar src={avatar} />
  const textToRender = ai ? <TypingEffect text={message} /> : message

  return (
    <div className={`${ai ? 'bg-gptlightgray' : 'bg-gptgray'} 2lg:w-full w-[85%]`}>
      <article className='flex w-full max-w-3xl gap-4 py-6 m-auto'>
        {avatarEl}
        <p className='flex-1 text-gray-300'>{textToRender}</p>
      </article>
    </div>
  )
}
