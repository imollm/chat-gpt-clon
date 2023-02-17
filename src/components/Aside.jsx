import { AddChatIcon } from "./Icons"

export function Aside() {
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