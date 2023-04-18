export async function useFetch({ prompt }) {
    if (prompt) {
        const response = await fetch(`/api/chat`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ prompt })
        })
        console.log(response)
        return response
    }
}