console.log('chegou no index.js ')

import { getUser } from './services/user.js'
import { getRepositories } from './services/repositories.js'
import { getEvents } from './services/events.js'
import { user } from './objects/user.js'
import { screen } from './objects/screen.js'
// Esse document chama a funcao ao clicar no botao buscar
document.getElementById("btn-search").addEventListener('click', () => {
    const userName = document.getElementById('input-search').value
    if (validateEmptyInput(userName)) return
    getUserData(userName)
})
// Esse document chama a funcao ao apertar enter
document.getElementById("input-search").addEventListener('keyup', (e) => {
    const userName = e.target.value
    const key = e.which || e.keyCode
    if (key === 13) {

        if(validateEmptyInput(userName)) return

        getUserData(userName)

    }
})

// funcao validar campo de pesquisa

function validateEmptyInput(userName) {
    if (userName.length === 0) {
        alert('Preencha o campo com o nome do usuário GitHub')
        return true
    }
}

async function getUserData(userName) {

    const userResponse = await getUser(userName)

    if(userResponse.message === 'Not Found'){
        console.log('caiu aqui ')
       screen.renderNotFound()
       return
    }
    const repositoriesResponse = await getRepositories(userName)
    const eventsResponse = await getEvents(userName)

    user.setInfo(userResponse)
    user.setRepositories(repositoriesResponse)
    user.setEvents(eventsResponse) 
    screen.renderUser(user)

}