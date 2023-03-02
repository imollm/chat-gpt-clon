export const MESSAGES = {
    BODY_MISSING: 'You missed some body attributes',
    METHOD_NOT_ALLOWED: 'The http method is not allowed',
    PARAM_ID_REQUIRED: 'Param id required'
}

export const HTTP_ERROR_MSG = {
    400: 'Bad Request',
    401: 'Unauthorized',
    402: 'Payment Required',
    403: 'Forbidden',
    404: 'Not Found',
    405: 'Method not allowed',
    409: 'Conflict',
    415: 'Unsupported Media Type',
    422: 'Unprocessable Entity',
    500: 'Internal Server Error',
}

export const ENVIRONMENT = process.env.ENV