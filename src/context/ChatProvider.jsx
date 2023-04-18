import { useState, createContext } from 'react'

export const ChatContext = createContext()

export function ChatProvider({ children }) {
    const [chats, setChats] = useState()
    const [selectedChatId, setSelectedChatId] = useState()

    const storeMessage = (message) => {
        if (chats && selectedChatId && message) {
            const chatsCopy = [...chats]
            const chat = chatsCopy.find(chat => chat.id == selectedChatId)
            const messagesCopy = 
                chat.hasOwnProperty('messages') && chat.messages.length 
                    ? [...chat.messages] 
                    : []

            messagesCopy.push(message)
            chat['messages'] = messagesCopy
            setChats(chatsCopy)
        }
    }

    return (
        <ChatContext.Provider value={
            {
                chats,
                setChats,
                selectedChatId,
                setSelectedChatId,
                storeMessage
            }
        }>
            {children}
        </ChatContext.Provider>
    )
}
