import {getUser} from '/src/scripts/services/user.js'
import {repositories} from '/src/scripts/services/repositories.js'
import {user} from '/src/scripts/objects/user.js'

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

    await getUser(userName)
     

    // getUser(userName).then(userData => {

    //     let userInfo = `
    //     <div class = "info">
    //         <img class='img' src="${userData.avatar_url} alt="Foto do perfil do usuario"/>
    //         <div class="data" >
    //         <h1>${userData.name ?? 'Não possui nome cadastrado  😭'}</h1>
    //         <p>${userData.bio ?? 'Não possui bio cadastrado  😭'}</p>
    //         </div>
    //     </div> `
    //     document.querySelector('.profile-data').innerHTML = userInfo

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

