
export const bff = process.env.NODE_ENV === 'development'
    ? 'http://localhost:3001/v1'
    : '/v1'