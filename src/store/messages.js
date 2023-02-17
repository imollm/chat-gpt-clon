import { create } from 'zustand'

export const useMessageResponse = create((set, get) => ({
    messages: [],
    sendPrompt: async ({ prompt }) => {
        const messageAIid = get().messages.length + 1

        // Set state with old messages and two news with the user's prompt and another one for AI empty
        set(state => ({
            messages: [
                ...state.messages,
                {
                    id: state.messages.length,
                    ai: false,
                    message: prompt,
                    avatar: 'https://pbs.twimg.com/profile_images/2350348765/M2NaUg6b_400x400'
                },
                {
                    id: state.messages.length + 1,
                    ai: true,
                    message: '',
                    avatar: ''
                }
            ]
        }))

        // Fetch the new message from OpenAI through our API and then populate the last message in the state
        try {
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ prompt })
            })

            const json = await response.json()

            set(state => ({
                messages: state.messages.map(currentMsg => {
                    if (currentMsg.id === messageAIid) {
                        console.log(json.message)
                        return {
                            ...currentMsg,
                            message: json.message,
                        }
                    }

                    return currentMsg
                })
            }))
        } catch (error) {
            console.error(error)
        }
    }
}))