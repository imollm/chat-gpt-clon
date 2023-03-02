import { HTTP_ERROR_MSG, ENVIRONMENT } from "./messages"

export default function handleError(error, code) {
    if (ENVIRONMENT === 'development') {
        return error ? error : HTTP_ERROR_MSG[code]
    } else if (ENVIRONMENT === 'production') {
        return HTTP_ERROR_MSG[code]
    }
}