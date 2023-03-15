import { useEffect, useRef, useState } from 'react'
import { ChatIcon, EditIcon, TrashIcon } from './Icons'

export function MiniChat({ id }) {
  const [isSelected, setIsSelected] = useState(false)
  const miniChat = useRef()
  const buttons = useRef()

  useEffect(() => {
    document.querySelectorAll('.mini-chat')?.forEach(chat => {
        if (chat.classList.contains('bg-slate-400/20')) {
            chat.classList.remove('bg-slate-400/20')
        }

        chat.querySelector('div:nth-child(2)').classList.add('hidden')

        if (!chat.classList.contains('hover:bg-slate-400/20')) {
            chat.classList.add('hover:bg-slate-400/20')
        }

        miniChat.current.classList.add('bg-slate-400/20')
        buttons.current.classList.remove('hidden')
    })
  }, [isSelected])

  return (
    <li
      key={id}
      ref={miniChat}
      id={id}
      className={`mini-chat flex justify-between items-center gap-3 px-3 py-3 mb-2 text-sm text-white cursor-pointer rounded-md`}
      onClick={() => setIsSelected(!isSelected)}
    >
      <div className='flex items-center gap-2'>
        <ChatIcon />
        <span>{id}</span>
      </div>
      <div ref={buttons} className='flex items-center gap-2'>
        <EditIcon />
        <TrashIcon />
      </div>
    </li>
  )
}
