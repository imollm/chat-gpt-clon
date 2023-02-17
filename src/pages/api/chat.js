export default async function handler(req, res) {
    if (req.method !== 'POST')
        return res.status(405).end()

    const { prompt } = req.body

    if (!prompt)
        return res.status(400).json({ message: 'prompt is required' })

    const payload = {
        model: "text-davinci-003",
        prompt: `Responde como si fueras la inteligencia artificial conversacional ChatGPT. El usuario te escribe un prompt y tú debes contestar de forma natural. El prompt es:\n\n${prompt}`,
        temperature: 0.7,
        max_tokens: 256,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
    }

    try {
        const response = await fetch('https://api.openai.com/v1/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${process.env.OPENAI_API_KEY}`
            },
            body: JSON.stringify(payload)
        })

        if (!response.ok) {
            return res.status(500).json({ error: 'Error while fetching OpenAI API' })
        }

        const json = await response.json()
        return res.status(200).json({
            message: json.choices[0].text
        })
    } catch(e) {
        console.error(e)
        return res.status(500).json({ error: e })
    }
}