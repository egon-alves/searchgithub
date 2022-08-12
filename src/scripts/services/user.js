import { baseUrl } from '../variables.js'
// funcao busca os usuarios
async function getUser(userName) {
    const response = await fetch(`${baseUrl}${userName}`)
    return await response.json()
}

export { getUser } 