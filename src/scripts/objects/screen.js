
const screen = {
    userProfile: document.querySelector('.profile-data'),
    renderUser(user) {
        this.userProfile.innerHTML = `
            <div class = "info">
                <img class='img' src="${user.avatarUrl} alt="Foto do perfil do usuario"/>
                <div class="data" >
                <h1>${user.name ?? 'Não possui nome cadastrado  😭'}</h1>
                <p>${user.bio ?? 'Não possui bio cadastrado  😭'}</p>
                <div class="menu-followers menu-mg">
                    <p>Seguidores: ${user.followers}</p>
                    <p>Seguindo:${user.following} </p>
                </div>
            
                </div>
            </div> `
//  Repositorios inicio
        let repositoriesItens = ''
        user.repositories.forEach(repo => repositoriesItens += `
        
        <li><a href="${repo.html_url}" target="_blank" >
        <div class= "menuRepositorio">
        <div class="title-repositorio">
          ${repo.name} 
      
        
             
        
        </div>
        <div class="list-repositorio ml">
        <i class="fa-solid fa-code-fork ml">${repo.forks_count}</i>
        <i class="fa-solid fa-star ml">${repo.stargazers_count}</i>
        <i class="fa-solid fa-eye ml"> ${repo.watchers_count} </i>


        <i class="fa-solid fa-bracket-curly "> ${repo.language}</i><i class="fa-solid fa-bracket-curly-right"></i>
        </div>
       </div>
        </a> </li>
        `);

        if (user.repositories.length > 0) {
            this.userProfile.innerHTML += `<div class="repositories section" >
                <h2>Repositorio</h2> 
                <ul>${repositoriesItens}</ul>
                </div>`
        }
// repositorio fim 


//evento inicio 
         let eventList = ''
       
        user.eventos.forEach(event => eventList += `
        <li>${event.repo.name} 
          
          
          
          
          </li>
        `  )

        this.userProfile.innerHTML += `
        <div class="section atividades" >
        <h2>Atividades </h2> 
        <ul>${eventList}</ul></br>
        </div>`
        
        console.log(user.eventos)
    },
    renderNotFound() {
        this.userProfile.innerHTML = "<h3> Usuário não encontrado"
    }
}

export { screen }


