import handleError from "@/utils/errors"
import SupabaseClient from "@/utils/supabase"
import { MESSAGES } from "@/utils/messages"

export default async function handler(req, res) {
    try {
        if (req.method !== 'POST')
            return res.status(405).json({ error: handleError(MESSAGES.METHOD_NOT_ALLOWED, 405) })

        const chatObj = req.body
        if (!['user_id'].every(attr => Object.keys(chatObj).includes(attr)))
            return res.status(422).json({ error: handleError(MESSAGES.BODY_MISSING, 422) })

        const chat = await SupabaseClient.getInstance().storeChat(chatObj)
        return res.status(201).json(chat)
    } catch (error) {
        return res.status(500).json({
            error: handleError(error.message, 500)
        })
    }
}