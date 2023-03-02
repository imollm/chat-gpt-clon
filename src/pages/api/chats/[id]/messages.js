import handleError from "@/utils/errors"
import SupabaseClient from "@/utils/supabase"
import { MESSAGES } from "@/utils/messages"

export default async function handler(req, res) {
    try {
        if (req.method === 'GET') {
            const { id } = req.query

            if (!id)
                return res.status(400).json({ error: handleError(MESSAGES.PARAM_ID_REQUIRED, 400) })
    
            const messages = await SupabaseClient.getInstance().getMessages(id)
            
            return res.status(200).json(messages)
        } else if (req.method === 'POST') {
            const { id } = req.query
            if (!id) return res.status(400).json({ error: handleError(MESSAGES.PARAM_ID_REQUIRED, 400) })

            const messageObj = req.body
            const attrs = ['message', 'ai']
            const hasAttrs = attrs.every((attr) => Object.keys(messageObj).includes(attr)) 
            if (!hasAttrs) return res.status(422).json({ error: handleError(MESSAGES.BODY_MISSING, 422) })

            const newMessage = await SupabaseClient.getInstance().storeMessage(messageObj, id)
            return res.status(201).json(newMessage)
        } else {
            return res.status(405).json({ error: handleError(MESSAGES.METHOD_NOT_ALLOWED, 405) })
        }
    } catch (error) {
        return res.status(500).json({
            error: handleError(error.message, 500)
        })
    }
}