import handleError from "@/utils/errors"
import SupabaseClient from "@/utils/supabase"
import { MESSAGES } from "@/utils/messages"

export default async function handler(req, res) {
    try {
        if (req.method !== 'GET')
            return res.status(405).json({ error: handleError(MESSAGES.METHOD_NOT_ALLOWED, 405) })

        const { id } = req.query

        if (!id)
            return res.status(400).json({ error: handleError(MESSAGES.PARAM_ID_REQUIRED, 400) })

        const lastChats = await SupabaseClient.getInstance().getLastChat(id)
        
        return res.status(200).json(lastChats)
    } catch (error) {
        return res.status(500).json({
            error: handleError(error, 500)
        })
    }
}