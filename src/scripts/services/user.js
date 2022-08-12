import { baseUrl } from '../variables.js'
// funcao busca os usuarios
async function getUser(userName) {
    const response = await fetch(`${baseUrl}egon-alves`)
    return await response.json()
}
//${userName}
export { getUser } 