import request from 'superagent'

export async function fetchAllNeko() {
  const response = await request.get('/api/v1/neko')
  return response.body
}