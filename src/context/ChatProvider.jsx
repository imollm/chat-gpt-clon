const { useState, createContext } = require("react");

export const ChatContext = createContext()

export function ChatProvider({ children }) {
    const [chats, setChats] = useState([])
    const [selectedChatId, setSelectedChatId] = useState()

    return (
        <ChatContext.Provider value={{chats, setChats, selectedChatId, setSelectedChatId}}>
            {children}
        </ChatContext.Provider>
    )
}
