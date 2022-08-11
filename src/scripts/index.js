import { getUser } from '/src/scripts/services/user.js'
import { getRepositories } from '/src/scripts/services/repositories.js'
import { user } from '/src/scripts/objects/user.js'
import { screen } from '/src/scripts/objects/screen.js'
// Esse document chama a funcao ao clicar no botao buscar
document.getElementById("btn-search").addEventListener('click', () => {
    const userName = document.getElementById('input-search').value
    getUserData(userName)
})
// Esse document chama a funcao ao apertar enter
document.getElementById("input-search").addEventListener('keyup', (e) => {
    const userName = e.target.value
    const key = e.which || e.keyCode
    if (key === 13) {
        getUserData(userName)
    }
})

async function getUserData(userName) {

    const userResponse = await getUser(userName) 
    const repositoriesResponse = await getRepositories(userName) 

    user.setInfo(userResponse)
    user.setRepositories(repositoriesResponse)
 
    screen.renderUser(user)

    console.log(user)
    //     getUserRepositories(userName)
    // })

}// campo para repositorio

