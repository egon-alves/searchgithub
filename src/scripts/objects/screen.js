const screen = {
    userProfile: document.querySelector('.profile-data'),
    renderUser(user) {
        this.userProfile.innerHTML = `
            <div class = "info">
                <img class='img' src="${user.avatarUrl} alt="Foto do perfil do usuario"/>
                <div class="data" >
                <h1>${user.name ?? 'Não possui nome cadastrado  😭'}</h1>
                <p>${user.bio ?? 'Não possui bio cadastrado  😭'}</p>
                <div class="menu-followers">
                    <p>Seguidores: ${user.followers}</p>
                    <p>Seguindo:${user.following} </p>
                </div>

                </div>
            </div> `

        let repositoriesItens = ''
        user.repositories.forEach(repo => repositoriesItens += `
        
        <li><a href="${repo.html_url}" target="_blank" > ${repo.name} </a> </li>
        `);

        if (user.repositories.length > 0) {
            this.userProfile.innerHTML += `<div class="repositories section" >
                <h2>Repositorio</h2> 
                <ul>${repositoriesItens}</ul>
                </div>`
        }
    },
    renderNotFound() {
        this.userProfile.innerHTML = "<h3> Usuário não encontrado"
    }
}

export { screen }