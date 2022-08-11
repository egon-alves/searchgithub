import { getUser } from '/src/scripts/services/user.js'
import { repositories } from '/src/scripts/services/repositories.js'
import { user } from '/src/scripts/objects/user.js'
import { screen } from '/src/scripts/objects/screen.js'
// Esse document chama a funcao ao clicar no botao buscar
document.getElementById("btn-search").addEventListener('click', () => {
    const userName = document.getElementById('input-search').value
    getUserProfile(userName)
})
// Esse document chama a funcao ao apertar enter
document.getElementById("input-search").addEventListener('keyup', (e) => {
    const userName = e.target.value
    const key = e.which || e.keyCode
    if (key === 13) {
        getUserProfile(userName)
    }
})

async function getUserProfile(userName) {

    const userResponse = await getUser(userName) 
    user.setInfo(userResponse)


    //user.repositories(repositories)

    // getUser(userName).then(userData => {

    screen.renderUser(user)

    //     getUserRepositories(userName)
    // })

}// campo para repositorio

function getUserRepositories(userName) {
    repositories(userName).then(reposData => {
        let repositoriesitens = ""
        //target="_blank"
        reposData.forEach(repo => {
            console.log(repo)
            repositoriesitens += `<li><a href="${repo.html_url}"target="_blank" </a> ${repo.name}</li>`

        });
        document.querySelector('.profile-data').innerHTML += `
        <div class='repositories section'>
            <h2>Repositórios</h2>
            <ul>${repositoriesitens}</ul>
        </div>
        `

    })
}

